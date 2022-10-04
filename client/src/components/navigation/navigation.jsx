import { useContext } from 'react';
import styled from 'styled-components';
import { IoNotificationsSharp } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import { Link } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='navigation'>
            <Nav>
                <LeftNavigation>
                    <WebSiteIcon>Coding Hub</WebSiteIcon>
                    <NavItems className='navItems'>
                        <NavLink className="navlink">Accueil</NavLink>
                        <NavLink className="navlink">Tags</NavLink>
                        <NavLink className="navlink">ddddd</NavLink>
                    </NavItems>
                </LeftNavigation>
                <RightNavigation>
                    {user ? (
                        <ButtonForum>Se déconnecter</ButtonForum>
                    ) : (
                        <div>
                            <LinkUser to="/connexion">Se connecter</LinkUser>
                            <LinkUser to="/inscription">Créer un compte</LinkUser>
                        </div>
                    )}
                    <ListIcons>
                        <IoNotificationsSharp style={{ color: '#A77FF2', fontSize: '25px', cursor: 'pointer' }} />
                        <FaUserAlt style={{ color: '#A77FF2', fontSize: '20px', marginTop: '2px', cursor: 'pointer' }} />
                    </ListIcons>
                </RightNavigation>
            </Nav>
         </div>
    )
}

const WebSiteIcon = styled.h2`
    font-size: '45px';
    font-weight: 700;
    color: #2F2F2F;
    width: 30%;
`

const Nav = styled.nav`
    display: flex;
    background-color: #FFFFFF;
    justify-content: space-between;
    height: 90px;
    padding: 0 80px;
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

const LinkUser = styled(Link)`
    &:hover {
        background-color: #8B6ED8;
        color: #FFFFFF;
    }
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;
    background-color: #FFFFFF;
    border: 1px solid #A77FF2;
    border-radius: 30px;
    padding: 10px 30px;
    font-size: 1.02rem;
    color: #A77FF2;
    font-weight: 600;
    margin-right: 20px;
    text-decoration: none;
`

const ButtonForum = styled.button`
    &:hover {
        background-color: #8B6ED8;
        color: #FFFFFF;
    }
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;
    background-color: #FFFFFF;
    border: 1px solid #A77FF2;
    border-radius: 30px;
    padding: 10px 30px;
    font-size: 1.02rem;
    color: #A77FF2;
    font-weight: 600;
    margin-right: 20px;
`

const NavItems = styled.ul`
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
    padding-left: 80px;
`

const NavLink = styled.li`
    margin: 0 1.5rem;
    font-size: 1.02rem;
    font-weight: 500;
    list-style: none;
    cursor: pointer;
    color: #4e4e4e;
`

const ListIcons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 16%;
`

export default Navigation