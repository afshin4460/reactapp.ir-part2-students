import React from 'react';
import './newStudent.css';
import Button from '../../../ui/button/button';

function NewStudent() {
    return (
        <div className="newStudent">
            <h1>:شماره دانشجویی</h1>
            <label>:نام و نام خانوادگی</label>
            <input type="text" />
            <label>:کلاس</label>
            <input type="text" />
            <label>:شماره تلفن</label>
            <input type="number" />
            <label>:ایمیل</label>
            <input type="email" />
            <Button btnType='danger' clicked={() => alert('Hello')}>اضافه کردن</Button>
        </div>
    );
}

export default NewStudent;
