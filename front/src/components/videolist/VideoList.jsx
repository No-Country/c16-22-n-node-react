import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./videolist.css";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ReactPlayer from "react-player";
import { videosData } from "../../VideosArrays/VideoArray";

function VideoList() {
  // if(videosData) {

  return (
    <>
    <div className="max-w-[1440px] mx-auto">
   <span className="px-3 text-[#4E4E4E] font-medium text-3xl" >Tutoriales</span>
      <Swiper
        slidesPerView={3}
        
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        >
        {videosData.map((video) => (
          <SwiperSlide key={video.id.videoId}>
            <ReactPlayer
            controls={true}
            url={`https://youtube.com/embed/${video.id.videoId}`}
            width="100%"
            height="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </>
  );
  //}
}

export default VideoList;

//  {/* {fetchChannelData(video.snippet.channelId)} */}
//                 {/* {channelData && (
//                     <img src={channelData.thumbnails.default.url} alt="" />
//                     // )} */}

// const calculateDate = (publishedAt) => {
//   const publishedDate = new Date(publishedAt);

//   const currentDate = new Date();
//   const timeDifference = currentDate - publishedDate;

//   const yearsAgo = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
//   const monthsAgo = Math.floor(timeDifference / (30 * 24 * 60 * 60 * 1000));
//   const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
//   const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
//   const minutesAgo = Math.floor(timeDifference / (60 * 1000));

//   // Choose the appropriate time unit based on the magnitude of the difference
//   let timeAgo;
//   if (yearsAgo > 0) {
//     timeAgo = `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
//   } else if (monthsAgo > 0) {
//     timeAgo = `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
//   } else if (daysAgo > 0) {
//     timeAgo = `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
//   } else if (hoursAgo > 0) {
//     timeAgo = `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
//   } else {
//     timeAgo = `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
//   }

//   return timeAgo;
// };
