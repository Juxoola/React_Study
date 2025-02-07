import styles from "./styles"

function Inline(props) {
  return (
		<div>
			<div style={styles.whiteOnRedDynamic(props.type)}>Пам пам</div>
		</div>
	)
}

export default Inline