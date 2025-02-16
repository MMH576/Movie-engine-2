import "./App.css";
import swordfightImage from "./assets/swordfight.jpg";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-img">{image}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card
        title="One piece"
        image={<img src={swordfightImage} />}
        description="A story about pirates in search of the ultimate treasure."
      />
    </div>
  );
};

export default App;
