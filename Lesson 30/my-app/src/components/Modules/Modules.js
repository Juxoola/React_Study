import styles from './Modules.module.css';

function Modules() {
  return (
		<div>
			<div className={styles.text}> Hello Modules</div>
			<div className={styles['text-message']}> Hello Modules Text message</div>
		</div>
	)
}


export default Modules