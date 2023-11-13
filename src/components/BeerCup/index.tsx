import './style.scss';

const BeerCup = () => {
  return (
    <section className="beer-container">
      <div id="action">
        <div id="beer-flow"></div>
        <div className="glass">
          <div className="foam"></div>
          <div className="beer">
            <ul className="bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="glass-front"></div>
          <div className="glass-glare"></div>
        </div>
      </div>
    </section>
  );
};

export default BeerCup;
