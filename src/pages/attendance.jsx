function Attendance() {
  return (
    <div className="main">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Attendance Monitoring</h1>
        <p>Track attendance records</p>
      </div>

      {/* FORM CARD */}
      <div className="form-card">
        <h2>Add Attendance</h2>

        <div className="form-grid">
          <div className="input-group">
            <label>Member Name</label>
            <input type="text" id="attendanceName" />
          </div>

          <div className="input-group">
            <label>Time</label>
            <input type="time" id="attendanceTime" />
          </div>
        </div>

        <button className="add-btn">
          Add Attendance
        </button>
      </div>

      {/* ATTENDANCE LIST */}
      <div className="member-card">
        <h2>Attendance List</h2>

        <div id="attendanceList"></div>
      </div>
    </div>
  )
}

export default Attendance