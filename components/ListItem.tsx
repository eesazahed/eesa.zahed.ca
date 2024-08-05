import { NextPage } from "next";
import Link from "./Link";

interface Props {
  text: string;
  href: string;
  description?: string;
}

const ListItem: NextPage<Props> = ({ text, href, description }) => {
  return (
    <li className="mx-10 py-1 list-[square] text-lg">
      <Link text={text} href={href} />
      {description && <i className="text-[#9CA3AF]"> - {description}</i>}
    </li>
  );
};

export default ListItem;
