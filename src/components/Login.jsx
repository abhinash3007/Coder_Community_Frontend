import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signUp",
        {
          firstName,
          lastName,
          email,
          password,
        },
        { withCredentials: true }
      );
      //  console.log("API Response:", res.data);
      dispatch(addUser(res.data.data));
      return navigate("/profile");
      setIsLoginForm(false);
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      //  console.log("API Response:", res.data);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body ">
          <h2 className="card-title justify-center">
            {isLoginForm ? "SignUp" : "Login!"}
          </h2>
          {isLoginForm && (
            <>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  value={firstName}
                  className="input"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  value={lastName}
                  className="input"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
            </>
          )}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">EmailID</legend>
            <input
              type="text"
              value={email}
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              value={password}
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-primary" onClick={ isLoginForm ? handleSignUp : handleLogin}>
              {isLoginForm ?"Sign Up" : "Login"}
            </button>
          </div>
          <p
            className="text-red-500 cursor-pointer m-auto"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "Already have an account? Login Here" : "New user? Please Sign Up here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
