
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import FAQ from './Components/FAQ'
import Classes from './Components/Classes'
// import Schedule from './Components/Schedule'
import ClassesType from './Components/ClassesType'
import Booking from './Components/Booking';
import Footer from './Components/Footer'
import Group from './Components/Group';
import PrivateClasses from './Components/PrivateClasses';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Classes />
      <ClassesType />
      <Group />
      <PrivateClasses />
      <Booking />
      
      <FAQ />
      <Footer />

    </>
  )
}

export default App
