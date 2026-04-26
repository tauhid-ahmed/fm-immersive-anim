// Simulated database
const posts = [
  { id: 1, title: "Post 1", body: "Content for post 1" },
  { id: 2, title: "Post 2", body: "Content for post 2" },
  { id: 3, title: "Post 3", body: "Content for post 3" },
];

async function getPosts() {
  // In real app: fetch from database or API
  return posts;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Data Fetching</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="rounded border p-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
