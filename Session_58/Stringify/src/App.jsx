import ArrowOnClick from "./components/ArrowOnClick";
import Cat from "./components/Cat"
import Obj from "./components/objectArray";
import SetUsername from "./components/SetUsername";

const App = ()=>{
  return (<div>
    <Cat></Cat>
    <Obj></Obj>
    <ArrowOnClick></ArrowOnClick>
    <SetUsername name="Duanshi"></SetUsername>
  </div>)
}

export default App;