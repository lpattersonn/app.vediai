import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/scss/main.scss";
import axios from "axios";

export function Signin() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Get all users
  useEffect(() => {
    axios
      .get("https://vediaiapi.herokuapp.com/api/interviewee")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Confirm user and create user session
  const navigate = useNavigate();

  const handleSubmit = (userEmail, userPassword, array) => {
    // 👇️ redirect to /contacts
    // Loop through array
    for (let interviewee of array) {
      // Return true if a user exist witht the same password and email
      if (
        interviewee["email"] == userEmail &&
        interviewee["password"] == userPassword
      ) {
        navigate("/dashboard");
        return;
      } else if (
        interviewee["email"] == userEmail &&
        interviewee["password"] !== userPassword
      ) {
        setError("Error: Incorrect password.");
        return;
      } else {
        setError("Error: No users with the entered email and password exists.");
        return;
      }
    }
  };

  return (
    <section className='signin'>
      <div className='text'>
        <h1>Welcome To Vediai</h1>
        <h2>Sign In To Get Started</h2>
        <p>Enter Your Details to Proceed</p>
      </div>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(email, password, users);
        }}>
        <label className='form__label' for='email'>
          Email{" "}
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>

        <label className='form__label' for='password'>
          Password{" "}
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>

        <div className='form__recover'>
          <label>
            <input type='checkbox' />
            Remember Me
          </label>
          <a className='link' href='/#'>
            <p>Recover Password</p>
          </a>
        </div>

        <input className='btn' type='submit' value='Sign In' />
      </form>
      <div className='error'>
        <p>{error}</p>
      </div>
    </section>
  );
}
