import React from "react";

function Ingredient({ ingredient }, key) {
  return (
    <table className="table">
      <thead>
        <tr
          style={{
            textAlign: "center",
            fontSize: "1.2em",
            paddingBottom: "1em",
          }}
        >
          <strong>Ingredients:</strong>
        </tr>
      </thead>
      <tbody>
        {Object.entries(ingredient).map(([name, value]) => (
          <tr key={name + key}>
            <td><strong>{name}</strong></td>
            <td><em>{value}</em></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Ingredient;
