const GOOGLE_API_KEY = "AIzaSyBT8p-aRiSovWr1HOiI_-rHFsVVp-SMeHo";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

/**
   * const { snippet, statistics } = info;
const { channelTitle, title, thumbnails } = snippet;
return (
  <div className="p-2 m-2 w-50">
    <img alt="thumbnails" src={thumbnails.medium.url} />
    <ul>
      <li>{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount}</li>
    </ul>
  </div>
);

   */
