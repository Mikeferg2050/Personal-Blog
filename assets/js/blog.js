let posts = JSON.parse(localStorage.getItem('posts')) || [];

console.log (posts)

const allPosts=document.getElementById("all-posts")

allPosts.innerText=posts

for (let i = 0;i<posts.length;i++){
  console.log(posts[i])
  const post = posts[i]
  const name = document.createElement("h4")
  name.innerText = post.username
  allPosts.appendChild(name)
}

