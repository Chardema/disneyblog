import Layout from "../components/Layout";
import { Card, CardContent } from "../components/ui/card";

export default function Nostalgie() {
  const posts = [
    {
      title: "Discoveryland et la SF rétro de mon enfance",
      excerpt: "Souvenirs d’un futur imaginé…",
    },
    {
      title: "Quand le Disneyland Hotel sentait encore le luxe européen",
      excerpt: "Retour sur une époque feutrée aujourd’hui disparue.",
    },
    {
      title: "Les musiques oubliées de Main Street",
      excerpt: "Un voyage sonore dans les premières années du parc.",
    },
  ];

  return (
    <Layout>
      <section className="mb-10">
        <h2 className="mb-2 text-4xl font-serif font-bold">🕰 Nostalgie</h2>
        <p className="text-neutral-600">
          Explorer le parc d’hier, les ambiances disparues, les souvenirs.
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