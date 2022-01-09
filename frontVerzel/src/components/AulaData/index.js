import React from 'react';
import DatePicker from "react-datepicker";
import { Container } from './styles'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DatePickerField({ name, value, onChange }) {

    return (


        <DatePicker
            type="text"
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
            showWeekNumbers
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
        />

    );

}