import Layout from "../components/Layout";

export default function Actu() {
  const posts = [
    "Pourquoi le merchandising d’été déçoit",
  ];

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">📰 Actualités</h2>
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
