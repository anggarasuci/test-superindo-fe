import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { FC } from "react";

type CustomSelectProps = {
  data: any[]; //id, name, logo
  id: string;
  title: string;
  variantType?: "standard" | "outlined" | "filled";
  onSelect: (id: string) => void;
  sx?: any | {};
  includeLogo?: boolean;
  value?: string | "";
};

const CustomSelect: FC<CustomSelectProps> = ({
  data,
  id,
  title,
  onSelect,
  variantType,
  sx,
  includeLogo,
  value,
}) => {
  const handleOnSelect = (id: string) => {
    onSelect?.(id);
  };

  const renderItem = () => {
    return data?.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id} selected={item.id === id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {item?.logo && (
              <Avatar
                style={{ width: 20, height: 20, marginRight: 10 }}
                src={item?.logo ?? ""}
              />
            )}
            {item.name}
          </div>
        </MenuItem>
      );
    });
  };

  return (
    <FormControl variant={variantType ?? "outlined"} fullWidth>
      <InputLabel sx={sx}>{title}</InputLabel>
      <Select
        label={title}
        defaultValue={id}
        value={value}
        onSelect={(event) => {
          if (id != "") handleOnSelect(id);
        }}
        onChange={(event) => {
          handleOnSelect(event.target.value as string);
        }}
        sx={sx}
      >
        {renderItem()}
      </Select>
    </FormControl>
  );
};

export { CustomSelect };
