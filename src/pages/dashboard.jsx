import React from "react";

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>FitTrack Dashboard</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>Total Members</h2>
          <p>120</p>
        </div>

        <div style={styles.card}>
          <h2>Active Trainers</h2>
          <p>8</p>
        </div>

        <div style={styles.card}>
          <h2>Today Attendance</h2>
          <p>95%</p>
        </div>

        <div style={styles.card}>
          <h2>Pending Payments</h2>
          <p>5</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Dashboard;