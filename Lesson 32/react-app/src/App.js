import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './IndexPage/IndexPage'
import AboutPage from './cpmponents/AboutPage/AboutPage'
import Header from './cpmponents/Header/Header'
import Footer from './cpmponents/Footer/Footer'
import PortfolioPage from './cpmponents/PortfolioPage/PortfolioPage'
import ContactsPage from './cpmponents/ContactsPage/ContactsPage'
import UsersPage from './cpmponents/UsersPage/UsersPage'
import UserPage from './cpmponents/UserPage/UserPage'

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<IndexPage />} />
				<Route path={'about'} element={<AboutPage />} />
				<Route path={'portfolio'} element={<PortfolioPage />} />
				<Route path={'contacts'} element={<ContactsPage />} />
				<Route path={'users'} element={<UsersLayout />}>
					<Route index element={<UsersPage />}></Route>
					<Route path={':userId'} element={<UserPage />}></Route>
				</Route>
			</Route>
		</Routes>
	)
}

function UsersLayout() {
	return (
		<div>
			<h1>Пользователи</h1>
			<Outlet></Outlet>
		</div>
	)
}
function Layout() {
	return (
		<div className='App'>
			<Header />
			<main className={'content'}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
export default App
