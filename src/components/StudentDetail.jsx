export default function StudentDetail({ selected, setSelected }) {
  if (!selected) return null;

  return (
    <div style={{ padding: "24px 0 0" }}>
      <div className="detail-panel">
        <div>
          <div className="detail-name">{selected.name}</div>
          <div className="detail-email">{selected.email}</div>
        </div>
        <div className="detail-divider" />
        <div className="detail-stat">
          <div className="detail-stat-num" style={{ color: selected.attendance >= 75 ? "#4ade80" : "#f87171" }}>
            {selected.attendance}%
          </div>
          <div className="detail-stat-label">Attendance</div>
        </div>
        <div className="detail-divider" />
        <div className="detail-stat">
          <div className="detail-stat-num" style={{ color: selected.status === "Present" ? "#4ade80" : "#f87171" }}>
            {selected.status}
          </div>
          <div className="detail-stat-label">Status</div>
        </div>
        <button className="close-btn" onClick={() => setSelected(null)}>Dismiss</button>
      </div>
    </div>
  );
}