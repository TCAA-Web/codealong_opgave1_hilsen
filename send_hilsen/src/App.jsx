import './App.css'
import { ShowName } from './components/ShowName'

function App() {
  
  const nameArray = [
    {name: "Kasper"},
    {name: "Morten"},
    {name: "Sanne"}
  ]

  return (
    <>
      {nameArray.map((item, index) => {
        return (
          <ShowName key={index} name={item.name} />
        )
      })}
    </>
  )
}

export default App
