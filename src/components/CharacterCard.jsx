import { Link } from "react-router-dom";

const style = {
  width: "18rem",
};

export const CharacterCard = ({ uid, name, dispatch }) => {
  return (
    <>
      <div className="card" style={style}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
          <Link to={`/profile-page/people/${uid}`}>
            <button className="btn btn-primary">Learn More</button>
          </Link>
        </div>
      </div>
    </>
  );
};