import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import MyFormData from "./components/MyFormData"

function App(){
  return(
    <>
      <Navbar></Navbar>
      <main className="grow">
        <MyFormData></MyFormData>
      </main>
      <Footer></Footer>
    </>
  )
}
export default App