import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem
                            remove={remove}
                            number={index + 1}
                            post={post}                            
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>            
        </div>
    )
};

export default PostList
