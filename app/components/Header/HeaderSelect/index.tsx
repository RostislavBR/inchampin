"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import { SelectItem, HeaderSelectProps } from "@interfaces/Select";
import styles from "./styles.module.scss";

const customStyles: StylesConfig<SelectItem> = {
  container: (provided) => ({
    ...provided,
    width: "100%",
    maxWidth: "203px",
    minHeight: "43px",

    "@media (min-width: 1920px)": {
      maxWidth: "240px",
      minHeight: "51px",
    },

    "@media (min-width: 1024px) and (max-width: 1280px)": {
      maxWidth: "192px",
      minHeight: "43px",
    },

    "@media (min-width: 768px) and (max-width: 1023px)": {
      maxWidth: "188px",
      minHeight: "43px",
    },
  }),

  control: (provided) => ({
    ...provided,
    width: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#2F80ED",
    border: "1px solid #2F80ED",
    borderRadius: "100px",
    outline: "none",
    boxShadow: "none",
    position: "relative",
    "&:hover": {
      border: "1px solid #2F80ED",
      outline: "none",
    },
    "&:focus": {
      border: "1px solid #2F80ED",
      outline: "none",
    },

    "@media (min-width: 1920px)": {
      padding: "18px 24px",
    },

    "@media (min-width: 1024px) and (max-width: 1280px)": {
      padding: "15px 20px",
    },

    "@media (min-width: 768px) and (max-width: 1023px)": {
      padding: "15px 18px",
    },
  }),

  menu: (provided, state) => ({
    ...provided,
    marginTop: "5px",
    borderRadius: "8px",
    transition: "opacity 300ms ease-in-out",
    opacity: state.selectProps.menuIsOpen ? 1 : 0,
    visibility: state.selectProps.menuIsOpen ? "visible" : "hidden",
  }),

  menuList: (provided) => ({
    ...provided,
    padding: 0,
    border: "1px solid #000000",
    borderRadius: "8px",
    transition: "border-color 0.3s ease-in-out",
    "&:hover": {
      border: "1px solid #2F80ED",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "100%",
    letterSpacing: "1.05px",
    textTransform: "uppercase",
    padding: "13px 12px",
    backgroundColor: state.isSelected ? "#2F80ED" : "white",
    color: state.isSelected ? "white" : "black",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#2F80ED",
    },

    "&:focus": {
      color: "#ffffff",
      backgroundColor: "#2F80ED",
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#ffffff",
    textTransform: "uppercase",
    fontSize: "13px",
    fontWeight: 600,
    lineHeight: "100%",
    letterSpacing: "1.05px",
    margin: 0,
    padding: 0,

    "@media (min-width: 1920px)": {
      fontSize: "15px",
    },

    "@media (min-width: 1024px) and (max-width: 1280px)": {
      fontSize: "12px",
    },

    "@media (min-width: 768px) and (max-width: 1023px)": {
      fontSize: "12px",
    },
  }),

  singleValue: (provided) => ({
    ...provided,

    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "100%",
    letterSpacing: "1.05px",
    color: "#ffffff",
    textTransform: "uppercase",
    margin: 0,
    padding: 0,
  }),

  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    display: "none",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  indicatorsContainer: (provided) => ({
    ...provided,
    width: "100%",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    margin: 0,
    padding: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    color: "#ffffff",
    padding: "0 15px 2px 0",
    transition: "color 0.3s",
    "&:hover": {
      color: "#d3d3d3",
    },

    "@media (min-width: 1920px)": {
      padding: "0 25px 2px 0",
    },

    "@media (min-width: 1024px) and (max-width: 1280px)": {
      padding: "0 15px 2px 0",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    margin: 0,
    padding: 0,
  }),
};

const HeaderSelect: FC<HeaderSelectProps> = ({
  items,
  onChange,
  ...restProps
}): ReactElement | null => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<SelectItem> | MultiValue<SelectItem>
  >(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (
    selected: SingleValue<SelectItem> | MultiValue<SelectItem>,
    actionMeta: ActionMeta<SelectItem>,
  ) => {
    setSelectedOption(selected);
    if (onChange) {
      onChange(selected, actionMeta);
    }
  };

  return (
    <div className={styles.header_select_wrapper}>
      {isMounted && (
        <Select
          {...restProps}
          options={items}
          value={selectedOption}
          defaultValue={selectedOption}
          placeholder={"Выбрать квартиру"}
          onChange={handleChange}
          openMenuOnClick={true}
          styles={customStyles}
        />
      )}
    </div>
  );
};

export default HeaderSelect;
