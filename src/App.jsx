import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Studentcard from "./components/studentcard.jsx";
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

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: etudiants.length + 1,
      nom: prompt("Entrez le nom :"),
      email: prompt("Entrez l'email :"),
      tel: prompt("Entrez le téléphone :"),
      filiere: prompt("Entrez la filière :"),
      annee: prompt("Entrez l'année :"),
      groupe: prompt("Entrez le groupe :"),
      ville: prompt("Entrez la ville :"),
    };

    if (
      nouvelEtudiant.nom !== null &&
      nouvelEtudiant.email !== null &&
      nouvelEtudiant.filiere !== null &&
      nouvelEtudiant.nom.trim() !== "" &&
      nouvelEtudiant.email.trim() !== "" &&
      nouvelEtudiant.filiere.trim() !== ""
    ) {
      setEtudiants([...etudiants, nouvelEtudiant]);
    }
  }

  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.id !== id),
    );
  }

  function modifierEtudiant(id) {
    const nouveauNom = prompt("Entrez le nouveau nom :");

    if (nouveauNom !== null && nouveauNom.trim() !== "") {
      setEtudiants((anciensEtudiants) =>
        anciensEtudiants.map((etudiant) =>
          etudiant.id === id ? { ...etudiant, nom: nouveauNom } : etudiant,
        ),
      );
    }
  }

  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase()),
  );

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>

      <button onClick={ajouterEtudiant}>Ajouter un étudiant</button>

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
