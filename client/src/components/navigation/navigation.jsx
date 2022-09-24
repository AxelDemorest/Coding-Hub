import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const Nav = styled.nav`
    display: flex;
    background: #fffcf6;
    justify-content: space-between;
    height: 90px;
    padding: 0 30px;
    align-items: center;
`

const NavBar = styled.div`
    display: flex;
    width: 50%;
`
const NavItems = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-around;
`

const NavLink = styled.li`
    margin: 0 1rem;
    font-size: 1.2rem;
    list-style: none;
    cursor: pointer;
`

const Navigation = () => {
    return (
        <Nav className='navigation'>
            <div className="logo">Coding Hub</div>
            <TextField
                id="standard-search"
                label="Recherche"
                type="search"
                variant="standard"
            />
            <NavBar className="navbar">
                <NavItems className='navItems'>
                    <NavLink className="navlink">Accueil</NavLink>
                    <NavLink className="navlink">Tags</NavLink>
                    <NavLink className="navlink">ddddd</NavLink>
                </NavItems>
            </NavBar>
        </Nav>
    )
}

export default Navigation