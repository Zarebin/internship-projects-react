import React, { useRef, useEffect } from "react";
import { MDCSelect } from "@material/select";
import "./styles.scss";

const Select = function (props) {
  const ref = useRef();

  useEffect(() => {
    ref.current.select = new MDCSelect(ref.current);
    ref.current.select.listen("MDCSelect:change", (e) => {
      e.target.value = e.target.select.value;
      props.onChange(e);
    });
  }, []);

  useEffect(() => {
    ref.current.select.selectedIndex = props.options.findIndex(
      (option) => option.value == props.value
    );
  }, [props.value]);

  return (
    <div>
      <div
        className={
          "mdc-select mdc-select--filled demo-width-className" +
          " " +
          props.className
        }
        ref={ref}
      >
        <input {...props} type="hidden" options={null} />
        <div
          className="mdc-select__anchor"
          role="button"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-labelledby="demo-label demo-selected-text"
        >
          <span className="mdc-select__ripple"></span>
          <span id="demo-label" className="mdc-floating-label">
            {props?.label}
          </span>
          <span className="mdc-select__selected-text-container">
            <span
              id="demo-selected-text"
              className="mdc-select__selected-text"
            ></span>
          </span>
          <span className="mdc-select__dropdown-icon">
            <svg
              className="mdc-select__dropdown-icon-graphic"
              viewBox="7 10 10 5"
              focusable="false"
            >
              <polygon
                className="mdc-select__dropdown-icon-inactive"
                stroke="none"
                fill-rule="evenodd"
                points="7 10 12 15 17 10"
              ></polygon>
              <polygon
                className="mdc-select__dropdown-icon-active"
                stroke="none"
                fill-rule="evenodd"
                points="7 15 12 10 17 15"
              ></polygon>
            </svg>
          </span>
          <span className="mdc-line-ripple"></span>
        </div>

        <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
          <ul className="mdc-list" role="listbox" aria-label={props?.label}>
            {props.options?.map((option) => (
              <li
                className={
                  "mdc-list-item" +
                  (!!option.selected ? " mdc-list-item--selected" : "")
                }
                aria-selected={!!option.selected}
                data-value={option.value}
                role="option"
                key={option?.key}
              >
                <span className="mdc-list-item__ripple"></span>
                <span className="mdc-list-item__text">{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Select;
