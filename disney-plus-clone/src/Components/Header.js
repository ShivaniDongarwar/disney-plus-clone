import React from "react";
import styled from "styled-components";
import Home from "./Home";
const Header = () => {
  return (
    <>
      <Nav>
        <Logo src="/Disney Plus/images/logo.svg" />
        <NavMenu>
          <a>
            <img src="/Disney Plus/images/home-icon.svg" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/Disney Plus/images/search-icon.svg" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/Disney Plus/images/watchlist-icon.svg" />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/Disney Plus/images/original-icon.svg" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/Disney Plus/images/movie-icon.svg" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/Disney Plus/images/series-icon.svg" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImage src=" " />
      </Nav>
      <Home />
    </>
  );
};
export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-item: centre;
  padding: 0 36px;
  z-index: -1;
  overflow-x: hidden;

`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-item: centre;
  a {
    display: flex;
    align-item: centre;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 47px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
