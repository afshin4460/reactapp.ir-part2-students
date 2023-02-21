import React from 'react';
import './student.css';

function Student(props) {
    return (
        <div className='students'>
            <label>شماره دانشجویی: {props.id + 1}</label>
            <label>:نام و نام خانوادگی</label>
            <input type="text" value={props.name} onChange={props.nameChanged} />
            <label>:نام کلاس</label>
            <input type="text" value={props.class} />
            <label>:شماره تلفن</label>
            <input type="number" value={props.phone} />
            <label>:ایمیل</label>
            <input type="email" value={props.email} />
            <label style={{color: 'red', cursor: 'pointer'}} onClick={props.deleted}>حذف</label>
        </div>
    );
}

export default Student;
