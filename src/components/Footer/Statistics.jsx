const Statistics = ({ info }) => {
  return (
    <div>
      <div className="statistics">
        <span>CHARACTERS: {info.characters}</span>
        <span>LOCATIONS: {info.locations}</span>
        <span>EPISODS: {info.episodes}</span>
      </div>
      <div className="status">
        SERVICE STATUS:
        <span className={info.status ? "active" : "inactive"}></span>
      </div>
    </div>
  );
};

export default Statistics;
