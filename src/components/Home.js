import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Willkommen zum Quiz!</h1>
      <p className="text-lg mb-4">
        Hier können Sie alle Fragen und Antworten einsehen oder das Quiz starten.
      </p>
      <div className="space-x-4">
        <Link to="/questions" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Fragen und Antworten ansehen
        </Link>
        <Link to="/quiz" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Quiz starten
        </Link>
      </div>
    </div>
  );
}

export default Home;