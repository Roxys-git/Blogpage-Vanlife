import { fetchPosts } from '../lib/ghost';
import { getCloudinaryUrl } from '../lib/cloudinary';

export default function Home({ posts }) {
  return (
    <div>
      <h1>My Ghost Blog</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {post.feature_image && (
            <img
              src={getCloudinaryUrl(post.feature_image.split('/').pop())}
              alt={post.title}
            />
          )}
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
