import React from "react";
import style from './MySelect.module.scss'

export const MySelect = ({options, defaultValues, value, onChange }) => {
    return (
        <select
            className={style.mySelect}
            value={value}
            onChange={evt => onChange(evt.target.value)}
            >
            <option disabled value=''>{defaultValues}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>)}
        </select>
    )
}