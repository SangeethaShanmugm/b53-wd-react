import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "./utils/CartSlice";

export function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.items)

  console.log("cartItems", cartItems)

  const handleClearItem = () => {
    dispatch(clearItem())
  }

  return (
    <div>Cart
      {cartItems.map((item) => (
        <li>{item.name} - {item.price}</li>
      ))}
      <Button onClick={() => handleClearItem()}>Clear Cart</Button>
    </div>
  );
}
