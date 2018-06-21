import React from "react";
import Portfolio from "./Portfolio"

function PortfolioList(props) {
  return(
    <div>
      {props.portfolios.map(c =>
        <Portfolio key={c.id} name={c.name} />)
      }
    </div>
  );
}

export default PortfolioList;
