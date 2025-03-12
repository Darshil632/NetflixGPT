import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      if (!data.ok) {
        console.error(`Failed to fetch: ${data.status} - ${data.statusText}`);
        return;
      }

      const json = await data.json();
      const filterData =
        json.results?.filter((video) => video.type === "Trailer") || []; // Default to an empty array if `results` is undefined

      const trailer = filterData.length > 0 ? filterData[0] : json.results?.[0];

      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      } else {
        console.warn("No trailer found for the movie.");
      }
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    if (!trailerVideo) {
      getMovieVideos();
    }
  }, [trailerVideo]); // Ensure `trailerVideo` is included as a dependency
};

export default useMovieTrailer;
