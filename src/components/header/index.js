import { Container, Logo, Local, Cart, Set, Delivery } from "./styled";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>

      <Set>
        <Local>
          <FaMapMarkerAlt />
          <Delivery>Delivery all over Sfax</Delivery>
        </Local>

        <Cart>
          <Link to="/deliveryOrder">
            <FaShoppingCart />
          </Link>
        </Cart>
      </Set>
    </Container>
  );
}
