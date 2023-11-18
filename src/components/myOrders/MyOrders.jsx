import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

function MyOrders () {
  const arr = [
    {
      idNumber: "#36784627642738927",
      state: "Processing",
      quantity: "56",
      amount: "456456",
      payment: "COD",
      link: (
        <Link to={`/order/${"asdsds"}`}>
          {" "}
          <AiOutlineEye />{" "}
        </Link>
      ),
    },
    {
      idNumber: "#73946349858937",
      state: "Processed",
      quantity: "23",
      amount: "45646",
      payment: "PP",
      link: (
        <Link to={`/order/${"asdsds"}`}>
          {" "}
          <AiOutlineEye />{" "}
        </Link>
      ),
    },
    {
      idNumber: "#738272074237237",
      state: "Sent",
      quantity: "3",
      amount: "456446",
      payment: "COD",
      link: (
        <Link to={`/order/${"asdsds"}`}>
          {" "}
          <AiOutlineEye />{" "}
        </Link>
      ),
    },
    {
      idNumber: "85727623947923",
      state: "Completed",
      quantity: "11",
      amount: "45646",
      payment: "COD",
      link: (
        <Link to={`/order/${"asdsds"}`}>
          {" "}
          <AiOutlineEye />{" "}
        </Link>
      ),
    },
  ];

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
              <tr key={index + i.idNumber}>
                <td>{i.idNumber}</td>
                <td>{i.state}</td>
                <td>{i.quantity}</td>
                <td>₹ {i.amount}</td>
                <td>{i.payment}</td>
                <td>{i.link}</td>
              </tr>
            ))}
          </tbody>
          ;
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
