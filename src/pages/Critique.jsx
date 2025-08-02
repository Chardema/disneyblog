import Layout from "../components/Layout";
import { Card, CardContent } from "../components/ui/card";

export default function Critique() {
  const posts = [
    {
      title: "Le land Marvel trahit-il la promesse Disney ?",
      excerpt: "Réflexions sur l’intégration des super-héros au parc.",
    },
  ];

  return (
    <Layout>
      <section className="mb-10">
        <h2 className="mb-2 text-4xl font-serif font-bold">🔍 Critiques</h2>
        <p className="text-neutral-600">
          Analyses des choix narratifs, design et politiques tarifaires.
        </p>
      </section>

      <div className="space-y-6">
        {posts.map((post, idx) => (
          <Card key={idx}>
            <CardContent>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
