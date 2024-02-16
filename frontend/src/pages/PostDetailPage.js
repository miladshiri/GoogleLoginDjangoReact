import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetailPage = () => {
    const { postId } = useParams()

    const [ post, setPost ] = useState([])
    const getPostDetail = () => {
        fetch(`/blog/post/${postId}`)
          .then(response => response.json())
          .then(data => {
            setPost(data)
          })
          .catch(error => {
            console.error('Fetching Post Detail error:', error);
          });
    }

    useEffect(()=>{
        getPostDetail()
    }, [])

  return (
    <div class="card">
        <div class="card-header">
            {post.title}
        </div>
        <div class="card-body">
            
            {post.body ? post.body : "You need to Login to see this post!"}
        </div>
    </div>
  )
}

export default PostDetailPage