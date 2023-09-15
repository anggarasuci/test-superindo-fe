import {
  Autocomplete,
  FormControl,
  InputLabel,
  TextField,
  styled,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";

type CustomSelectAutoCompleteProps = {
  data: any[]; // id, label
  id: string;
  title: string;
  variantType?: "standard" | "outlined" | "filled";
  onSelect: (id: string) => void;
  onKeyPress: (name: string) => void;
  sx?: any | {};
  customColor?: string | "#111111";
};

const CustomSelectAutoComplete: FC<CustomSelectAutoCompleteProps> = ({
  data,
  id,
  title,
  onSelect,
  onKeyPress,
  variantType,
  sx,
  customColor,
}) => {
  const [valueInput, setValueInput] = useState<string>("");

  useEffect(() => {
    if (valueInput.length > 2) onKeyPress?.(valueInput);
  }, [valueInput]);

  const handleOnSelect = (id: string) => {
    onSelect?.(id);
  };

  return (
    <FormControl variant={variantType ?? "outlined"} fullWidth>
      <Autocomplete
        id="autocomplete-id"
        disablePortal
        options={data ?? []}
        defaultValue={id}
        sx={{
          ...sx,
          "& .MuiAutocomplete-inputRoot": {
            "& .MuiInput-input": {
              borderColor: customColor,
              color: customColor,
            },
          },
          "& .MuiInputLabel-root": {
            borderColor: customColor,
            color: customColor,
          },
        }}
        onSelect={(event) => {
          if (id != "") handleOnSelect(id);
        }}
        onChange={(event, value) => {
          handleOnSelect(value?.id);
        }}
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              label={title}
              variant={variantType ?? "outlined"}
              value={valueInput}
              onChange={(event) => {
                setValueInput(event.target.value);
              }}
            />
          </>
        )}
      />
      {/* )} */}
    </FormControl>
  );
};

export { CustomSelectAutoComplete };
