import './App.css';
import Introduction from "./components/Intro";
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
// import Toggle from './components/toggle/Toggle';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComp from './components/navBar/NavbarComp';

const App = () => {
  return ( 
    <div>
      {/* <NavbarComp></NavbarComp> */}
      {/* <Toggle/> */}
      <Introduction/>
      <About/>
      <ProductList></ProductList>
      <Contact></Contact>
  </div>
  );
};

export default App;
