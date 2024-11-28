import Header from "./components/Header/Header"
import MenuSection from "./components/MenuSection"
import DifSection from "./components/DifSection"
import IntroSection from "./components/IntroSection"
import TabSection from "./components/TubSection"
import FeedBackSection from "./components/FeedBackSection"
import { useState } from "react"

export default function App() {

  const [tab, setTab] = useState('feedback')

  return(
    <>
      <Header></Header>
      <main>
        <IntroSection/>
        <TabSection active={tab} onChange={current => setTab(current)}/>

        {tab === 'main' && (
          <> 
            <MenuSection/>
            <DifSection/>
          </>
        )}

        {tab === 'feedback' && (
            <FeedBackSection/>
        )}  
       
      </main>
    </>
  )
}


