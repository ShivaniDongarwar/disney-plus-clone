import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { useEffect } from "react";
import Service from "../Service/Service";
import { useDispatch } from "react-redux/es/exports";
import { movieActions } from "../features/Movies/movieSlice";

const Home = () => {
  const dispatch=useDispatch();
  const getAllData = async () => {
    const data = await Service.getAllData();
    let tempMovies = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log("tempMovies===>",tempMovies);
  dispatch(movieActions.addMovies(tempMovies))
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};
export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url("/Disney Plus/images/home-background.png") center center /
      cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
