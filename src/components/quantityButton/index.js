import { QuantityInputContainer } from "./styled";
import { Minus, Plus } from "phosphor-react";

export function QuantityButton({ amount, addOne, removeOne }) {
  const handleAddOne = () => {
    addOne();
  };

  const handleRemoveOne = () => {
    removeOne();
  };
  return (
    <QuantityInputContainer>
      <button onClick={handleRemoveOne} title="To remove 1">
        <Minus />
      </button>
      <span>{amount}</span>
      <button onClick={handleAddOne} title="Add 1">
        <Plus />
      </button>
    </QuantityInputContainer>
  );
}
