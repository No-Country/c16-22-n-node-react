
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Categories from '../components/categories/Categories'
import Tutorials from "../components/tutorials/Tutorials";
import SearchBar from '../components/searchbar/SearchBar';
import VideoList from '../components/videolist/VideoList';
import Novedades from '../components/novedades/Novedades';


const Home = () => {
  return (
    <div className='scroll-smooth '>
      <Header/>
      <SearchBar/>
      <Categories/>
      <Novedades/>
      <VideoList/>
      <Footer/>
    </div>
  )
}

export default Home