import {
  Cart,
  Container,
  Delivery,
  Title,
  Card,
  PriceInfo,
  PriceTag,
} from "./styled";

import { Link } from "react-router-dom";

import menu from "../../menu";
import CafesPay from "../cafesPay";
import { useDeliveryFee } from "../../hooks/useDeliveryFee";
export default function SelectedCafes({ value }) {


  const price = useDeliveryFee(menu);

  return (
    <Container>
      <Title>Selected Cafes</Title>
      <Card>
        {menu?.map((item) => (
          <CafesPay item={item} key={item.id} />
        ))}
        <PriceInfo>
          <PriceTag>
            <h5>total items</h5>

            <span value={price?.subTotal}>{`${value},00`}TND</span>
          </PriceTag>
          <PriceTag>
            <h5>Delivery fixed value</h5>

            <span>12,00TND</span>
          </PriceTag>
          <PriceTag>
            <h4>Total</h4>
            <span value={price?.total}>{`${value},00`}TND</span>
          </PriceTag>
        </PriceInfo>
        <Cart>
          <Link to="/OrderConfirmed">
            <Delivery>CONFIRM ORDER</Delivery>
          </Link>
        </Cart>
      </Card>
    </Container>
  );
}
