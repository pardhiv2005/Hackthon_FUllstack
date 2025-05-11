import { useState, useEffect } from "react";
import API from "../services/api";
import "./History.css";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchHistory = async () => {
      try {
        const res = await API.get("/history", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setHistory(res.data);
      } catch (err) {
        alert("Error fetching history");
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-page">
      <h2>🔁 Weather Search History</h2>
      {history.length === 0 ? (
        <p>No search history found.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>#</th>
              <th>City</th>
              <th>Temperature (°C)</th>
              <th>Description</th>
              <th>Humidity (%)</th>
              <th>Searched At</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.city}</td>
                <td>{entry.temperature}</td>
                <td>{entry.description}</td>
                <td>{entry.humidity}</td>
                <td>{new Date(entry.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;
