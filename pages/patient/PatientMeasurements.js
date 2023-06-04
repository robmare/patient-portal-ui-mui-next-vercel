import { Container } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/router";
import * as React from 'react';
import PatientSmartNav from "./../../components/navBars/PatientSmartNav";

const columns = [
  { field: 'id', headerName: 'ID', width: 0, hide: true },
  { field: 'id_measure', headerName: 'Id_measure', width: 0, hide: true },
  { field: 'date', headerName: 'Data', width: 110 },
  { field: 'hour', headerName: 'Hour', width: 70 },
  { field: 'value', headerName: 'Value', width: 70 },
  { field: 'misure', headerName: 'Misure', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
];

const rows = [
  { id: 1, id_measure: 122, date: "12/05/2022", hour: '9:00', value: '94', misure: 'Weight', type: 'weight' },
  { id: 2, id_measure: 125, date: "12/05/2022", hour: '9:00', value: '96', misure: 'Weight', type: 'weight' },
  { id: 3, id_measure: 126, date: "12/05/2022", hour: '9:00', value: '94', misure: 'Height', type: 'height' },
  { id: 4, id_measure: 127, date: "12/05/2022", hour: '9:30', value: '94', misure: 'Height', type: 'height' },
  { id: 5, id_measure: 129, date: "12/05/2022", hour: '9:00', value: '95', misure: 'Height', type: 'height' },
  { id: 6, id_measure: 132, date: "12/05/2022", hour: '9:00', value: '94', misure: 'Height', type: 'height' },
  { id: 7, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', misure: 'Height', type: 'height' },
];

const PatientMeasurements = () => {
  let router = useRouter();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <PatientSmartNav page={'PatientMeasurements'} />
      <div style={{ width: '100%', height: '600px' }}>
        <DataGrid
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              router.push("/PatientInsertMeasurements");
            }
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
                id_measure: false,
                value: false,
                type: false,
              },
            },
          }}
          size="medium"
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Container>
  );
};
export default PatientMeasurements;
