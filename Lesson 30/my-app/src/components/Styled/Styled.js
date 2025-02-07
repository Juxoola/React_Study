import styled from 'styled-components'

const TextComponent = styled.div`
  background-color: red;
  color: white;
`
const Link = styled.a`
  color: lime;

  &:hover{
    color: magenta;
  }

`

function Styled(){
  return(
    <div> 
      <TextComponent>
        Hello styl
      </TextComponent>
      <Link href='google.com'>Лаймовая ссылка</Link>
    </div>
  )
}

export default Styled