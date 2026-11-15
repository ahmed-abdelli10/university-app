import image from "../assets/images.jpg";
function Studentcard(props) {
  return (
    <form className="hello" action="">
      <div>
        <img classname="photo" src={image} alt="" />
      </div>
      <div>
        <h1>fiche etudiant</h1>
      </div>
      <div classname="x">
        Nom Prénom: {props.nom} <br />
      </div>
      <div classname="x">
        Email:{props.email} <br />
      </div>
      <div classname="x">
        Téléphone:{props.tel} <br />
      </div>
      <div classname="x">
        Filière:{props.filiere} <br />
      </div>
      <div classname="x">
        Année d’étude: {props.annee} <br />
      </div>
      <div classname="x">
        Groupe:{props.groupe} <br />
      </div>
      <div classname="x">
        Ville:{props.ville} <br />
      </div>
      <center>
        <a href="mailto:ahmedabdelli2307@gmail.com">
          <button id="helo">continue:</button>
        </a>
      </center>
    </form>
  );
}
export default Studentcard;
