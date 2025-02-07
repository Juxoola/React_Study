import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
	return (
		<header className={'header'}>
			<h1 className={'header__title'}>
				<Link to={'/'} className={'link'}>
					Главная страница
				</Link>
			</h1>
			<div className={'header__links'}>
				<Link to={'about'} className={'link header__link'}>
					Обо мне
				</Link>
				<Link to={'portfolio'} className={'link header__link'}>
					Портфолио
				</Link>
				<Link to={'contacts'} className={'link header__link'}>
					Контакты
				</Link>
			</div>
		</header>
	)
}

export default Header
