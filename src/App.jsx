import { Routes, Route } from 'react-router-dom';

// Import Components
import Home from './pages/Home/Home';
import About from './container/About/About';
import Skill from './container/Skills/Skill';
import Experience from './container/Experience/Experience';
import Education from './container/Education/Education';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={
          <Home />
        }>
        </Route>

        <Route path='/About' element={
          <About />
        }></Route>

        <Route path='/Skill' element={
          <Skill />
        }></Route>

        <Route path='/Experience' element={
          <Experience />
        }>
        </Route>

        <Route path='/Education' element={
          <Education />
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
