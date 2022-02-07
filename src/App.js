// импортируем реакт везде где будет реакт компонент
import React, { useState, useRef } from 'react'
// import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'

// Import Styles
import './styles/dh-normilize-v1.0.0.scss'
import './styles/google-font-colection.scss'
import './styles/App.scss'
import MyInput from './components/UI/input/MyInput'

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Язык програмирования' },
        { id: 2, title: 'C#', body: 'Язык програмирования' },
        { id: 3, title: 'Python', body: 'Язык програмирования' },
        { id: 4, title: 'Java', body: 'Язык програмирования' },
    ])

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef()


    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

    return (
        <div className = 'App'>
            <PostList posts={posts} title={'Список постов'}/>
            <h2 className='block__title'>Добавить новый пост</h2>
            <form className='create__post'>
                {/* Управляемый компонент */}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text'
                    placeholder='Название поста'
                />
                {/* Неуправляемый (неконтролируемый) инпут */}
                {/* если useRef использовать на своем компоненте (не стандартном html элементе), то этот компонент необходимо обернуть в React.forwardRef, для того чтобы можно было передать пропс ref созданные useRef() далее см. ./components/UI/input/MyInput.jsx */}
                <MyInput
                    ref={bodyInputRef}
                    type='text'
                    placeholder='Описание поста'
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
        </div>
    )
}

export default App
