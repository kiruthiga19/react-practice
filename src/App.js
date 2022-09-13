import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Props from './component/Props';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/functionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
function App() {
  return (
    <div className="App">
      <NameList></NameList>
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <Counter></Counter> */}
      {/* <Message>
      </Message> */}
     {/* <Greet></Greet> */}
     {/* <Welcome name="bruce" heroName="batman"></Welcome>
     <Welcome  name="clark" heroName="batman"></Welcome>
     <Welcome  name="bruce" heroName="batman"></Welcome> */}
     {/* <Hello></Hello> */}
     {/* <Props name="bruce" heroName="batman">
      <p>this is chldren props</p>
     </Props>
     <Props name="clark" heroName="batman">
      <button>submit</button>
     </Props>
     <Props name="diana" heroName="batman"></Props> */}
    </div>
  );
}

export default App;
