import React, { useState } from 'react';
import AttendanceTable from './components/AttendanceTable'
import AddAttendanceForm from './components/addAttendance';

const App = () => {
  const [attendanceData, setAttendanceData] = useState([
    { name: 'Abhinav Karki', attendance: 'Present' },
    { name: 'Ritesh Rijal', attendance: 'Absent' },
    { name: 'Jenish Kshteri', attendance: 'Present' },
    { name: 'Mahesh Dalle', attendance: 'Absent' },


    // Initial dummy data, replace with fetched data from the database
  ]);

  const addAttendance = (newAttendance) => {
    setAttendanceData([...attendanceData, newAttendance]);
  };

  return (
    <div>
      <h1>Student Attendance System</h1>
      <AttendanceTable attendanceData={attendanceData} />
      <AddAttendanceForm addAttendance={addAttendance} />
    </div>
  );
};

export default App;
