import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import UserContext from "../context/UserContext";

const PostDetailPage = () => {
  const { postId } = useParams();
  const { userInfo } = useContext(UserContext);

  const [post, setPost] = useState([]);
  const getPostDetail = () => {
    const headers = {
      "Content-Type": "application/json",
    };

    if (userInfo.access_token) {
      headers["Authorization"] = `Bearer ${userInfo.access_token}`;
    }

    fetch(`/blog/post/${postId}`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Fetching Post Detail error:", error);
      });
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <div class="card">
      <div class="card-header">{post.title}</div>
      <div class="card-body">
        {post.body ? post.body : "You need to Login to see this post!"}
      </div>
    </div>
  );
};

export default PostDetailPage;
