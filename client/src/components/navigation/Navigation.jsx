import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { RiNotification4Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./navigation.css";
import logo from "../../assets/logoV2.png";

const Navigation = () => {
  return (
    <Nav>
      <LeftNavigation>
        <WebSiteIcon src={logo} />
        <NavItems className="navItems">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/forum">Forum</NavLink>
          <NavLink to="/forum">Ressources</NavLink>
          <NavLink to="/">Messages</NavLink>
        </NavItems>
      </LeftNavigation>
      <RightNavigation>
        <ListIcons>
          <FiSettings
            style={{ color: "#2F2F2F", fontSize: "18px", cursor: "pointer" }}
          />
          <RiNotification4Line
            style={{ color: "#2F2F2F", fontSize: "19px", cursor: "pointer" }}
          />
          <Account>CyraElCharo</Account>
        </ListIcons>
      </RightNavigation>
    </Nav>
  );
};

const WebSiteIcon = styled.img`
  width: 50px;
  border-radius: 5px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 80px;
  height: 90px;
`;

const LeftNavigation = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

const RightNavigation = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50%;
`;

const LinkUser = styled(Link)`
  &:hover {
    background-color: #8b6ed8;
    color: #ffffff;
  }
  transition: color 0.2s, background-color 0.2s;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #a77ff2;
  border-radius: 30px;
  padding: 10px 30px;
  font-size: 1.02rem;
  color: #a77ff2;
  font-weight: 600;
  margin-right: 20px;
  text-decoration: none;
`;

const ButtonForum = styled.button`
  &:hover {
    background-color: #8b6ed8;
    color: #ffffff;
  }
  transition: color 0.2s, background-color 0.2s;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #a77ff2;
  border-radius: 30px;
  padding: 10px 30px;
  font-size: 1.02rem;
  color: #a77ff2;
  font-weight: 600;
  margin-right: 20px;
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
  margin-bottom: 0;
`;

const NavLink = styled(Link)`
  margin: 0 1.5rem;
  font-size: 1.1rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  color: #2f2f2f;
  transition: color 0.2s;
  
  &:hover {
    color: #FF5757;
  }
`;

const ListIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

const Account = styled(Link)`
  font-family: "MontserratMedium", sans-serif;
  color: #000000;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #FF5757;}
`;

export default Navigation;
