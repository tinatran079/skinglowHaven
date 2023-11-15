import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to SkinGlow Haven",
  description: "We sell the best skincare products for cheap",
  keywords: "skincare, buy skincare, cheap skincare",
};

export default Meta;
