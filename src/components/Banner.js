import axios from "../api/axios";
import React, { useState, useEffect } from "react";
import requests from "../api/requests";
import styled from "styled-components";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);

    const movieID =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieID}`, {
      params: {
        append_to_response: "videos",
      },
    });

    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const [isClicked, setIsClicked] = useState(false);
  if (!isClicked) {
    return (
      <BannerHeader movie={movie}>
        <BannerContents>
          <BannerTitle>
            {movie.title || movie.name || movie.original_name}
          </BannerTitle>
          <BannerButtons>
            <BannerButtonPlay onClick={() => setIsClicked(true)}>
              Play
            </BannerButtonPlay>
            <BannerButtonInfo>
              <BannerSpace></BannerSpace>More Infomation
            </BannerButtonInfo>
          </BannerButtons>
          <BannerDescription>
            {truncate(movie?.overview, 100)}
          </BannerDescription>
        </BannerContents>
        <BannerFadeBottom />
      </BannerHeader>
    );
  } else {
    return (
    <Container>
      <HomeConatiner>
        
      </HomeConatiner>
    </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeConatiner = styled.div`
  width: 100%;
  height: 100%;
`;

const BannerHeader = styled.header`
  background-image: ${(props) =>
    `url("https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}")`};
  background-position: top center;
  background-size: cover;
  color: white;
  object-fit: contain;
  height: 448px;
  @media (min-width: 1500px) {
    position: relative;
    height: 600px;
  }
  display: flex;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`;

const BannerContents = styled.div`
  @media (max-width: 768px) {
    width: min-content !important;
    padding-left: 2.3rem;
    margin-left: 0px !important;
  }
  margin-left: 40px;
  padding-top: 140px;
  height: 190px;
`;

const BannerButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const BannerButtonPlay = styled.button`
  @media (max-width: 768px) {
    font-size: 0.8rem !important;
    border-radius: 4px !important;
  }
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.4rem 1.8rem 0.4rem 1rem;
  margin-right: 1rem;
  transition: all 0.2s;
  &:hover {
    color: #000;
    background-color: rgba(170, 170, 170, 0.9);
  }
`;

const BannerButtonInfo = styled.button`
  @media (max-width: 768px) {
    text-align: start;
    padding-right: 1.2rem;
  }
  background-color: rgba(109, 109, 110, 0.7);
  color: white;
  &:hover {
    background-color: rgb(74, 74, 74);
    color: white;
  }
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.4rem 1.8rem 0.4rem 1rem;
  margin-right: 1rem;
  transition: all 0.2s;
`;

const BannerDescription = styled.h1`
  @media (max-width: 768px) {
    font-size: 0.8rem !important;
    width: auto !important;
  }
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  height: 80px;
`;
const BannerFadeBottom = styled.div`
  @media (min-width: 1500px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40rem;
  }
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
const BannerSpace = styled.div`
  @media (max-width: 768px) {
    margin-left: 6px;
  }
  margin-left: 4px;
`;
