import { useState } from "react";

function StudentForm({
  onAjouterEtudiant,
  etudiantAModifier,
  onModifierEtudiant,
}) {
  const [nom, setNom] = useState(etudiantAModifier?.nom || "");
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
  const [email, setEmail] = useState(etudiantAModifier?.email || "");
  const [tel, setTel] = useState(etudiantAModifier?.tel || "");
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "glsi");
  const [annee, setAnnee] = useState(etudiantAModifier?.annee || "");
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
  const [ville, setVille] = useState(etudiantAModifier?.ville || "");
  const [image, setImage] = useState(etudiantAModifier?.image || "");
  const [erreurs, setErreurs] = useState({});

  function choisirImage(e) {
    const fichier = e.target.files[0];

    if (fichier) {
      setImage(URL.createObjectURL(fichier));
    }
  }

  function validerFormulaire() {
    const nouvellesErreurs = {};

    if (!nom.trim()) {
      nouvellesErreurs.nom = "Nom est obligatoire";
    }

    if (!prenom.trim()) {
      nouvellesErreurs.prenom = "Prénom est obligatoire";
    }

    if (!email.trim()) {
      nouvellesErreurs.email = "Email est obligatoire";
    }

    if (!tel.trim()) {
      nouvellesErreurs.tel = "Téléphone est obligatoire";
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validerFormulaire()) {
      return;
    }

    const nouvelEtudiant = {
      nom: nom,
      prenom: prenom,
      email: email,
      tel: tel,
      filiere: filiere,
      annee: annee,
      groupe: groupe,
      ville: ville,
      image: image,
    };

    if (etudiantAModifier) {
      nouvelEtudiant.id = etudiantAModifier.id;
      onModifierEtudiant(nouvelEtudiant);
    } else {
      onAjouterEtudiant(nouvelEtudiant);
    }
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>
        {etudiantAModifier ? "Modifier un étudiant" : "Ajouter un étudiant"}
      </h2>

      <label htmlFor="nom">Nom</label>
      <input
        id="nom"
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      {erreurs.nom && <p className="erreur">{erreurs.nom}</p>}

      <label htmlFor="prenom">Prénom</label>
      <input
        id="prenom"
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
      />
      {erreurs.prenom && <p className="erreur">{erreurs.prenom}</p>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {erreurs.email && <p className="erreur">{erreurs.email}</p>}

      <label htmlFor="tel">Téléphone</label>
      <input
        id="tel"
        type="tel"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        required
      />
      {erreurs.tel && <p className="erreur">{erreurs.tel}</p>}

      <label htmlFor="filiere">Filière</label>
      <select
        id="filiere"
        value={filiere}
        onChange={(e) => setFiliere(e.target.value)}
      >
        <option value="glsi">GLSI</option>
        <option value="lcs">LCS</option>
      </select>

      <label htmlFor="annee">Année d'étude</label>
      <input
        id="annee"
        type="text"
        value={annee}
        onChange={(e) => setAnnee(e.target.value)}
      />

      <label htmlFor="groupe">Groupe</label>
      <input
        id="groupe"
        type="text"
        value={groupe}
        onChange={(e) => setGroupe(e.target.value)}
      />

      <label htmlFor="ville">Ville</label>
      <input
        id="ville"
        type="text"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
      />

      <label htmlFor="image">Photo</label>
      <input id="image" type="file" onChange={choisirImage} />
      {image && <img className="form-photo" src={image} alt="Photo étudiant" />}

      <button type="submit">
        {etudiantAModifier ? "Enregistrer les modifications" : "Ajouter"}
      </button>
    </form>
  );
}

export default StudentForm;
