import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import OrderDetails from "./OrderDetails";

function MyOrders({ arr, isAuth }) {
  if (!isAuth) {
    return (
    <p>no orders!</p>)
  }

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i, index) => (
              <tr key={index + i.id}>
                <td>{i.id}</td>
                <td>{i.oStatus}</td>
                <td>{i.item1 + i.item2 + i.item3}</td>
                <td>
                  ₹
                  {i.item1 * 200 +
                    i.item2 * 500 +
                    i.item3 * 1800 +
                    (i.item1 * 200 + i.item2 * 500 + i.item3 * 1800) * 0.18 +
                    200}
                </td>
                <td>{i.pMeth}</td>
                <td>
                  {" "}
                  <Link to={{ pathname: `/order/${i.id}` }}>
                    {" "}
                    <AiOutlineEye />{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default MyOrders;
