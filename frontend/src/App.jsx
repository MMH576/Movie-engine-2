import "./App.css";
import swordfightImage from "./assets/swordfight.jpg";
import { useState } from "react";

const Card = ({ image, title, description }) => {
  const [hasLiked, sethasLiked] = useState(false);

  return (
    <div className="card">
      <div className="card-img">{image}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => sethasLiked(true)}>like</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card
        title="One Piece"
        image={<img src={swordfightImage} alt="One Piece" />}
        description="A story about pirates in search of the ultimate treasure."
      />
      <Card
        title="Naruto"
        image={<img src={swordfightImage} alt="Naruto" />}
        description="A young ninja striving to become the strongest ninja and leader of his village."
      />
      <Card
        title="Attack on Titan"
        image={<img src={swordfightImage} alt="Attack on Titan" />}
        description="Humanity's fight for survival against giant humanoid Titans."
      />
    </div>
  );
};

export default App;
