function Workouts() {
  return (
    <div className="main">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Workout Schedule</h1>
        <p>Manage workout programs</p>
      </div>

      {/* FORM CARD */}
      <div className="form-card">
        <h2>Add Workout</h2>

        <div className="form-grid">
          <div className="input-group">
            <label>Member Name</label>

            <input
              type="text"
              id="workoutName"
              placeholder="Enter member name"
            />
          </div>

          <div className="input-group">
            <label>Workout Plan</label>

            <input
              type="text"
              id="workoutPlan"
              placeholder="Chest Day"
            />
          </div>

          <div className="input-group">
            <label>Schedule</label>

            <input
              type="date"
              id="workoutDate"
            />
          </div>
        </div>

        <button className="add-btn">
          Add Workout
        </button>
      </div>

      {/* WORKOUT LIST */}
      <div className="member-card">
        <h2>Workout List</h2>

        <div id="workoutList"></div>
      </div>
    </div>
  )
}

export default Workouts