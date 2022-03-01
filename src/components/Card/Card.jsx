import "./Card.scss"

const Card = ({ info }) => {
  return (
    <div className="card-item">
      <div className="card-img">
        <img src={info.image} alt="" />
      </div>
      <div className="card-content">
        <h2 className="title">
          <a href="#">{info.name}</a>
        </h2>
        <span className="sub-title">
          {info.status}-{info.species}
        </span>
        <div className="section-info">
          <p className="info-title">Last known location:</p>
          <span className="info-description">{info.location.name}</span>
        </div>
        <div className="section-info">
          <p className="info-title">First seen in:</p>
          <span className="info-description">{info.origin.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
