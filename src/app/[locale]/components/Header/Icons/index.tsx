import { CartIcon, UserIcon, WishListIcon } from "../../../assets/svgs";
import URLS from "../../../utils/urls";
import Link from "next/link";
import theme from "../../../utils/theme";
import User from "../../common/User";

const links = [
  { link: URLS.account.wishlist, text: <WishListIcon />, label: "wishlist" },
  { link: URLS.account.cart, text: <CartIcon />, label: "cart" },
  {
    link: URLS.account.dashboard,
    text: <User />,
    label: "Account",
  },
];
const Icons = () => {
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.text}
    </Link>
  ));
  return <>{ items }</>;
};

export default Icons;
