import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { FC } from "react";
import { LabelEntity } from "src/domain/entity/base-entity";

type GroupCheckboxComponentProps = {
  data: LabelEntity[];
  onClicked: (data: LabelEntity[]) => void;
};

const GroupCheckboxComponent: FC<GroupCheckboxComponentProps> = ({
  data,
  onClicked,
}) => {
  const handleOnChange = (id: string, isChecked: boolean) => {
    const result = data?.map((item) => ({
      ...item,
      isChecked: item?.id == id ? isChecked : item?.isChecked,
    }));
    onClicked?.(result);
  };

  const generateItem = (item: LabelEntity) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={item?.isChecked}
            onChange={(event, checked) => {
              handleOnChange(item?.id, checked);
            }}
          />
        }
        label={item?.name}
        style={{ marginRight: 30 }}
      />
    );
  };

  return (
    <Grid container mt={0}>
      <Grid md={12}>{data?.map((item) => generateItem(item))}</Grid>
    </Grid>
  );
};

export default GroupCheckboxComponent;
