async function getData() {
  // Simulate server-side data fetching
  return {
    message: "This is rendered on the server!",
    timestamp: new Date().toISOString(),
  };
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Server Components</h1>
      <p className="text-xl">{data.message}</p>
      <p className="mt-4 text-gray-600">Timestamp: {data.timestamp}</p>
    </div>
  );
}
