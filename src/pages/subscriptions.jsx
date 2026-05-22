function Subscriptions() {
  return (
    <div className="main">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Subscription Tracking</h1>
        <p>Manage gym subscriptions</p>
      </div>

      {/* FORM CARD */}
      <div className="form-card">
        <h2>Add Subscription</h2>

        <div className="form-grid">
          <div className="input-group">
            <label>Member Name</label>
            <input
              type="text"
              id="subName"
              placeholder="Member Name"
            />
          </div>

          <div className="input-group">
            <label>Subscription Type</label>

            <select id="subType">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>

        <button className="add-btn">
          Add Subscription
        </button>
      </div>

      {/* SUBSCRIPTION LIST */}
      <div className="member-card">
        <h2>Subscription List</h2>

        <div id="subscriptionList"></div>
      </div>
    </div>
  )
}

export default Subscriptions