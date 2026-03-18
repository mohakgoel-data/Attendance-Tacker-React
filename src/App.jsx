import { useState, useEffect } from "react";
import { generateAttendance } from "./utils/constants";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import Controls from "./components/Controls";
import StudentDetail from "./components/StudentDetail";
import StudentTable from "./components/StudentTable";

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [showLow, setShowLow] = useState(false);
  const [sortAsc, setSortAsc] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => {
        const enriched = data.map((u) => {
          const att = generateAttendance();
          return {
            id: u.id,
            name: u.name,
            email: u.email,
            attendance: att,
            status: Math.random() > 0.5 ? "Present" : "Absent",
          };
        });
        setStudents(enriched);
        setLoading(false);
      });
  }, []);

  let visible = students
    .filter((s) => filter === "All" || s.status === filter)
    .filter((s) => !showLow || s.attendance < 75);

  if (sortAsc !== null) {
    visible = [...visible].sort((a, b) =>
      sortAsc ? a.attendance - b.attendance : b.attendance - a.attendance
    );
  }

  const stats = {
    total: students.length,
    present: students.filter((s) => s.status === "Present").length,
    absent: students.filter((s) => s.status === "Absent").length,
    lowAtt: students.filter((s) => s.attendance < 75).length,
  };

  const averageAttendance = students.length 
    ? Math.round(students.reduce((a, s) => a + s.attendance, 0) / students.length) 
    : 0;

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f13", fontFamily: "'Georgia', serif", padding: "0" }}>
      <Header />
      
      {!loading && (
        <>
          <StatsBar stats={stats} averageAttendance={averageAttendance} />
          <Controls 
            filter={filter} setFilter={setFilter}
            sortAsc={sortAsc} setSortAsc={setSortAsc}
            showLow={showLow} setShowLow={setShowLow}
          />
        </>
      )}

      <StudentDetail selected={selected} setSelected={setSelected} />
      
      <StudentTable 
        loading={loading} 
        students={visible} 
        selected={selected} 
        setSelected={setSelected} 
      />
    </div>
  );
}