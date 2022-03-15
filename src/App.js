import React from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import './App.css'
import Row from './components/Row';
import requests from './api/requests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        title="ORIGINFLIX ORIGINALS"
        id="ORI"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Footer />
    </div>
  );
}

export default App
