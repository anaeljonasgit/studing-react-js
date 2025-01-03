import { Link } from "react-router-dom";

const HelloWorld = () => {
  return (
    <>
      <h1>Hello world</h1>

      <Link to="/other-page">
        <button>Go to Other Page</button>
      </Link>

      <br />
      <br />

      <Link to="/hooks/useState">useState</Link>
      <br />
      <Link to="/hooks/useEffect">useEffect</Link>
      <br />
      <Link to="/hooks/useMemo">useMemo</Link>
      <br />
    </>
  );
};

export default HelloWorld;
