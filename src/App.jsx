import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Menu from './component/Menu'
import Slide from './component/Slide'
import Tabmenu from './component/Tabmenu'
import Footer from './component/Footer'


function App() {


  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Menu></Menu>
        <Slide></Slide>
        <Tabmenu></Tabmenu>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
