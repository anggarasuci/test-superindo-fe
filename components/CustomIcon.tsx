import React from "react";
import * as Muicon from "@material-ui/icons";

const CustomIcon = ({ name, ...rest }) => {
  const IconComponent = Muicon[name];
  return IconComponent ? (
    <IconComponent
      {...rest}
      style={{ width: 20, height: 20, marginRight: 5 }}
    />
  ) : null;
};

export { CustomIcon };
