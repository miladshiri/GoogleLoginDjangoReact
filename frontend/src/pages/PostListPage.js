import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PostListPage = () => {
    const [ posts, setPosts ] = useState([])
    const getPostList = () => {
        fetch('/blog/posts/')
          .then(response => response.json())
          .then(data => {
            setPosts(data)
          })
          .catch(error => {
            console.error('Fetching Post List error:', error);
          });
    }

    useEffect(()=>{
        getPostList()
    }, [])

  return (
    <div>
        <h1>All the posts</h1>
        <ul  class="list-group">
            {posts.map((post, index) => (
                <li class="list-group-item" key={index}>
                    <Link to={`/blog/post/${post.id}/`}>
                        {post.title}
                    </Link>
                    <span class="badge bg-danger">{post.public ? "" : "VIP"}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PostListPage