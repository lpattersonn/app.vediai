import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import Dashboard from "../../assets/images/NaveIcons/dashboard.png";
import Messeneger from "../../assets/images/NaveIcons/messenger.png";
import Call from "../../assets/images/NaveIcons/telephone-call.png";
import Presentation from "../../assets/images/NaveIcons/presentation.png";
import Contact from "../../assets/images/NaveIcons/notebook-of-contacts.png";
import Schedule from "../../assets/images/NaveIcons/schedule.png";
import Setting from "../../assets/images/NaveIcons/setting.png";

export function Menu() {
  return (
    <section className='menu'>
      <ul className='menu--nav-icons'>
        <img className='navIcons' src={Dashboard} alt='' />
        <img className='navIcons' src={Messeneger} alt='' />
        <img className='navIcons' src={Call} alt='' />
        <img className='navIcons' src={Presentation} alt='' />
        <img className='navIcons' src={Contact} alt='' />
        <img className='navIcons' src={Schedule} alt='' />
        <img className='navIcons' src={Setting} alt='' />
      </ul>
      <ul className='menu--nav'>
        <Link to='/dashboard'>Dashboard</Link>
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
