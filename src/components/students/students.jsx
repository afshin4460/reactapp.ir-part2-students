import React from 'react';
import Student from './student/student';

function Students(props) {

    return (
        props.studentsList.map((student, index) =>(
            <Student 
                key={index}
                id={student.id}
                name={student.name}
                class={student.classNumber}
                phone={student.phoneNumber}
                email={student.email}
                nameChanged={(event) => props.nameChanged(student.id, event)}
            />
        ))
    );
}

export default Students;
