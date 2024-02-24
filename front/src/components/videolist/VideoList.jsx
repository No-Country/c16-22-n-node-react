// import React from 'react'
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// {videosData}
function VideoList() {
    // const [channelData, setChannelData] = useState({})

    // const fetchChannelData = (channelId) => {
    //     axios
    //       .get(
    //         `https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCepLkQR2FZgLqRVHxQaY7LR3rJdbewdKY&part=snippet&id=${channelId}`
    //       )
    //       .then((response) => {
    //         console.log(response);
    //         setChannelData(response.data.snippet);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    // }

    const videosData = [
      {
        id: {
          videoId: "qVAvfwAvd20",
        },
        snippet: {
          channelTitle: "Tutos1",
          title: "Plomeria",
          publishedAt: "2022-01-01T12:34:56Z",
        },
        statistics: {
          viewCount: "5",
        },
      },
      {
        id: {
          videoId: "2LfWMZGR_zw",
        },
        snippet: {
          channelTitle: "Mr inventor93",
          title:
            "¡3 minutos! 3 trucos de plomería que pueden sacarte de un apuro - PVC",
          publishedAt: "2022-01-01T12:34:56Z",
        },
        statistics: {
          viewCount: "1",
        },
      },
      {
        id: {
          videoId: "Mzx4R-ix_Wo",
        },
        snippet: {
          channelTitle: "Tutos 3",
          title: "Electricidad",
          publishedAt: "2022-01-01T12:34:56Z",
        },
        statistics: {
          viewCount: "2",
        },
      },
      {
        id: {
          videoId: "GL8hoMYKFew",
        },
        snippet: {
          channelTitle: "Tutos 4",
          title: "Jardineria",
          publishedAt: "2022-01-01T12:34:56Z",
        },
        statistics: {
          viewCount: "3",
        },
      },
      {
        id: {
          videoId: "gBp2bsm-CSE",
        },
        snippet: {
          channelTitle: "EmpleadasDomestica07",
          title:
            "CURSO DE LIMPIEZA DEL HOGAR Y SERVICIO DOMESTICO * Los Trapos de limpieza",
          publishedAt: "2022-01-01T12:34:56Z",
        },
        statistics: {
          viewCount: "4",
        },
      },
    ];

    const calculateDate = (publishedAt) => {
      const publishedDate = new Date(publishedAt);

      const currentDate = new Date();
      const timeDifference = currentDate - publishedDate;

      const yearsAgo = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
      const monthsAgo = Math.floor(timeDifference / (30 * 24 * 60 * 60 * 1000));
      const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
      const minutesAgo = Math.floor(timeDifference / (60 * 1000));

      // Choose the appropriate time unit based on the magnitude of the difference
      let timeAgo;
      if (yearsAgo > 0) {
        timeAgo = `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
      } else if (monthsAgo > 0) {
        timeAgo = `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
      } else if (daysAgo > 0) {
        timeAgo = `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
      } else if (hoursAgo > 0) {
        timeAgo = `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
      } else {
        timeAgo = `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
      }

      return timeAgo;
    };

    // if(videosData) {
          return (
            <div className="flex flex-row">
              {videosData.map((video) => (
                <div
                  className="max-w-[360px] max-h-[300px] mx-[16px] font-roboto"
                  key={video.id.videoId}
                >
                  <iframe
                    className="rounded-xl"
                    src={`https://youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    title={video.snippet.title}
                  ></iframe>
                  <div className="flex pt-6 pr-3">
                    <img
                      src="https://yt3.ggpht.com/EU7Tb8XoVkDfsYIkaNsrnQZbyRQHBKKOdEU8SxGUbcOA73f1L9yB7YAHhLStL50sMajOpcyCPI8=s48-c-k-c0x00ffffff-no-rj"
                      alt=""
                      className="w-9 h-9 rounded-[18px] mr-3"
                    />
                    <div className="font-[500]">
                      <p className="text-[16px] ">{video.snippet.title}</p>
                      <span className="text-[14px] font-[400] text-[#606060]">
                        {video.snippet.channelTitle}
                      </span>
                      <div className="font-[400] text-[#606060]">
                        <span>{`${video.statistics.viewCount} views`}</span>
                        <span>{` • ${calculateDate(video.snippet.publishedAt)}`}</span>
                      </div>
                    </div>
                    {/* {fetchChannelData(video.snippet.channelId)} */}
                    {/* {channelData && (
                        <img src={channelData.thumbnails.default.url} alt="" />
                        )} */}
                  </div>
                </div>
              ))}
            </div>
          );
    //}

}

export default VideoList