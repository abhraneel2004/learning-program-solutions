import React from 'react';
import './Posts.css';

class Posts extends React.Component{
     constructor(props){
          super(props);
          this.state = {
               posts: [],
               loading: true,
               error: null
          };
          
     }
     loadPosts(){
           fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      this.setState({ 
        posts: data,
        loading: false 
      });  // update state with fetched posts
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
      this.setState({ error: 'Failed to load posts', loading: false });
    });
     }
     componentDidMount(){
          this.loadPosts();
     }
     render(){
          const { loading, error } = this.state;
          
          if (loading) {
            return (
              <div className="posts-container">
                <h1 className="posts-header">Posts</h1>
                <div className="loading">Loading posts...</div>
              </div>
            );
          }
          
          if (error) {
            return (
              <div className="posts-container">
                <h1 className="posts-header">Posts</h1>
                <div className="error">{error}</div>
              </div>
            );
          }
          
          return (
            <div className="posts-container">
              <h1 className="posts-header">My Blog</h1>
              <h1 className="posts-header">Blog Posts</h1>
              <div className="posts-grid">
                {this.state.posts.map(post => (
                  <div className="post-card" key={post.id}>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-body">{post.body}</p>
                    <div className="post-footer">
                      <span className="post-author">User ID: {post.userId}</span>
                      <button className="read-more-btn">Read More</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
     }
     componentDidCatch(error,info){
          console.error("Error in Posts component:", error, info);
     }
}
export default Posts;