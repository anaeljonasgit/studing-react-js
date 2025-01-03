import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <>
      <h1>Other Page</h1>
      <Link to="/">
        <button>Go to Hello World</button>
      </Link>
    </>
  );
};

export default OtherPage;
