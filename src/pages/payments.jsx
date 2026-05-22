function Payments() {
  return (
    <div className="main">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Payment Management</h1>
        <p>Track member payments</p>
      </div>

      {/* FORM CARD */}
      <div className="form-card">
        <h2>Add Payment</h2>

        <div className="form-grid">
          <div className="input-group">
            <label>Member Name</label>

            <input
              type="text"
              id="paymentName"
              placeholder="Enter member name"
            />
          </div>

          <div className="input-group">
            <label>Amount</label>

            <input
              type="number"
              id="paymentAmount"
              placeholder="Enter amount"
            />
          </div>

          <div className="input-group">
            <label>Payment Date</label>

            <input
              type="date"
              id="paymentDate"
            />
          </div>
        </div>

        <button className="add-btn">
          Add Payment
        </button>
      </div>

      {/* PAYMENT LIST */}
      <div className="member-card">
        <h2>Payment List</h2>

        <div id="paymentList"></div>
      </div>
    </div>
  )
}

export default Payments