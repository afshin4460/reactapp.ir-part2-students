import React, {useState} from 'react';
import './App.css';
import Students from './components/students/students';
import Button from './components/ui/button/button';

function App() {
    const [studentsState, setStudents] = useState([
        {id: 0, name: 'Afshin', classNumber: 204, phoneNumber: 12345, email: 'afshin.m4460@gmail.com'},
        {id: 1, name: 'Mahdi', classNumber: 214, phoneNumber: 123456, email: 'afshin.m4460@gmail.com'},
        {id: 2, name: 'Ali', classNumber: 224, phoneNumber: 1234567, email: 'afshin.m4460@gmail.com'},
        {id: 3, name: 'Amir', classNumber: 234, phoneNumber: 12345678, email: 'afshin.m4460@gmail.com'}
    ]);
    const handleNameChange = (id, event) => {
        const studentIndex = studentsState.findIndex((student) => {
            return student.id === id;
        });
        const newStudent = {...studentsState[studentIndex]};
        newStudent.name = event.target.vaule;
        const newStudents = [...studentsState];
        newStudents[studentIndex] = newStudent;
        setStudents(newStudents);
    };
    const deleteStudent = (id) => {
        const studentIndex = studentsState.findIndex((student) => {
            return student.id === id;
        });
        const students = [...studentsState];
        students.splice(studentIndex, 1);
        setStudents(students);
    };
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <div className='App'>
            <Button btnType='success' clicked={handleToggle}>تغییر وضعیت نمایش</Button>
            <Students
                studentsList={studentsState}
                nameChanged={handleNameChange}
                deleted={deleteStudent}
                toggle={toggle}
            />
        </div>
    );
}

export default App;
