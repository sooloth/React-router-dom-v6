import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h3>Hello world</h3>
      <Navigation />
      
    </div>
  );
}
const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
    <Link to="/home">Home</Link>
    <Link to="/users">Users</Link>
    </nav>
  )
}
const Home = () => {
  return (
    <main style={{ padding: '1rem 0'}}>
      <h2>Home</h2>
    </main>
  )
}
const users = () => {
  return (
    <main style={{ padding: '1rem 0'}}>
      <h2>Users</h2>
    </main>
  )
}


module.exports = {
  App,
  Navigation,
  Home,
  users
}