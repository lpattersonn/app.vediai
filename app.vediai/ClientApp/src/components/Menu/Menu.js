import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <section className='menu'>
      <ul className='menu--nav'>
        <Link to='/'>Dashboard</Link>
        <Link to='/'>Messenger</Link>
        <Link to='/'>Calls</Link>
        <Link to='/'>Conference</Link>
        <Link to='/'>Contacts</Link>
        <Link to='/'>Schedule</Link>
        <Link to='/'>Settings</Link>
      </ul>
    </section>
  );
}
