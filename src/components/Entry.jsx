
import React from "react";

function Entry(pall) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {pall.img}
        </span>
        <span>{pall.name}</span>
      </dt>
      <dd>{pall.meaning}</dd>
    </div>
  );
}

export default Entry;
