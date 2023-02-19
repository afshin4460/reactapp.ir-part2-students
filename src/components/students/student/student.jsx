import React from 'react';
import './student.css';

function Student(props) {
    return (
        <div className='students'>
            <label>شماره دانشجویی: {props.id + 1}</label>
            <label>:نام و نام خانوادگی</label>
            <input type="text" value={props.name} />
            <label>:نام کلاس</label>
            <input type="text" value={props.class} />
            <label>:شماره تلفن</label>
            <input type="number" value={props.phone} />
            <label>:ایمیل</label>
            <input type="email" value={props.email} />
        </div>
    );
}

export default Student;
