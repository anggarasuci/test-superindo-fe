import { DataGrid, GridColDef } from "@mui/x-data-grid";

const DataTable = (data: any[], columns: GridColDef[]) => {
  const perPage = 5;
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={perPage}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
