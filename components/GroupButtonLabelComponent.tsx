import { DeleteOutline } from "@material-ui/icons";
import { Button, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { LabelEntity } from "src/domain/entity/base-entity";
import CheckIcon from "@mui/icons-material/Check";

type GroupButtonLabelComponentProps = {
  data: LabelEntity[];
  onClicked: (id: string) => void;
  isVertical: boolean;
  isSmallText?: boolean;
};

const GroupButtonLabelComponent: FC<GroupButtonLabelComponentProps> = ({
  data,
  onClicked,
  isVertical,
  isSmallText,
}) => {
  const getIcon = (isChecked: boolean) => {
    return isChecked ? <CheckIcon /> : null;
  };

  const generateButtomItem = (item: LabelEntity) => {
    return (
      <Button
        fullWidth={isVertical}
        style={{
          marginRight: !isVertical ? 10 : 0,
          marginBottom: !isVertical ? 10 : 0,
        }}
        onClick={() => {
          onClicked(item?.id);
        }}
        variant={item?.isChecked ? "contained" : "outlined"}
        endIcon={getIcon(item?.isChecked)}
      >
        {isSmallText && (
          <Typography variant={"caption"}>{item?.name}</Typography>
        )}
        {!isSmallText && item?.name}
      </Button>
    );
  };

  const generateItem = (item: LabelEntity) => {
    return (
      <Grid md={12} style={{ marginBottom: 10, marginRight: 8 }}>
        {generateButtomItem(item)}
      </Grid>
    );
  };

  return (
    <Grid container mt={2}>
      {data?.map((item) =>
        isVertical ? generateItem(item) : generateButtomItem(item)
      )}
    </Grid>
  );
};

export default GroupButtonLabelComponent;
