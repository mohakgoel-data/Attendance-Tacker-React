export const STATUSES = ["All", "Present", "Absent"];

export const STATUS_COLORS = {
  Present: { bg: "#dcfce7", text: "#15803d", dot: "#22c55e" },
  Absent: { bg: "#fee2e2", text: "#b91c1c", dot: "#ef4444" },
};

export function generateAttendance() {
  return Math.floor(Math.random() * 55) + 45;
}