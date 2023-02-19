import React from 'react';
import './students.css';

function Students() {
    return (
        <div className='students'>
            <label>شماره دانشجویی: 1</label>
            <label>:نام و نام خانوادگی</label>
            <input type="text" />
            <label>:نام کلاس</label>
            <input type="text" />
            <label>:شماره تلفن</label>
            <input type="number" />
            <label>:ایمیل</label>
            <input type="email" />
        </div>
    );
}

export default Students;
