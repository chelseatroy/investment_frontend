import React from "react";
import Portfolio from "./Portfolio"

function PortfolioList(props) {
  return(
    <div>
      {props.portfolios.map(c =>
        <Portfolio key={c.id} name={c.name} value={c.value} />)
      }
    </div>
  );
}

export default PortfolioList;
