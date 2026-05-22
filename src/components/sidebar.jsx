import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>FitTrack</h2>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/members">Members</Link>
        </li>

        <li>
          <Link to="/attendance">Attendance</Link>
        </li>

        <li>
          <Link to="/subscriptions">Subscriptions</Link>
        </li>

        <li>
          <Link to="/workouts">Workout Schedule</Link>
        </li>

        <li>
          <Link to="/trainers">Trainers</Link>
        </li>

        <li>
          <Link to="/payments">Payments</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar