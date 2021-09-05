import React, { forwardRef } from "react";
import style from './MyInput.module.scss';

export const MyInput = forwardRef((props, ref) => {
    return (
        <input
            ref={ref}
            {...props} 
            className={style.myInp} 
        />
    )
});