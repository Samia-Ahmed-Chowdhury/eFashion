import React from "react";

function Btn({props}) {
  return (
    <div className="flex justify-center mb-3">
      <button class="next_gen_btn">
        <span>{props}</span>
      </button>
    </div>
  );
}

export default Btn;
