import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-heigth">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/company" element={<Company />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/newproject" element={<NewProject />} />
            <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Container>

      <Footer />
      
    </Router>
  );
}

export default App;
