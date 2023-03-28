import React from "react";
import PropTypes from "prop-types";

function Numbers(props) {
const {data} = props;
  return (
    <div id="numbers-container">
      {data ? (
        data.map(([key, value]) => {
          return (
            <div className="number-box" key={key + "x"}>
              <div key={key} className="number-fact">
              <p key={key + "x"}>{value}</p>
              </div>
              <div key={key + "y"} className="number">
              {key}
              </div>
            </div>
          );
        })
      ): (<p>Loading data...</p>)}
    </div>
  );
}

const numbersProptypes = {
    data: PropTypes.array
  };

Numbers.propTypes = numbersProptypes;

export default Numbers;
