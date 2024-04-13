
import './App.css'
import { Button } from './components/Button'
import { List } from './components/List'
import { WrapperList } from './components/WrapperList'
export { List } from './components/List'

function App() {
  const buttonText = "Count: "
  return (
    <>
      <h1>Hola mundo con REACT CON VITE</h1>
      <Button text={buttonText}/>

      <WrapperList>
        <List/>
      </WrapperList>
    </>
  )
}

export default App
