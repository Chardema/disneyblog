import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold tracking-tight mb-4">
          Regard DLP
        </h1>
        <p className="text-neutral-600">
          Un regard critique et sensible sur Disneyland Paris.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Bloc Actu */}
        <Card className="h-full">
          <CardContent className="flex h-full flex-col">
            <h2 className="mb-2 text-xl font-semibold">📰 Actualités</h2>
            <p className="flex-1 text-sm text-neutral-600">
              Décryptage des dernières annonces, projets et stratégies du parc.
            </p>
            <Button variant="link" className="mt-4 self-start p-0" asChild>
              <Link to="/actu">Explorer l’actu →</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Bloc Nostalgie */}
        <Card className="h-full">
          <CardContent className="flex h-full flex-col">
            <h2 className="mb-2 text-xl font-semibold">🕰 Nostalgie</h2>
            <p className="flex-1 text-sm text-neutral-600">
              Souvenirs, sensations d’enfance, explorations du parc d’hier.
            </p>
            <Button variant="link" className="mt-4 self-start p-0" asChild>
              <Link to="/nostalgie">Voyager dans le temps →</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Bloc Critique */}
        <Card className="h-full">
          <CardContent className="flex h-full flex-col">
            <h2 className="mb-2 text-xl font-semibold">🔍 Critiques</h2>
            <p className="flex-1 text-sm text-neutral-600">
              Analyses approfondies des choix créatifs, narratifs et immersifs.
            </p>
            <Button variant="link" className="mt-4 self-start p-0" asChild>
              <Link to="/critique">Lire les critiques →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}