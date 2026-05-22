function Trainers() {
  return (
    <div className="main">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Trainer Management</h1>
        <p>Manage gym trainers</p>
      </div>

      {/* FORM CARD */}
      <div className="form-card">
        <h2>Add Trainer</h2>

        <div className="form-grid">
          <div className="input-group">
            <label>Trainer Name</label>

            <input
              type="text"
              id="trainerName"
              placeholder="Enter trainer name"
            />
          </div>

          <div className="input-group">
            <label>Specialization</label>

            <input
              type="text"
              id="trainerSpecialization"
              placeholder="Weight Training"
            />
          </div>

          <div className="input-group">
            <label>Contact Number</label>

            <input
              type="text"
              id="trainerContact"
              placeholder="09XXXXXXXXX"
            />
          </div>
        </div>

        <button className="add-btn">
          Add Trainer
        </button>
      </div>

      {/* TRAINER LIST */}
      <div className="member-card">
        <h2>Trainer List</h2>

        <div id="trainerList"></div>
      </div>
    </div>
  )
}

export default Trainers