
import './App.css'
import { Button } from './components/Button'
import { List } from './components/List'
import { WrapperList } from './components/WrapperList'
export { List } from './components/List'

function App() {
  const buttonText = "Count: "
  return (
    <>
      <h1>Contador de 5 en 5 cada que le das click</h1>
      <Button text={buttonText}/>
    </>
  )
}

export default App
