import { NextPage } from "next";

interface Props {
  text: string;
}

const Gradient: NextPage<Props> = ({ text }) => {
  return (
    <span className="bg-gradient-to-r from-[#05b066] to-[#36ff47] bg-clip-text text-transparent">
      {text}
    </span>
  );
};

export default Gradient;
