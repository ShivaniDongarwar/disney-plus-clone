import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Service from "../Service/Service";

function Detail() {
  const [movieInfo, setmovieInfo] = useState({});
  const { id } = useParams();

  const getMovieData = async () => {
    Service.getSingleData(id)
      .then((res) => {
        console.log("sd===>", res.data());
        setmovieInfo(res.data());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    getMovieData();
  }, []);
  console.log("movieInfo===>", movieInfo);
  // let temp = [movieInfo];
  return (
    <Container>
      {movieInfo && (
        <>
          {" "}
          <Background>
            <img src={movieInfo.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movieInfo.titleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/Disney Plus/images/play-icon-black.png" alt=""  />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/Disney Plus/images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/Disney Plus/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movieInfo.subTitle}</SubTitle>
          <Description>{movieInfo.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  padding: 0px, 24px;
  margin-right: 25px;
  display: flex;
  align-items: center;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
