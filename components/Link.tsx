import { NextPage } from "next";

interface Props {
  text: string;
  href: string;
}

const Link: NextPage<Props> = ({ text, href }) => {
  return (
    <a rel="noreferrer" target="_blank" href={href}>
      {text}
    </a>
  );
};

export default Link;
