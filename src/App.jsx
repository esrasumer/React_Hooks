import Address from './components/Address';
import Counter from './components/Counter';
import Friend from './components/Friend';
import Name from './components/Name';
import Input from './components/Input';

function App() {
  let user="gülsümom"
  let surname="sumer"
  //mount   //default
  return (
    <>
      <Name user={user} surname={surname}/> {/*alt komponent e veri gönderdik*/}
      <Friend />
      <Address />
      <Counter />
      <Input />
    </>
  )
}
export default App;
