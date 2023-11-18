import React from "react";
import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";

function Shipping () {
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedState, setSelectedState] = React.useState('');
  React.useEffect(() => {
    if (selectedCountry) {
      const statesOfSelectedCountry = State.getStatesOfCountry(selectedCountry);
      setSelectedState(statesOfSelectedCountry[0]?.isoCode || '');
    }
  }, [selectedCountry]);
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
        <label>Country</label>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select a Country</option>
          {Country && Country.getAllCountries().map((country) => (
            <option value={country.isoCode} key={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
          </div>
          <div>
        <label>State/Region</label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select a State/Region</option>
          {State && State.getStatesOfCountry(selectedCountry).map((state) => (
            <option value={state.isoCode} key={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No.</label>

            <input type="number" placeholder="Enter Phone No." />
          </div>
          <Popup
            trigger={<button type="button">Confirm Order</button>}
            position="right"
          >
            <div
              style={{
                display: "flex",
                color: "red",
                float: "right",
                backgroundColor: "#fff",
                padding: "0%",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
