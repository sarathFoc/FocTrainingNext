type blogFooterProps = {
  blogFooter: object
}
const Footer = (props: blogFooterProps ) => {
  console.log("props.blogFooter", props.blogFooter)
  return (
    <div data-testid='footerMainDiv' style={{ backgroundColor: "#151f3d", height: "30vh" , padding: 20}}>
        <p data-testid='paragraphOneFooter' style={{ color: "whitesmoke"}}>{props.blogFooter?.footerTitle}</p>
        <p style={{ color: "whitesmoke", fontWeight:100}}>{props.blogFooter?.footerDescription}</p>
    </div>
  );
};

export default Footer;
