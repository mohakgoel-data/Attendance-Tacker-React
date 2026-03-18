import { STATUSES } from "../utils/constants";

export default function Controls({ 
  filter, setFilter, 
  sortAsc, setSortAsc, 
  showLow, setShowLow 
}) {
  return (
    <div className="controls">
      <div className="filter-group">
        {STATUSES.map((s) => (
          <button
            key={s}
            className={`filter-btn ${filter === s ? "active" : ""}`}
            onClick={() => setFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="right-controls">
        <button
          className={`sort-btn ${sortAsc !== null ? "active" : ""}`}
          onClick={() => setSortAsc((p) => (p === null ? true : p ? false : null))}
        >
          <span>Sort</span>
          <span>{sortAsc === null ? "↕" : sortAsc ? "↑" : "↓"}</span>
        </button>

        <div className="toggle-wrap" onClick={() => setShowLow((v) => !v)}>
          <div className={`toggle-track ${showLow ? "on" : ""}`}>
            <div className="toggle-thumb" />
          </div>
          <span className="toggle-label">&lt;75% only</span>
        </div>
      </div>
    </div>
  );
}