import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AttendanceTable = ({ attendanceData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString('en-US'); // Get the current date
  
    // Format the file name with the current date
    const fileName = `student_attendance_${currentDate}.pdf`;

    doc.autoTable({
      head: [['Student Name', 'Attendance Status']],
      body: attendanceData.map(({ name, attendance }) => [name, attendance]),
      theme: 'grid', // Applying the 'grid' theme for borders
      styles: {
      lineColor: [0, 0, 0], // Color of the lines (black in this case)
      lineWidth: 0.5, // Width of the lines
      },
    });
    doc.save(fileName);
  };

  return (
    <div>
      <h2>Student Attendance</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={generatePDF}>Download as PDF</button>
    </div>
  );
};

export default AttendanceTable;
