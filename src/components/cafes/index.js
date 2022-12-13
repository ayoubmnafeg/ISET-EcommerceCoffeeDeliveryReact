import {
  Container,
  Card,
  TitleCard,
  Tag,
  About,
  Value,
  Purchase,
  Pay,
  Coffee,
} from "./styled";

import { FaShoppingCart } from "react-icons/fa";
import { QuantityButton } from "../quantityButton";
import { useState } from "react";
export default function Cafes({ img, tag, price, cardTitle, about}) {
  const [coffeeAmount, setCoffeeAmount] = useState(0);
  const isCoffeeSelected = coffeeAmount > 0;
  const buttonAddToCartIsDisabled = !isCoffeeSelected;

  const handleAddToCart = () => {
    // addCoffeeToCart(coffeeAmount);
  };

  const addOne = () => {
    if (coffeeAmount < 9) {
      setCoffeeAmount((state) => state + 1);
    }
  };

  const removeOne = () => {
    if (coffeeAmount > 0) {
      setCoffeeAmount((state) => state - 1);
    }
  };
  return (
    <Container>
      <Card>
        <Coffee src={img} alt="country" />
        <Tag>{tag && tag.map((tag) => <h6 key={tag}>{tag}</h6>)}</Tag>
        <TitleCard >{cardTitle}</TitleCard>
        <About>{about}</About>
        <Pay>
          <Value>{price}TND</Value>
          <QuantityButton 
            amount={coffeeAmount}
            addOne={addOne}
            removeOne={removeOne}
          />
          <Purchase 
          onClick={handleAddToCart}
          disabled={buttonAddToCartIsDisabled}
          title={
            buttonAddToCartIsDisabled
              ? 'Select quantity to add to cart'
              : 'Add to cart'
          }
          >
            <FaShoppingCart />
          </Purchase>
        </Pay>
      </Card>
    </Container>
  );
}
