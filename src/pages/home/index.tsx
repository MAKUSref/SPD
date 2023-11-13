import Counter from "../../components/Counter";
import BeerCup from "../../components/BeerCup";
import './style.scss';

const Home = () => {
  return (
    <div style={{ marginTop: '-40px' }}>
      <BeerCup />
      <Counter />
    </div>
  );
};

export default Home;
