import logo from './logo.svg';
import './App.css';
import {Route , Routes} from "react-router-dom";
import {Home} from './Components/Home';
import {About} from './Components/About';
import { Navbar } from './Components/Navbar';
import { Ordersummary } from './Components/Ordersummary';
import { PageNotFound } from './Components/PageNotFound';
import { Products } from './Components/Product';
import { New } from './Components/New';
import { Featured } from './Components/Featured';
import { Users } from './Components/Users';
import { UsersDeatils } from './Components/UserDeatils';
import { Admin } from './Components/Admin';
import Welcome from './Components/Welcome';
import HelloClass from './Components/HelloClass';
import Count from './Components/Count';
import Binding from './Components/binding';
import Parents from './Components/Parents';
import HookOne from './Hooks/HookOne';
import HookTwo from './Hooks/HookTwo';
import HookArray from './Hooks/HookArray';
import HookEffect from './Hooks/HookEffect';
import ClassEffect from './Hooks/ClassEffect';
function App() {

  return (
    <div className="App">
      {/* <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="Ordersummary" element={<Ordersummary/>}/>
      <Route path="products" element={<Products/>}>
        <Route index element={<Featured/>}/>
        <Route path="featured" element={<Featured/>}/>
        <Route path="new" element={<New/>}/>
      </Route>
      <Route path="users" element={<Users/>}>
      <Route path=":userId" element={<UsersDeatils/>}/>
      <Route path="admin" element={<Admin/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
     </Routes>
     </> */}
     {/* <Welcome name="kashish" cast="Kirplani">
    this is a girl
      <p>this is a boy</p>
      <p>Yeh hello</p>
     </Welcome>
     <Welcome name="Nancy" cast="Kirplani">
      this is a girl
     
      </Welcome>
     {/* <Welcome name="Gurmeet" cast="Kumar"/> */}
   {/* <HelloClass name="kanchan" cast="Kataria"/>  */}
     {/* <Count/> */}
     {/* <Binding/> */}
     {/* <Parents/> */}
      {/* <HookOne/> */}
      {/* <HookTwo/> */}
      {/* <HookArray/> */}
      {/* <HookEffect/> */}
      <ClassEffect/>
    </div>
  );
}

export default App;
