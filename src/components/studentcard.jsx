import { useState } from "react";
import image from "../assets/images.jpg";

function Studentcard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerInformations() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <form className="hello" action="">
      <div>
        <img className="photo" src={image} alt="" />
      </div>

      <div>
        <h1>fiche etudiant</h1>
      </div>

      <div className="x">
        Nom Prénom: {props.nom} <br />
      </div>

      <div className="x">
        Filière: {props.filiere} <br />
      </div>

      <div className="x">
        Année d’étude: {props.annee} <br />
      </div>

      <div className="x">
        Groupe: {props.groupe} <br />
      </div>

      <div className="x">
        Ville: {props.ville} <br />
      </div>

      {coordonneesVisibles && (
        <div>
          <div className="x">
            Email: {props.email} <br />
          </div>

          <div className="x">
            Téléphone: {props.tel} <br />
          </div>
        </div>
      )}

      <button type="button" onClick={basculerInformations}>
        {coordonneesVisibles
          ? "Masquer les informations"
          : "Afficher les informations"}
      </button>

      <button type="button" onClick={() => props.onModifier(props.etudiant)}>
        Modifier
      </button>

      <button type="button" onClick={() => props.onSupprimer(props.id)}>
        Supprimer
      </button>

      <center>
        <a href={`mailto:${props.email}`}>
          <button id="helo" type="button">
            continue:
          </button>
        </a>
      </center>
    </form>
  );
}

export default Studentcard;
