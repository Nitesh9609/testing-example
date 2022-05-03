
// import './App.css';
import Counter from './Counter';
import User from './User';
import Text from './Text'

export const data = {
  userDetails: [
    { name: 'John', age: 24, id: 1234 },
    { name: 'Mary', age: 29, id: 1289 },
    { name: 'Joel', age: 27, id: 1567 }
  ]
}

function App() {

   
  return (
    <div className="App">
      <Counter/>
      <User data={data}/>
      <Text/>
    </div>
  );
}



export default App;
