import Layout from "../components/Layout";

export default function Nostalgie() {
  const posts = [
    "Discoveryland et la SF rétro de mon enfance",
  ];

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">🕰 Nostalgie</h2>
      <ul className="space-y-4">
        {posts.map((title, idx) => (
          <li key={idx} className="border-b pb-2">
            {title}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
