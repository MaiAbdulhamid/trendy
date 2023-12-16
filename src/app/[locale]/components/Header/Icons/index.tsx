import { CartIcon, UserIcon, WishListIcon } from "../../../assets/svgs";
import URLS from "../../../utils/urls";
import Button from "../../Button/Button";
import User from "../../common/User";

const links = [
  { link: URLS.account.wishlist, text: <WishListIcon />, label: "wishlist" },
  { link: URLS.account.cart, text: <CartIcon />, label: "cart" },
];
const Icons = () => {
  const items = links.map((link) => (
    <a key={link.label} href={link.link}>
      {link.text}
    </a>
  ));
  return (
    <>
      {items}
      <Button noStyle>
        <User />
      </Button>
    </>
  );
};

export default Icons;
