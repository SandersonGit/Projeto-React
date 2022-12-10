import { Container, Home, Img } from './StyledHeader'

function Header (){
   
    return (
        <Container>
           <Img src={"https://i.pinimg.com/originals/16/ad/1f/16ad1fbdf4b4d8c994a46166d4ee4777.png"}/>
           <Home>
                <li>HOME</li>
                <li>CONTACT</li>
                <li>CHANGE REALITY</li>
           </Home>
            
        </Container>
    )
}
export default Header



