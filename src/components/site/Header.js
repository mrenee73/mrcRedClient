import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import beerFrogs from '../../assets/lager-beer-frogs.jpg';
import leaping from '../../assets/leaping.jpg';

 import beermug from '../../assets/beermug.jpg';

const Header = () => {
    return (
        <header>
          
            <Navbar className = 'header'>              
            <Nav className= 'ml-auto' navbar>
                    <NavItem class='headerlogo'><h1>Hop to It!</h1></NavItem>
                    <NavItem>                  
                 <img id='leaping' src={leaping} alt='leaping frog' class="img-thumbnail"/>            
                    </NavItem>                   
            </Nav>
            </Navbar>
            
        </header>
    );
};

export default Header;