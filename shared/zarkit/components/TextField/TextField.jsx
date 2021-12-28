import React, { useRef, useEffect } from "react";
import { MDCTextField } from "@material/textfield";
import { MDCRipple } from "@material/ripple";
import "./styles.scss";

const TextField = function (props) {
  const ref = useRef();

  useEffect(() => {
    ref.current.textField = new MDCTextField(ref.current);
    ref.current.textField.value = props.value ? props.value : "";
  }, []);

  useEffect(() => {
    ref.current.textField.value = props.value ? props.value : "";
  }, [props.value]);

  let type = "filled";
  if (!!props.outlined) type = "outlined";

  return (
    <label className={"mdc-text-field mdc-text-field--" + type} ref={ref}>
      {type === "filled" ? (
        <>
          <span className="mdc-text-field__ripple"></span>
          <span className="mdc-floating-label" id="my-label-id">
            {props?.label}
          </span>
          <input
            className="mdc-text-field__input"
            type="text"
            aria-labelledby="my-label-id"
            {...props}
          />
          <span className="mdc-line-ripple"></span>
        </>
      ) : null}
      {type === "outlined" ? (
        <>
          <span className="mdc-notched-outline">
            <span className="mdc-notched-outline__leading"></span>
            <span className="mdc-notched-outline__notch">
              <span className="mdc-floating-label" id="my-label-id">
                {props?.label}
              </span>
            </span>
            <span className="mdc-notched-outline__trailing"></span>
          </span>
          <input
            type="text"
            class="mdc-text-field__input"
            aria-labelledby="my-label-id"
            {...props}
          />
        </>
      ) : null}
    </label>
  );
};
export default TextField;
