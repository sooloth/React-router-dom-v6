import { Routes,Route, useNavigate} from 'react-router-dom';
import './App.css';
import Navigation from './Nav.jsx';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Users from './Users.jsx';
import Error from './Error.jsx';
import User from './User.jsx';
import { useState } from 'react';


function App() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {id: '1', fullName: 'Sooloth SCH'},
    {id: '2', fullName: 'PhoneKham KNVS'},
  ]);

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));
  }


  navigate('/users');

  return (
    <div>
      <h3>Hello world</h3>
      <Navigation />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='home' element={<Home />} />
          <Route path='users' element={<Users users={users}/>}>
            <Route path=':userId' element={<User onRemoveUser={handleRemoveUser} />}/>
          </Route>
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>
      
    </div>
  );
}


export default App;