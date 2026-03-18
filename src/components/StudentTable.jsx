import { STATUS_COLORS } from "../utils/constants";

export default function StudentTable({ loading, students, selected, setSelected }) {
  if (loading) {
    return (
      <div className="loading-wrap">
        <div className="loading-dots">
          <div className="dot" /><div className="dot" /><div className="dot" />
        </div>
        <div className="loading-text">Fetching student records</div>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Attendance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan={4}>
                <div className="empty-state">
                  <div className="empty-icon">⊘</div>
                  <div className="empty-text">No students match the current filter</div>
                  <div className="empty-sub">Try adjusting your filters above</div>
                </div>
              </td>
            </tr>
          ) : (
            students.map((s, i) => {
              const isLow = s.attendance < 75;
              const color = isLow ? "#f87171" : "#4ade80";
              const sc = STATUS_COLORS[s.status];
              return (
                <tr
                  key={s.id}
                  className={`${selected?.id === s.id ? "selected" : ""} ${isLow ? "low" : ""}`}
                  onClick={() => setSelected(s.id === selected?.id ? null : s)}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <td>
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "12px",
                      color: "#ffffff20",
                      letterSpacing: "1px"
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </td>
                  <td>
                    <div className="student-name">{s.name}</div>
                    <div className="student-email">{s.email}</div>
                  </td>
                  <td>
                    <div className="att-wrap">
                      <span className="att-pct" style={{ color }}>{s.attendance}%</span>
                      <div className="att-bar-bg">
                        <div
                          className="att-bar-fill"
                          style={{ width: `${s.attendance}%`, background: color }}
                        />
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <span className="badge" style={{ background: sc.bg + "22", color: sc.text }}>
                      <span className="badge-dot" style={{ background: sc.dot }} />
                      {s.status}
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}