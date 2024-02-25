// import { useEffect } from 'react'
import VideoList from '../videolist/VideoList'
// import axios from 'axios'
// import { useState } from 'react'

function Tutorials() {
    // const [videosData, setVideosData] = useState([]);

    // useEffect( () => {
    //     axios
    //       .get(
    //         "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCepLkQR2FZgLqRVHxQaY7LR3rJdbewdKY&part=snippet,statistics&chart=mostPopular"
    //       )
    //       .then((response) => {
    //         const { data } = response;
    //         setVideosData(data.items);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    // }, [])
  
    
  return (
    <>
      {/*  className="max-w-[1440px] mx-auto w-full flex flex-wrap align-left justify-start my-20" */}
      <div className='mx-auto w-[1440px]'>
        <h3 className="text-[32px]">Tutoriales</h3>
        {/* {videosData.length > 0 ? <VideoList videosData={videosData}></VideoList> : null} */}
        {/* <VideoList></VideoList> */}

        <VideoList></VideoList>
      </div>
    </>
  );
}

export default Tutorials