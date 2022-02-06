import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, title }) => {
    return (
        <div>        
            <h1 className='post-list__title' style={{
                marginTop: '0.3em',
                textAlign: 'center',
                fontSize: '2em',
                fontWeight: '500'               
            }}>{title}</h1>

            {posts.map(post => 
                <PostItem post={post} key={post.id}/>   
            )}
        </div>
    )
};

export default PostList
