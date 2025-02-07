import { Link } from 'react-router-dom'

import './Footer.css'
function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__links'>
				<Link to={'about'} className={'link footer__link'}>
					Обо мне
				</Link>
				<Link to={'portfolio'} className={'link footer__link'}>
					Портфолио
				</Link>
				<Link to={'contacts'} className={'link footer__link'}>
					Контакты
				</Link>
				<a href="https://google.com" target="_blank" rel="noreferrer">
					google
				</a>
			</div>
			<div className='footer__copyright'>
				© {new Date().getFullYear()} Copyright
			</div>
		</footer>
	)
}

export default Footer
