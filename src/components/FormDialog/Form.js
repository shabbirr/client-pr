import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import "./Form.css";

// import Dropdown from "../Dropdown/Dropdown";
const ProductCategory = [
  { value: "Single Cover Blocks", label: "Single Cover Blocks" },
  { value: "Multi Cover Blocks", label: "Multi Cover Blocks" },
  { value: "Heavy Duty Cover Blocks", label: "Heavy Duty Cover Blocks" },
  { value: "Wheel Cover Blocks", label: "Wheel Cover Blocks" },
  { value: "Clip-On Cover Blocks", label: "Clip-On Cover Blocks" },
];

const Form = () => {
  //Fixing Dropdown select width
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: 250,
    }),
  };




 //Fetching data
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          key="Name"
          label="Name"
          variant="outlined"
          color="primary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          {...register("name")}
          required
          className="labelName"
        />
        <TextField
          label="Email"
          required
          variant="outlined"
          color="primary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          {...register("email")}
        />
        <TextField
          label="Number"
          required
          variant="outlined"
          color="primary"
          type="number"
          fullWidth
          {...register("number")}
          sx={{ mb: 3 }}
        />
        <div className="quote">
          <label for="quote">I want quotes for </label>
          <Controller
            name="products"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                styles={customStyles}
                {...field}
                isMulti
                options={ProductCategory}
                autosize={true}
              />
            )}
          />
          {errors.products && (
            <p className="errorMsg">This is a required field.</p>
          )}
        </div>

        <Button variant="outlined" color="primary" type="submit">
          Submit Request
        </Button>
      </form>
    </div>
  );
};

export default Form;