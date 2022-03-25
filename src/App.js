import Title from './components/Title';
import animalsInfo from './static/animals.json';
import AnimalsCards from './components/AnimalsCards';
import withNavBar from './Hocs/withNavbar';

const App = () => {
  return (
    <div className="App">
      <Title titleText={'Available animals'} />
      <AnimalsCards animalsArray={animalsInfo} />
    </div>
  );
};

export default withNavBar(App);
