import {
  Container,
  TitleCard,
  Value,
  Coffee,
} from "./../cafes/styled";
import { Card2 } from "./styled";

export default function ListCafes({ img, price, cardTitle}) {
  return (
    <Container>
      <Card2>
        <Coffee src={img} alt="country" />
        <TitleCard >{cardTitle}</TitleCard>
        <Value>{price}TND</Value>
      </Card2>
    </Container>
  );
}
