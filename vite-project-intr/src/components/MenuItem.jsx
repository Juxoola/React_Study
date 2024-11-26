export default function MenuItem({title, description}) {
    return(
      <li>
        <p>
          <strong>{title}</strong> {description}
        </p>
      </li>
    )
    
  }