import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'

export const routes = [
    {path: '/', element: Posts},
    {path: 'posts', element: Posts},
    {path: 'posts/:id', element: PostIdPage},
    {path: 'about', element: About}
]