import React from 'react'
import PostItem from './PostItem'

const PostList = ({ remove, posts, title }) => {
    if(!posts.length) {
        return (
            <div className='block__title'>
                Посты не были найдены
            </div>
        )
    }
    
    return (
        <div>        
            <h1 className='block__title'>{title}</h1>

            {posts.map((post, index) => 
                <PostItem
                    remove={remove}
                    number={index + 1}
                    post={post}
                    key={post.id}
                />   
            )}
        </div>
    )
};

export default PostList
