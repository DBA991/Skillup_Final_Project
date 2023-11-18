import React from "react";
function OrderDetails({ arr, isAuth }) {
  if (!isAuth) {
    return <p>no orders!</p>;
  }
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {arr.address}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {arr.name}
          </p>
          <p>
            <b>Phone</b>
            {arr.phone}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {arr.oStatus}
          </p>
          <p>
            <b>Placed At</b>
            {arr.pAt}
          </p>
          <p>
            <b>Delivered At</b>
            {arr.dAt}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {arr.pMeth}
          </p>
          <p>
            <b>Payment Reference</b>#{arr.id}
          </p>
          <p>
            <b>Paid At</b>
            {arr.payAt}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{" "}
            {arr.item1 * 200 + arr.item2 * 500 + arr.item3 * 1800}
          </p>
          <p>
            <b>Shipping Charges</b>₹{200}
          </p>
          <p>
            <b>Tax</b>₹
            {(arr.item1 * 200 + arr.item2 * 500 + arr.item3 * 1800) * 0.18}
          </p>
          <p>
            <b>Total Amount</b>₹
            {arr.item1 * 200 +
              arr.item2 * 500 +
              arr.item3 * 1800 +
              (arr.item1 * 200 + arr.item2 * 500 + arr.item3 * 1800) * 0.18 +
              200}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{arr.item1}</span> x <span>{200}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{arr.item2}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{arr.item3}</span> x <span>{1800}</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>
              ₹
              {arr.item1 * 200 +
                arr.item2 * 500 +
                arr.item3 * 1800}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}
export default OrderDetails;
