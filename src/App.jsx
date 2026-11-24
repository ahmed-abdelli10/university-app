import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Studentcard from "./components/studentcard.jsx";
import StudentForm from "./components/StudentForm.jsx";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "ahmed",
      email: "ahmed@gmail.com",
      tel: "12345678",
      filiere: "glsi",
      annee: "3eme",
      groupe: "b",
      ville: "sfax",
    },
    {
      id: 2,
      nom: "eya",
      email: "eya@gmail.com",
      tel: "12345678",
      filiere: "glsi",
      annee: "3eme",
      groupe: "b",
      ville: "sfax",
    },
    {
      id: 3,
      nom: "moncef",
      email: "moncef@gmail.com",
      tel: "12345678",
      filiere: "lcs",
      annee: "1ere",
      groupe: "c",
      ville: "bizerte",
    },
  ]);

  const [recherche, setRecherche] = useState("");

  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
    };

    setEtudiants([...etudiants, etudiantAvecId]);
  }

  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.id !== id),
    );
  }

  function modifierEtudiant(etudiant) {
    setEtudiantAModifier(etudiant);
  }

  function enregistrerModification(etudiantModifie) {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === etudiantModifie.id ? etudiantModifie : etudiant,
      ),
    );

    setEtudiantAModifier(null);
  }

  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase()),
  );

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>

      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={enregistrerModification}
      />

      <h2>Rechercher par filière</h2>

      <input
        type="text"
        placeholder="Entrez une filière"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      {etudiantsFiltres.map((etudiant) => (
        <Studentcard
          key={etudiant.id}
          id={etudiant.id}
          etudiant={etudiant}
          nom={etudiant.nom}
          email={etudiant.email}
          tel={etudiant.tel}
          filiere={etudiant.filiere}
          annee={etudiant.annee}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          onSupprimer={supprimerEtudiant}
          onModifier={modifierEtudiant}
        />
      ))}

      <Footer></Footer>
    </>
  );
}

export default App;
