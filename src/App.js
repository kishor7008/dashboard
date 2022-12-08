import './App.css';
import Sidebar from './sidebar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';


function App() {
  return (
    <div style={{display:"flex"}}>
          <BrowserRouter>
   <Sidebar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;