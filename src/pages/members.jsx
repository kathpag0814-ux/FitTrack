function Members() {
  return (
    <div className="main">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Member Management</h1>
        <p>Register gym members</p>
      </div>

      {/* FORM CARD */}
      <div className="form-card">
        <h2>Add Member</h2>

        <div className="form-grid">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" id="name" />
          </div>

          <div className="input-group">
            <label>Membership</label>
            <input type="text" id="membership" />
          </div>

          <div className="input-group">
            <label>Payment</label>
            <input type="number" id="payment" />
          </div>
        </div>

        <button className="add-btn">
          Add Member
        </button>
      </div>

      {/* MEMBER LIST */}
      <div className="member-card">
        <h2>Members List</h2>

        <div id="memberList"></div>
      </div>
    </div>
  )
}

export default Members