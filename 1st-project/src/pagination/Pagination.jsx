import React from "react";
import style from '../styles/App.module.scss'
import { getPagesArray } from "../utils/pages";

export const Pagination = ({totalPages, page, changePages}) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className={style.pageSwitcher}>
            {pagesArray.map(num =>
                <span
                    key={num}
                    className={page === num ? style.active : style.current}
                    onClick={() => changePages(num)}>{num}
                </span> 
            )}        
        </div>
    )
}