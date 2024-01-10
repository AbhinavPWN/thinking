import React, { useState } from 'react'


const AddAttendance = ({addattendance})=>{
    const [newAttendance, setNewAttendance] = useState({
        name: '',
        attendance: '',
    });

    const handleSubmit =(e)=>{
        e.preventdefault();
        addattendance(newAttendance);
        setNewAttendance({name:'',attendance:''})

    };

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setNewAttendance({...newAttendance, [name]:value})
    };

    return (
        <div>
            <h2>Add attendance</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='Student Name'
                    name ='name'
                    value={newAttendance.name} 
                    onChange={handleChange}               
                />
                <input
                    type="text"
                    placeholder="Attendance Status"
                    name="attendance"
                    value={newAttendance.attendance}
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )

};

export default AddAttendance;