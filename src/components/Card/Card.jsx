import "./Card.scss";

const Card = ({ info }) => {
  return (
    <div className="card-item">
      <div className="card-img">
        <img src={info.media} alt="" />
      </div>
      <div className="card-content">
        <h2 className="title">
          <a href="#">{info.title}</a>
        </h2>
        <span className="sub-title">{info.subTitle}</span>
        <div className="section-info">
          <p className="info-title">Last known location:</p>
          <span className="info-description">{info.location}</span>
        </div>
        <div className="section-info">
          <p className="info-title">First seen in:</p>
          <span className="info-description">{info.firstSeen}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
