import { Link,Routes,Route, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h3>Hello world</h3>
      <Navigation />

      <Routes>
        <Route element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='users' element={<Users />} />
        </Route>
      </Routes>
      
    </div>
  );
}
const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        margin: '2rem',
        listStyleType: 'none',
      }}
    >
    <Link to="/home" style={{listStyle:'none'}}>Home</Link>
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
const Users = () => {
  return (
    <main style={{ padding: '1rem 0'}}>
      <h2>Users</h2>
    </main>
  )
}

const Layout = () => {
  return <main style={{ padding: '1rem 0' }}><Outlet/></main>;
};

export {
  App,
  Navigation,
  Home,
  Users,
  Layout
}