export default function StatsBar({ stats, averageAttendance }) {
  return (
    <div className="stats-bar">
      <div className="stat-cell accent">
        <div className="stat-num">{stats.total}</div>
        <div className="stat-label">Total Students</div>
      </div>
      <div className="stat-cell green">
        <div className="stat-num">{stats.present}</div>
        <div className="stat-label">Present</div>
      </div>
      <div className="stat-cell red">
        <div className="stat-num">{stats.absent}</div>
        <div className="stat-label">Absent</div>
      </div>
      <div className="stat-cell red">
        <div className="stat-num">{stats.lowAtt}</div>
        <div className="stat-label">Below 75%</div>
      </div>
      <div className="stat-cell">
        <div className="stat-num" style={{ color: "#e2a84b" }}>
          {averageAttendance}%
        </div>
        <div className="stat-label">Avg. Attendance</div>
      </div>
    </div>
  );
}