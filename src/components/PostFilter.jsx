import React from 'react'

import MySelect from '../components/UI/select/MySelect'
import MyInput from '../components/UI/input/MyInput'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.quary}
                onChange={e => setFilter({...filter, quary: e.target.value})}
                placeholder='Поиск...'
            />
            <MySelect
                value={filter.sort}
                // в onChange, для селекта мы сразу получаем value (выбранный пункт, а не e.target.value)
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}                
                defaultValue='Сортировать'
                options={[
                    {value: 'title', name: 'по названию'},
                    {value: 'body', name: 'по описанию'}
                ]}
            />
        </div>
    )
}

export default PostFilter