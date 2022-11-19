import React from "react";
import { useEffect, useState } from "react";
import "./index.less";

export interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean, e: React.MouseEvent) => any
}

const Switch: React.FC<SwitchProps> = (props) => {

  const { checked, onChange } = props
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  function onInputChange(e) {
    const value = e.target.checked;
    setIsChecked(value);
    if (!onChange) {
      return;
    }
    onChange(value, e);
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onInputChange}
        className="switch-checkbox"
      />
      <div
        className={
          isChecked
            ? "switch-container switch-container-checked"
            : "switch-container"
        }
      ></div>
      {isChecked ? "true" : "false"}
    </label>
  );
}

export default Switch;
