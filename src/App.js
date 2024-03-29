import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar.js';
import Favorite from './components/Favorite/Favorite.js';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import NoMatch from './components/NoMatch/NoMatch.js';
import List from './components/List/List.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
 </main>
  );
};
export default App;
