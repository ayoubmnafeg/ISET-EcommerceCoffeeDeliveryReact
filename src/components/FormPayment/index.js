import {
  ContainerText,
  List,
  Caption,
  Title,
  Set,
  Container,
  Card,
  TitleForm,
  Payment,
  InputContainer,
  CardPay
} from "./styled";
import { IMaskInput } from "react-imask";
import { FaMapMarkerAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsCreditCard2Back, BsBank } from "react-icons/bs";

import SelectedCoffees from "../SelectedCoffees";
export default function FormPayment({handleChangePaymentType } ) {
  return (
    <Container>
      <ContainerText>
        <Set>
          <Title>Complete your order</Title>
          <Card>
            <TitleForm>
              <FaMapMarkerAlt className="laranja" />
              Delivery address
            </TitleForm>
            <Caption>
              Enter the address where you want to receive your order
            </Caption>
            <IMaskInput mask="00000-000" placeholder="Zip code" />
            <input type="text" placeholder="Road" />
            <InputContainer>
              <input type="number" placeholder="Number" />
              <input type="text" placeholder="Complement" />
            </InputContainer>
            <InputContainer>
              <input type="text" placeholder="Neighborhood" />
              <input type="text" placeholder="City" />
              <IMaskInput mask="aa" type="text" placeholder="State" />
            </InputContainer>
          </Card>
          <CardPay>
            <TitleForm>
              <MdOutlineAttachMoney className="roxo" />
              Payment
            </TitleForm>
            <Caption>
            Payment is made upon delivery. Choose the way you want to pay
            </Caption>
            <List>
              <Payment>
                <BsCreditCard2Back
                  className="roxo"
                  type="button"
                  onClick={() => handleChangePaymentType("Credit card")}
                  // selected={paymentPreference === "creditCard"}
                  // onClick={() => handleSelectPaymentPreference("creditCard")}
                />
                CREDIT CARD
              </Payment>
              <Payment>
                <BsBank
                  className="roxo"
                  // selected={paymentPreference === "debitCard"}
                  // onClick={() => handleSelectPaymentPreference("debitCard")}
                  type="button"
                  onClick={() => handleChangePaymentType("Debit card")}
                />
                DEBIT CARD
              </Payment>
              <Payment>
                <FaRegMoneyBillAlt
                  className="roxo"
                  type="button"
                  onClick={() => handleChangePaymentType("Money")}
                  // selected={paymentPreference === "money"}
                  // onClick={() => handleSelectPaymentPreference("money")}
                />
                MONEY
              </Payment>
            </List>
          </CardPay>
        </Set>
        <SelectedCoffees />
      </ContainerText>
    </Container>
  );
}
