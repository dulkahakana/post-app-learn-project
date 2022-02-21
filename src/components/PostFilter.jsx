import React from 'react'

import MySelect from '../components/UI/select/MySelect'
import MyInput from '../components/UI/input/MyInput'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className='post-filter'>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
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