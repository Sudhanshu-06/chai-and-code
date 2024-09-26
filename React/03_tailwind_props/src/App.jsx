
import './App.css'
import Card from './components/Card'
function App() {
  let myObj={
    name: 'John Doe',
    age: 30,
  
  }
    let newArr=[1,2,3];

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username='chaiaurcode' someObj={newArr}/>
      <Card/>

    </>
  )
}

export default App
