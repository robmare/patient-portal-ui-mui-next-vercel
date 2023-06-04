import { Scheduler } from "@aldabil/react-scheduler";
import { Container } from "@mui/material";
import * as React from 'react';
import DoctorNav from "../../components/navBars/DoctorNav";

const styles = {
  cellCal: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#292b2c",
    backgroundColor: "red",
    padding: "0 2em"
  }
};

const DoctorAgenda = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <DoctorNav />
      <Scheduler
        style={styles.cellCal}
        sx={{
          height: 100,
          width: 1,
          fontSize: 1,
          fontWeight: 'bold',
        }}
        view="month"
        events={[
          {
            event_id: 1,
            title: "Event 1uuu",
            start: new Date("2023/5/2 09:30"),
            end: new Date("2023/5/2 10:30"),
          },
          {
            event_id: 2,
            title: "Event 2aaa",
            start: new Date("2021/5/4 10:00"),
            end: new Date("2021/5/4 11:00"),
            coolor: "red"
          },
        ]}
      />
    </Container>
  );
};

export default DoctorAgenda;
