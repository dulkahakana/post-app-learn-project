import React from 'react'

import MySelect from '../components/UI/select/MySelect'
import MyInput from '../components/UI/input/MyInput'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className='sort__options'>
            <MyInput
                value={filter.quary}
                onChange={e => setFilter({...filter, quary: e.target.value})}
                placeholder='Поиск...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    )
}

export default PostFilter