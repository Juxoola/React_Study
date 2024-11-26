import Header from "./components/Header"
import MenuSection from "./components/MenuSection"
import DifSection from "./components/DifSection"
import IntroSection from "./components/IntroSection"

export default function App() {

  return(
    <>
      <Header></Header>
      <main>
        <IntroSection/>
        <MenuSection/>
        <DifSection/>
      </main>
    </>
  )
}


