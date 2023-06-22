import * as React from "react";
import "./Dropdown.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Single Cover Blocks",
  "Multi Cover Blocks",
  "Heavy Duty Cover Blocks",
  "Wheel Cover Blocks",
  "Clip-On Cover Blocks",
];

export default function Dropdown() {
  const [productName, setproductName] = React.useState([]);

  const handleChange = (e) => {
    console.log(setproductName(Array.isArray(e) ? e.map((x) => x.name) : []));
    const {
      target: { value },
    } = e;
    setproductName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Select Products
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={productName}
          onChange={handleChange}
          input={<OutlinedInput label="Select Products" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={productName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}