import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default About;