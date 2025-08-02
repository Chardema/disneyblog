import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bloc Actu */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">📰 Actualités</h2>
            <p className="text-sm text-neutral-600">
              Décryptage des dernières annonces, projets et stratégies du parc.
            </p>
            <Button variant="link" className="mt-4 p-0" asChild>
              <Link to="/actu">Explorer l’actu →</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Bloc Nostalgie */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">🕰 Nostalgie</h2>
            <p className="text-sm text-neutral-600">
              Souvenirs, sensations d’enfance, explorations du parc d’hier.
            </p>
            <Button variant="link" className="mt-4 p-0" asChild>
              <Link to="/nostalgie">Voyager dans le temps →</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Bloc Critique */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">🔍 Critiques</h2>
            <p className="text-sm text-neutral-600">
              Analyses approfondies des choix créatifs, narratifs et immersifs.
            </p>
            <Button variant="link" className="mt-4 p-0" asChild>
              <Link to="/critique">Lire les critiques →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
