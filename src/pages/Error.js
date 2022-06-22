import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.title = "Eesa Zahed | Page not found";
  }, []);

  return <div>Page not found.</div>;
};

export default Error;
