import { useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Categories from '../components/categories/Categories'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // If the user is already login we should redirect them to the desired page
  const navigate = useNavigate()

    // useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("userInfo"));
    //   if (user) {
    //     navigate("/");
    //   }
    // });

  return (
    <div className=''>
     <Header/>
     <Categories/>
      <Footer/>
    </div>
  )
}

export default Home