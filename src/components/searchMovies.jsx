import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userSlice";
import { setUser } from "../redux/userSlice";
import { useEffect } from "react";
import {baseurl} from "../utils/constants.js"
import { Link } from "react-router-dom";
const SearchMovie = () => {

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const searchMovies = async (value) => {

    setSearch(value);

    if (value.trim() === "") {
      setMovies([]);
      return;
    }

    try {

      const res = await axios.get(
        `${baseurl}/movies/search?q=${value}`
      );

      setMovies(res.data);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

    const fetchUser = async () => {

      try {

        const res = await axios.get(
          `${baseurl}/me`,
          {
            withCredentials: true
          }
        );
        console.log(res.data);
        
        dispatch(setUser(res.data));

      } catch (error) {

        console.log(error);
      }
    };

    fetchUser();

  }, []);

  return (

    <div className="min-h-screen bg-gray-100">

  {/* Header */}

  <div className="bg-blue-600 text-white shadow-lg">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-5 py-4">

      {/* Logo */}

      <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
        Movie Booking
      </h1>

      {/* Search Bar */}

      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => searchMovies(e.target.value)}
        className="bg-white text-black px-4 py-2 rounded-lg outline-none w-full md:w-[350px]"
      />

      {/* User Section */}

      <div className="flex items-center justify-center gap-4">

        <h2 className="text-lg md:text-xl font-semibold">
          Welcome, {user?.name}
        </h2>

        <button
          onClick={() => {

            dispatch(logoutUser());

            window.location.href = "/";

          }}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
        >
          Logout
        </button>

      </div>

    </div>

  </div>

  {/* Movies Section */}

  <div className="px-4 md:px-10 py-8">

    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
      Recommended Movies
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {
        movies.map((movie) => (
          <Link to={"/moviesDescription/"+movie.title}>
          <div
            key={movie.id}
            className="border border-gray-300 rounded-2xl p-5 shadow-lg bg-white hover:scale-105 duration-300"
          >

            <h3 className="text-xl md:text-2xl font-bold">
              {movie.title}
            </h3>
          </div>
          </Link>
        ))
      }

    </div>

  </div>

</div>
  );
};

export default SearchMovie;