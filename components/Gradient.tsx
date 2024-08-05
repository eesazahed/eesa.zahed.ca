import { NextPage } from "next";

interface Props {
  text: string;
}

const Gradient: NextPage<Props> = ({ text }) => {
  return (
    <span className="bg-gradient-to-r from-[#00cc66] to-[#00ffd9] bg-clip-text text-transparent">
      {text}
    </span>
  );
};

export default Gradient;
