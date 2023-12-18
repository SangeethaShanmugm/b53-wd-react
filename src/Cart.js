export function Cart({ cartItem }) {
  return (
    <div>
      {cartItem.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}
