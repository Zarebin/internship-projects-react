import React, { useRef, useEffect } from "react";
import { MDCRipple } from "@material/ripple";
import "./styles.scss";

const Button = function (props) {
  const ref = useRef();

  useEffect(() => {
    new MDCRipple(ref.current);
  }, []);

  let customClass = !!props.unelevated ? " mdc-button--unelevated" : "";

  return (
    <button
      className={"mdc-button mdc-button--raised" + customClass}
      ref={ref}
      {...props}
    >
      <span className="mdc-button__ripple"></span>
      <span className="mdc-button__label">{props.children}</span>
    </button>
  );
};
export default Button;
