import {
  Container,
  ContainerText,
  List,
  Caption,
  Title,
  Set,
} from "./styled";
import men from "./../../assets/men.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Information } from "../about/styled";
import { useState } from "react";

export default function RequestSuccess() {
  const { order } = useState();
  const address = order?.address;

  return (
    <Container>
      <ContainerText>
        <Set>
          <Title>Huh! confirmed order</Title>
          <Caption>
            Now just wait for the coffee to come to you soon
          </Caption>
          <List>
            <Information>
              <FaMapMarkerAlt className="circulo1" />
              Delivery in
              <span>{address?.street} {address?.number}</span>
            </Information>
            <Information>
              <RiTimerFill className="circulo2" />Delivery forecast
              <span>20 min - 30 min</span>
            </Information>
            <Information>
              <MdOutlineAttachMoney className="circulo3" />
              payment on delivery
              <span>{order?.paymentType}</span>
            </Information>
          </List>
        </Set>
        <img src={men} alt="" />
      </ContainerText>
    </Container>
  );
}
