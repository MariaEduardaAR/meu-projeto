import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default NotFound;