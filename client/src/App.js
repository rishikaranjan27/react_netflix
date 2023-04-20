import './App.css';
import {Header} from "./MyComponents/Header";
import {Banner} from "./MyComponents/Banner";
import {Scroll} from "./MyComponents/Scroll";
import {Row} from "./MyComponents/Row";
import requests from "./requests";


function App() {
  return (
    <div className="App">

      <Header/> 

      <Banner/>

      <Row 
      title = "Netflix Originals"
      fetchURL = {requests.fetchNetflixOriginals}
      />

      <Row 
      title = "Trending"
      fetchURL = {requests.fetchTrending}
      />

      <Row 
      title = "Top Rated"
      fetchURL = {requests.fetchTopRated}
      />

 
    </div>
  );
}

export default App;


