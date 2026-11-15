import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Studentcard from "./components/studentcard.jsx";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

const etudiants = [
  {
    nom: "ahmed",
    email: "ahmed@gmail.com",
    tel: "12345678",
    filiere: "glsi",
    annee: "3eme",
    groupe: "b",
    ville: "sfax",
  },
  {
    nom: "eya",
    email: "eya@gmail.com",
    tel: "12345678",
    filiere: "glsi",
    annee: "3eme",
    groupe: "b",
    ville: "sfax",
  },
  {
    nom: "moncef",
    email: "moncef@gmail.com",
    tel: "12345678",
    filiere: "lcs",
    annee: "1ere",
    groupe: "c",
    ville: "bizerte",
  },
];
function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {etudiants.map((etudiant) => (
        <Studentcard
          key={etudiant.email}
          nom={etudiant.nom}
          email={etudiant.email}
          tel={etudiant.tel}
          filiere={etudiant.filiere}
          annee={etudiant.annee}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
        />
      ))}

      <Footer></Footer>
    </>
  );
}

export default App;
