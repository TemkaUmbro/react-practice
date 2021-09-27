import React from "react";
import { MyInput } from "./UI/MyInput/MyInput";
import { MySelect } from "./UI/Select/MySelect";

export const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск . . .'
            />
            <MySelect
                valuee={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValues='Сортировать'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    )
}