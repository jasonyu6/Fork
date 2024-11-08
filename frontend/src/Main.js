import './Main.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/signin'); // Adjust the path as needed
  };

  return (
    // pls don't make css for ALL the div's use classes and set csss to them
    <div className="main">
      
      <p>WHO ARE WE</p>
      {/* use something called "Lorem Impsum" your code editor will make a dummy text for you */}
      <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
      <button onClick={handleRedirect}>Go to Sign In</button>
    </div>
  );

};

export default Main;

