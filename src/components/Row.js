import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieModal from "./MovieModal/MovieModal";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log(request);
    setMovies(request.data.results);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }

  return (
    <RowBox>
      <h2 style={{ paddingLeft: "20px" }}>{title}</h2>
      <Slider>
        <SliderLeft>
          <SliderArrow onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth -80;
          }}>{"<"}</SliderArrow>
        </SliderLeft>
        <RowPosters id={id}>
          {movies.map((movie) => {
            if (isLargeRow) {
              return <RowPosterLarge
                key={movie.id}
                src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              ></RowPosterLarge>
            } else {
              return <RowPoster
                key={movie.id}
                src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />;
            }
          })}
        </RowPosters>
        <SliderRight>
          <SliderArrow onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth -80;
          }}>{">"}</SliderArrow>
        </SliderRight>
      </Slider>
      {
        modalOpen && (
          <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
        )
      }
    </RowBox>
  );
}

const RowBox = styled.section`
  margin-left: 20px;
  color: white;
`;

const Slider = styled.div`
  position: relative;
`;

const SliderLeft = styled.div`
  background-clip: content-box;
  padding: 20px 0;
  box-sizing: border-box;
  transition: 400ms all ease-i-out;
  cursor: pointer;
  width: 80px;
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
`;

const SliderRight = styled.div`
  background-clip: content-box;
  padding: 20px 0;
  box-sizing: border-box;
  transition: 400ms all ease-i-out;
  cursor: pointer;
  width: 80px;
  z-index: 1000;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
`;

const SliderArrow = styled.span`
  transition: 400ms all ease-in-out;
  &:hover {
    transition: 400ms all ease-in-out;
    transform: scale(1.5);
  }
`;

const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0 20px 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RowPoster = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 144px;
  margin-right: 10px;
  transition: transform 450ms;
  border-radius: 4px;
  &:hover{
    transform: scale(1.08);
  }
`;

const RowPosterLarge = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 144px;
  margin-right: 10px;
  transition: transform 450ms;
  border-radius: 4px;
  max-height: 320px;
  &:hover{
    transform: scale(1.1);
    opacity: 1;
  }
`;
