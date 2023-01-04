import { Button } from "reactstrap";
import BlogModal from "../components/BlogModal";
import Blogs from "../components/Blogs";
import { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "../components/NavBar";
import Footer from "../components/Footer";
import ButtonModel from "../subcomponents/button";
// import { getblogModal } from "../apis/apis";

const Home = (props: {blogHeader: any}) => {

  const blogHeder = props.blogHeader[0].fields

  const [blogData, setBlogData] = useState([]);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [blogPageForm, setBlogPageForm] = useState([]);
  const [ blogModal, setBlogModal] = useState([])

  const fetchBlogPageData = async () => {

    await axios.get('http://localhost:8000/blogPage').then(res=> {
        setBlogPageForm(res.data?.includes.Entry)

    })
  };

  const getBlogs = () => {
    axios.get('http://localhost:8000/blog').then(res=> {
        setBlogData(res.data)
    })
  }

  const getblogModal = () => {
    axios.get('http://localhost:8000/blogModal').then(res=> {
        console.log("blogModal data", res)
        setBlogModal(res.data?.includes.Entry)
    })
  }


  useEffect(() => {
    fetchBlogPageData();
    getBlogs()
    getblogModal()
  }, []);

  return (
    <>
      <NavigationBar blogHeader={blogHeder} />
      <div>
        {blogPageForm &&
          blogPageForm[0] &&
          blogPageForm.map((each, index) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 20,
                  }}
                >
                  <div style={{ width: "100vw" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 20,
                        justifyContent: "space-between",
                        paddingRight: 20,
                      }}
                    >
                      {each["fields"]["friendlyName"] === "create" && (
                        <ButtonModel
                          color={each["fields"]["theme"]}
                          text={each["fields"]["text"]}
                          handleButtonAction={() => setShowBlogModal(true)}
                        />
                      )}
                    </div>
                    <Blogs blogs={blogData} />
                  </div>
                </div>
                {each["fields"]["friendlyName"] === "footer" && (
                  <Footer blogFooter={each["fields"]} />
                )}
              </>
            );
          })}
      </div>
      <BlogModal
        closeBlogModal={() => setShowBlogModal(false)}
        showBlogModal={showBlogModal}
        blogdata={blogModal}
      />
    </>
  );
};

export default Home;

export const getBlogHeader = async () => {
  const result = await axios.get('http://localhost:8000/blogHeader').then(res=> {
    return res.data
        // setBlogData(res.data)
    })
    return result.items
}

export const getStaticProps: () => Promise<{
  props: {
    blogHeader: any;
  };
}> = async () => {
  const response = await getBlogHeader();
  return {
    props: {
      blogHeader: response,
    },
  };
};
