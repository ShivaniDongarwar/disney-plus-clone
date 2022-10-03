import { React, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Service from "../Service/Service";
import { userAction } from "../features/User/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  // useEffect(() => {
  //   Service.onStateChange((user) => {
  //     if (user) {
  //       dispatch(
  //         userAction.setUserLogin({
  //           name: user.displayName,
  //           email: user.email,
  //           photo: user.photo,
  //         })
  //       );
  //     }
  //     history("/");
  //   });
  // }, []);
  const userName = useSelector((state) => {
    return state.userReducer.name;
  });
  const userPhoto = useSelector((state) => {
    return state.userReducer.photo;
  });

  const signIn = async () => {
    const data = await Service.signIn();
    let user = data.user;
    let name = user.displayName;
    let email = user.email;
    let photo = user.photoURL;
    dispatch(userAction.setUserLogin({ name, email, photo }));
    localStorage.setItem(
      "user_details",
      JSON.stringify({ name, email, photo })
    );
    history("/");
  };
  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem("user_details"));
    if (userDetails?.email != "") {
      dispatch(userAction.setUserLogin(userDetails));
    }
    console.log("userDetails--------------", userDetails);
  }, []);
  const signOut = () => {
    Service.signOut()
      .then((res) => {
        console.log("res===>", res);
        localStorage.removeItem("user_details");
        dispatch(userAction.setSignOut());
        history("/login");
      })
      .catch((error) => {
        throw new error();
      });
  };

  return (
    <>
      <Nav>
        <Logo src="/Disney Plus/images/logo.svg" />
        {!userName ? (
          <LoginContainer>
            <Login onClick={signIn}>Login</Login>
          </LoginContainer>
        ) : (
          <>
            <NavMenu>
              <a>
                <img src="/Disney Plus/images/home-icon.svg" alt="" />
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
            <UserImage onClick={signOut} src={userPhoto} alt="" />
            {/* <UserImage onClick={signOut} id="user image" src={'https://lh3.googleusercontent.com/a-/ACNPEu8HLITfP7AMNG3d9msI2GufB0cplIHntWyIZUTOug=s96-c'} alt= ""/> */}
          </>
        )}
      </Nav>
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
  z-index: 1;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
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
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: -1;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
`;
const Login = styled.button`
  opacity: 1;
  align-items: center;
  border: 1px solid #f9f9f9;
  padding: 8px 12px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: rgba(0, 0, 0, 0.6);
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px;
`;
