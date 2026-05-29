import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { baseurl } from "../utils/constants.js"
const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const backendurl = "http://localhost:5000";
    console.log(import.meta.env);

    console.log(baseurl);

    const dispatch = useDispatch();
    const handleLogin = async () => {

        try {

            const res = await axios.post(
                `${baseurl}/login`,
                {
                    email,
                    password
                },
                {
                    withCredentials: true
                }
            );

            console.log(res.data);
            console.log(res.data.user.name);

            dispatch(setUser(res.data.user));
            alert("Login successful");
            navigate("/movies");


        } catch (error) {

            console.log(error);

            alert(error.response.data.message);
        }
    };

    const handleRegister = async () => {

        try {

            const res = await axios.post(
                `${baseurl}/register`,
                {
                    name,
                    email,
                    password
                },
                {
                    withCredentials: true
                }
            );

            console.log(res.data);

            alert("Registration successful");

            setIsLogin(true);
            navigate("/movies");

        } catch (error) {

            console.log(error);

            alert("Registration error");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">

                <h1 className="text-3xl font-bold text-center mb-6">
                    {isLogin ? "Login" : "Register"}
                </h1>

                <div className="flex flex-col gap-4">

                    {
                        !isLogin && (
                            <input
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border p-3 rounded-lg outline-none"
                            />
                        )
                    }

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-3 rounded-lg outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-3 rounded-lg outline-none"
                    />

                    <button
                        onClick={isLogin ? handleLogin : handleRegister}
                        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>

                    <p className="text-center">

                        {
                            isLogin
                                ? "Don't have an account?"
                                : "Already have an account?"
                        }

                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-500 cursor-pointer ml-2"
                        >
                            {isLogin ? "Register" : "Login"}
                        </span>

                    </p>

                </div>

            </div>

        </div>
    );
};

export default Login;