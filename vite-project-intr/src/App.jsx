import Header from "./components/Header/Header"
import MenuSection from "./components/MenuSection"
import DifSection from "./components/DifSection"
import IntroSection from "./components/IntroSection"
import TabSection from "./components/TubSection"
import FeedBackSection from "./components/FeedBackSection"
import { useState } from "react"
import EffectsSection from "./components/EffectsSection"

export default function App() {

  const [tab, setTab] = useState('effect')

  return (
		<>
			<Header></Header>
			<main>
				<IntroSection />
				<TabSection active={tab} onChange={current => setTab(current)} />

				{tab === 'main' && (
					<>
						<MenuSection />
						<DifSection />
					</>
				)}

				{tab === 'feedback' && <FeedBackSection />}

				{tab === 'effect' && <EffectsSection />}
			</main>
		</>
	)
}


