import React from "react";
import "../assets/scss/main.scss";

export function Signin() {
    return (
        <section className='signin'>
            <div className='text'>
                <h1>Welcome To Vediai</h1>
                <h2>Sign In To Get Started</h2>
                <p>Enter Your Details to Proceed</p>
            </div>
            <form className='form'>
                <label className='form__label' for='email'>
                    Email <input type='email' name='email' required />
                </label>

                <label className='form__label' for='password'>
                    Password <input type='text' name='password' required />
                </label>

                <div className='form__recover'>
                    <label>
                        <input type='checkbox' />
            Remember Me
          </label>
          <a className='link' href='#'>
                        <p>Recover Password</p>
                    </a>
                </div>

                <input className='btn' type='submit' value='Sign In' />
            </form>
        </section>
    );
}
