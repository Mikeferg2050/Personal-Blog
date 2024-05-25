document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('blogForm');
    const formMessage = document.getElementById('formMessage');
    console.log(blogForm)
    blogForm.addEventListener('submit', function (event) {
      event.preventDefault();
      console.log("hi"
      )
     
      const username = document.getElementById('username').value.trim();
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();
  
      if (!username || !title || !content) {
        formMessage.textContent = 'Please complete all fields';
        return;
      }
    
      // Create blog post object
      const post = {
        username: username,
        title: title,
        content: content,
      };
  
      // Store post data in localStorage
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(post);
      localStorage.setItem('posts', JSON.stringify(posts));
  
      // Redirect to posts page
      window.location.href = 'blog.html';
    });
  });

 