import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './assets/components/Header/Header'
import Home from './assets/components/Home/Home'
import Pokemon from './assets/components/Pokemon/Pokemon'
function App() {


  return (
    //https://pokeapi.co/api/v2/pokemon/pikachu

    <Router>


      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Pokemon' element={<Pokemon />} />
      </Routes> 


    </Router>


  )
}

export default App
