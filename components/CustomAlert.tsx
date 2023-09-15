import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React, { FC } from "react";
import { ResponseStatusEntity } from "src/domain/entity/response-entity";
import parse from "html-react-parser";

type CustomAlertProps = {
  isOpen: boolean;
  status: ResponseStatusEntity;
  onClose: () => void;
  validation?: any[];
};

const CustomAlert: FC<CustomAlertProps> = ({
  isOpen,
  status,
  onClose,
  validation,
}) => {
  const getAlertType = () => {
    return status?.isError ? "error" : "success";
  };

  const getMessage = () => {
    return ["", undefined, null].includes(status?.message)
      ? status?.isError
        ? "Failed"
        : "Success"
      : status?.message;
  };

  const getValidation = () => {
    if (!validation) return "";

    let temp = "";
    let tempArray = [];
    try {
      validation?.map((item) => {
        const content = `${JSON.stringify(item)}<br />`;
        if (!tempArray.includes(content)) {
          tempArray.push(content);
          temp += content;
        }
      });
      return parse(
        temp.replaceAll('"', "").replaceAll("{", "").replaceAll("}", "")
      );
    } catch (e) {
      return "";
    }
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={getAlertType()} sx={{ width: "100%" }}>
        <AlertTitle>{getMessage()}</AlertTitle>
        <div>{getValidation()}</div>
      </Alert>
    </Snackbar>
  );
};

export { CustomAlert };
