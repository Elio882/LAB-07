
import './App.css'
import { Button } from './components/Button'
import { List } from './components/List'
import { WrapperList } from './components/WrapperList'
export { List } from './components/List'

function App() {
  const buttonText = "Button "
  return (
    <>
      <h1>Button que que manda un numero aleatorio del 1 al 100</h1>
      <Button text={buttonText}/>
    </>
  )
}

export default App
