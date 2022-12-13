import {
  ContainerText,
  BackgroundC,
  List,
  Information,
  Caption,
  Title,
  Set,
  /*Coffee,*/
  Container,
  Title2,
} from "./styled";
import Background from "./../../assets/Background.png";
import { FaShoppingCart } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { GiCardboardBoxClosed, GiCoffeeCup } from "react-icons/gi";
export default function About() {
  return (
    <Container>
      <BackgroundC src={Background} alt="Background" />
      <ContainerText>
        <Set>
          <Title>Find the perfect coffee for any time of day</Title>
          <Caption>
            With Coffee Delivery you get your coffee wherever you are, at any time
            hour
          </Caption>
          <List>
            <Information>
              <FaShoppingCart className="circle1" />
              Simple and secure purchase
            </Information>
            <Information>
              <GiCardboardBoxClosed className="circle3" />
              Packaging keeps the coffee intact
            </Information>
            <Information>
              <RiTimerFill className="circle2" />
              Fast and tracked delivery
            </Information>
            <Information>
              <GiCoffeeCup className="circle4" />
              Coffee arrives fresh to you
            </Information>
          </List> 
        </Set>
      </ContainerText>
      <Title2>Our cafes</Title2>
    </Container>
  );
}
