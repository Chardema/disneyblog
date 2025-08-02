import Layout from "../components/Layout";

export default function Critique() {
  const posts = [
    "Le land Marvel trahit-il la promesse Disney ?",
  ];

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">🔍 Critiques</h2>
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
