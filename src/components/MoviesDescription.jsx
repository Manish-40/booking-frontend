import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseurl } from "../utils/constants";

const MoviesDescription = () => {
    const [details, setDetails] = useState({});

    const { moviename } = useParams();

    const fetchMovies = async () => {
        try {
            const res = await axios.get(
                `${baseurl}/moviesDescription/${moviename}`,
                {
                    withCredentials: true,
                }
            );

            console.log(res.data);

            setDetails(res.data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [moviename]);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">

                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                    {details.title}
                </h1>

                <div className="space-y-4">

                    <div className="border-b pb-3">
                        <h3 className="font-semibold text-gray-600">
                            Description
                        </h3>
                        <p className="text-gray-800 mt-1">
                            {details.description}
                        </p>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-semibold text-gray-600">
                            Language
                        </span>
                        <span className="text-gray-800">
                            {details.language}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-semibold text-gray-600">
                            Genre
                        </span>
                        <span className="text-gray-800">
                            {details.genre}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-semibold text-gray-600">
                            Duration
                        </span>
                        <span className="text-gray-800">
                            {details.duration}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-semibold text-gray-600">
                            Release Date
                        </span>
                        <span className="text-gray-800">
                            {details.release_date}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-semibold text-gray-600">
                            Ticket Price
                        </span>
                        <span className="text-green-600 font-bold text-lg">
                            ₹{details.price}
                        </span>
                    </div>

                </div>

                <Link to="/seat">
                    <button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold">
                        Book Ticket
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default MoviesDescription;