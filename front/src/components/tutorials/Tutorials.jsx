import { useEffect, useState } from 'react'
import VideoList from '../videolist/VideoList'
import axios from 'axios'
import Title from '../title/Title'

function Tutorials() {
    const [videosData, setVideosData] = useState([]);

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
    <div className="max-w-[1440px] w-full mx-auto gap-12  flex flex-col flex-wrap align-left justify-start my-20">
      <Title className={"text-[32px] font-[500]"} text={"Tutoriales"} />
      {/* {videosData.length > 0 ? <VideoList videosData={videosData}></VideoList> : null} */}
      <VideoList></VideoList>
    </div>
  );
}

export default Tutorials