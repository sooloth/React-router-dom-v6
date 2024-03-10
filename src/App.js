import { Link,Routes,Route, Outlet, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h3>Hello world</h3>
      <Navigation />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='home' element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='*' element={<NoMatch />}/>
        </Route>
      </Routes>
      
    </div>
  );
}
const NoMatch = () => {
  return (<p>There's nothing here 404!</p>)
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
  const style = ({ isActive}) => ({
    fontweight: isActive ? 'bold' : 'normal',
  });
  return (
    <>
      <h1>React Router</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
      <NavLink to='/home' style={style}>Home</NavLink>
      <NavLink to='/users' style={style}>Users</NavLink>

      </nav>
      <main style={{ padding: '1rem 0' }}>
        <Outlet/>
      </main>;
  </>
  )
};

export {
  App,
  Navigation,
  Home,
  Users,
  Layout
}