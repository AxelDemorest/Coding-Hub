import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { IoNotificationsSharp } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';

const Navigation = () => {
    return (
        <Nav className='navigation'>
            <LeftNavigation>
                <WebSiteIcon>Coding Hub</WebSiteIcon>
                <NavItems className='navItems'>
                    <NavLink className="navlink">Accueil</NavLink>
                    <NavLink className="navlink">Tags</NavLink>
                    <NavLink className="navlink">ddddd</NavLink>
                </NavItems>
            </LeftNavigation>
            <RightNavigation>
                <SearchInput>
                    <TextField
                        id="standard-search"
                        label="Recherche"
                        type="search"
                        variant="standard"
                    />
                </SearchInput>
                <ListIcons>
                    <IoNotificationsSharp style={{ color: '#D1D3D5', fontSize: '25px' }} />
                    <FaUserAlt style={{ color: '#D1D3D5', fontSize: '20px', marginTop: '2px' }} />
                </ListIcons>
            </RightNavigation>
        </Nav>
    )
}

const WebSiteIcon = styled.h2`
    font-size: '45px';
    font-weight: 400;
    width: 30%;
`

const Nav = styled.nav`
    display: flex;
    background: #fffcf6;
    justify-content: space-between;
    height: 90px;
    padding: 0 30px;
    align-items: center;
`

const LeftNavigation = styled.div`
    display: flex;
    width: 50%;
`

const RightNavigation = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 50%;
`

const SearchInput = styled.div`
    margin-bottom: 20px;
    margin-right: 30px;
`

const NavItems = styled.ul`
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
`

const NavLink = styled.li`
    margin: 0 2rem;
    font-size: 1.02rem;
    font-weight: 600;
    list-style: none;
    cursor: pointer;
    color: #696969;
`

const ListIcons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 16%;
`

export default Navigation