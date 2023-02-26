import React from 'react';
import Student from './student/student';
import './students.css';
import PropTypes from 'prop-types';

function Students(props) {

    const students = props.studentsList.map((student, index) => (
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

export default React.memo(Students);

Students.propTypes = {
    studentsList: PropTypes.array.isRequired,
    toggle: PropTypes.bool.isRequired,
    nameChanged: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired
};
