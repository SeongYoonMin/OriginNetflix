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

  return (
    <BannerHeader movie={movie}>
      <BannerContents>
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <BannerButtons>
          <BannerButtonPlay>Play</BannerButtonPlay>
          <BannerButtonInfo>
            <BannerSpace></BannerSpace>More Infomation
          </BannerButtonInfo>
        </BannerButtons>
        <BannerDescription>{movie.overview}</BannerDescription>
      </BannerContents>
      <BannerFadeBottom />
    </BannerHeader>
  );
}

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
`;
const BannerContents = styled.div`
  @media (max-width: 768px) {
    width: min-content !important;
    padding-left: 2.3rem;
    margin-left: 0px !important;
  }
`;

const BannerButtons = styled.div``;

const BannerButtonPlay = styled.button`
  background-color: white;
  color: black;
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
`;

const BannerDescription = styled.h1`
  @media (max-width: 768px) {
    font-size: 0.8rem !important;
    width: auto !important;
  }
`;
const BannerFadeBottom = styled.div`
  @media (min-width: 1500px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40rem;
  }
`;
const BannerSpace = styled.div`
  @media (max-width: 768px) {
    margin-left: 6px;
  }
`;
