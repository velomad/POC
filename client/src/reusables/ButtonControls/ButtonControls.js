import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const ButtonControls = ({ exclude }) => {
  const buttons = ["add", "edit", "save", "search", "reset", "cancel"];

  const excludeBtns = buttons.filter((el) =>
    exclude ? !exclude.includes(el) : buttons
  );

  return (
    <div>
      <div className="flex space-x-1.5">
        {excludeBtns.map((btn, index) => (
          <div key={index} className="inline-block">
            <Button btnText={btn} imageUrl={`/images/${btn}.svg`} />
          </div>
        ))}
      </div>
    </div>
  );
};

ButtonControls.propTypes = {
  exclude: PropTypes.array,
};

export default ButtonControls;
