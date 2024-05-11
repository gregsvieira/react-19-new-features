import { Suspense, use } from 'react';

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<IPosts[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

const PostItems = () => {
  const posts = use(fetchPosts());

  return (
    <>
      <ul>
        {posts.map((post: IPosts) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

const Posts = () => {
  return (
    <Suspense fallback="Loading...">
      <PostItems />
    </Suspense>
  )
}

export default Posts;