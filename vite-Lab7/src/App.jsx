
import './App.css'
import { RandomComponent } from './components/RandomComponent'

function App() {
  const buttonText = "Button "
  return (
    <>
      <h1>componente aleatorio</h1>
      <div style={{display: 'flex', flexWrap: 'wrap',  justifyContent: 'space-around'}}>
        <RandomComponent
        urlImg = "/public/pantheon1.jpg"
        text = "pantheon Matadragones" 
        />
        <RandomComponent
        urlImg = "/public/pantheon2.jpg"
        text = "pantheon la lanza inquebrantable" 
        />
        <RandomComponent
        urlImg = "/public/pantheon3.jpg"
        text = "pantheon vs Aatrox" 
        />
        <RandomComponent
        urlImg = "/public/pantheon4.jpg"
        text = "pantheon" 
        />
        <RandomComponent
        urlImg = "/public/pantheon5.jpg"
        text = "pantheon metalizado" 
        />
        <RandomComponent
        urlImg = "/public/pantheon6.jpg"
        text = "pantheon la espada guerrera" 
        />
      </div>

    </>
  )
}

export default App
