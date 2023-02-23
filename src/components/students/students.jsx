import React from 'react';
import Student from './student/student';
import './students.css';

function Students(props) {

    const students = props.studentsList.map((student, index) =>(
        <Student 
            key={index}
            id={student.id}
            name={student.name}
            class={student.classNumber}
            phone={student.phoneNumber}
            email={student.email}
            nameChanged={(event) => props.nameChanged(student.id, event)}
            deleted={() => props.deleted(student.id)}
        />
    ));

    if (props.toggle) {
        return (
            <div className="student-section">
                { students }
            </div>
        );
    }

    return (
        students
    );
}

export default Students;
