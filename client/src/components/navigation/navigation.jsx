import { useContext } from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { RiNotification4Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./navigation.css";
import logo from "../../assets/logo.png";

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <Nav>
      <LeftNavigation>
        <WebSiteIcon src={logo} />
        <NavItems className="navItems">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/">Catégories</NavLink>
          <NavLink to="/forum">Forum</NavLink>
          <NavLink to="/">Messages</NavLink>
        </NavItems>
      </LeftNavigation>
      <RightNavigation>
        <ListIcons>
          <BiSearch
            style={{ color: "#2F2F2F", fontSize: "20px", cursor: "pointer" }}
          />
          <FiSettings
            style={{ color: "#2F2F2F", fontSize: "18px", cursor: "pointer" }}
          />
          <RiNotification4Line
            style={{ color: "#2F2F2F", fontSize: "19px", cursor: "pointer" }}
          />
          <UserIcon src="https://zupimages.net/up/21/06/3w5i.png" />
        </ListIcons>
      </RightNavigation>
    </Nav>
  );
};

const WebSiteIcon = styled.img`
  width: 30%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0 80px;
  height: 90px;
`;

const LeftNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  justify-content: start;
  align-items: center;
  padding-left: 80px;
  margin-bottom: 0;
`;

const NavLink = styled(Link)`
  margin: 0 1.5rem;
  font-size: 1.02rem;
  font-weight: 500;
  list-style: none;
  cursor: pointer;
  color: #2f2f2f;
`;

const ListIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 37%;
`;

const UserIcon = styled.img`
  border-radius: 50%;
  width: 15%;
`;

export default Navigation;
