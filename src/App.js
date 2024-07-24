// import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Pro from './components/Pro';
import { Route, Routes } from "react-router-dom"
import Msg from './components/Msg';
import Settings from './components/Settings';
import Blogs from './components/Blogs';
import Notfound from './components/Notfound';


function App() {
  return (
    <div>
      {/* <Dashboard/>
      <Pro/>
     */}
      <Routes>
        <Route path='/' element={<Dashboard />}>
        <Route index element={<Pro/>}/>
          <Route path='messages' element={<Msg />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='settings' element={<Settings />} />
          {/* <Route path='profile' element={<Pro />} /> */}
        </Route>
        <Route path='*' element={<Notfound />} />

      </Routes>

    </div>
  );
}

export default App;
