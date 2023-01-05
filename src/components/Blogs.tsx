import axios from "axios";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";

type blogsDataProps = {
  blogs: {
    title: String;
    blog: String;
    createdAt: String;
    LastUpdated: String;
    id: Number;
    user?: UserArray;
  }[];
};

type UserArray = {
  LastUpdated: String;
  createdAt: String;
  email: String;
  name: String;
  id: Number;
};

const Blogs = (props: blogsDataProps) => {
  const { blogs } = props;
  return (
    <>
      {blogs &&
        blogs[0] &&
        blogs.map((each, index) => {
          return (
            <div key={index} style={{ paddingRight: 30}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  lineHeight: 2,
                }}
              >
                <span style={{ fontSize: 20, fontWeight: 500 }}>{each.title}</span>
                <span>{each.user?.name}</span>
              </div>
              <p>{each.blog}</p>
              <hr/>
            </div>
          );
        })}
    </>
  );
};

export default Blogs;
