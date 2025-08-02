import Layout from "../components/Layout";
import { Card, CardContent } from "../components/ui/card";

export default function Actu() {
  const posts = [
    {
      title: "Pourquoi le merchandising d’été déçoit",
      excerpt: "Analyse du catalogue 2025 en attente…",
    },
    {
      title: "Le land Frozen avance-t-il vraiment ?",
      excerpt: "Retour sur les dernières images satellites du chantier.",
    },
    {
      title: "Premier Access : vers une nouvelle hausse ?",
      excerpt: "Les signaux faibles d'une nouvelle évolution tarifaire.",
    },
  ];

  return (
    <Layout>
      <section className="mb-10">
        <h2 className="mb-2 text-4xl font-serif font-bold">📰 Actualités</h2>
        <p className="text-neutral-600">
          Décryptage des nouveautés, annonces et projets du parc.
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