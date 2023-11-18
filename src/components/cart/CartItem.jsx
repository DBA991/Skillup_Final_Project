function CartItem ({ nuItems, title, img, increment, decrement }) {
  return (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={nuItems} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);}

export default CartItem