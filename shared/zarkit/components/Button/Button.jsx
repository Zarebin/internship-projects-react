import React, { useRef, useEffect } from "react";
import { MDCRipple } from "@material/ripple";
import "./styles.scss";

const Button = function (props) {
  const ref = useRef();

  useEffect(() => {
    new MDCRipple(ref.current);
  }, []);

  let customClass = !!props.unelevated ? " mdc-button--unelevated" : " mdc-button--raised";

  return (
    <button
      ref={ref}
      {...props}
      className={"mdc-button" + customClass + " " + props.className}
    >
      <span className="mdc-button__ripple"></span>
      <span className="mdc-button__label">{props.label || props.children}</span>
    </button>
  );
};
export default Button;
