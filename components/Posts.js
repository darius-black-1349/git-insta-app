import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'darius',
    userImg: 'images/avatar.jpg',
    img: 'images/avatar.jpg',
    caption: 'SUBSCRIBE AND PRESS THE LIKE BUTTON',
  },

  {
    id: '123',
    username: 'darius',
    userImg: 'images/avatar.jpg',
    img: 'images/avatar.jpg',
    caption: 'SUBSCRIBE AND PRESS THE LIKE BUTTON',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
