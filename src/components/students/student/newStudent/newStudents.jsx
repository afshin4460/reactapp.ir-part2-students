import React from 'react';
import './newStudent.css';
import Button from '../../../ui/button/button';

function NewStudent(props) {
    const {studentName, studentNameHandler, studentClass, studentClassHandler, studentPhone, studentPhoneHandler,
    studentEmail, studentEmailHandler, addStudent} = props;
    return (
        <div className="newStudent">
            <h1>اضافه کردن دانشجو</h1>
            <label>:نام و نام خانوادگی</label>
            <input type="text" value={studentName} onChange={studentNameHandler} />
            <label>:کلاس</label>
            <input type="text" value={studentClass} onChange={studentClassHandler} />
            <label>:شماره تلفن</label>
            <input type="number" value={studentPhone} onChange={studentPhoneHandler} />
            <label>:ایمیل</label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler} />
            <Button btnType='danger' clicked={addStudent}>اضافه کردن</Button>
        </div>
    );
}

export default NewStudent;
