import React from "react";
import "./Dashboard.css";

export function Dashboard() {
  return (
    <section className='dashboard'>
      <div className='dashboard-main'>
        <div className='dashboard-main--nav'></div>
        <div className='dashboard-main--body'>
          <div className='dashboard-main--body-profile'></div>
          <div className='dashboard-main--body-profile-second'>
            <div className='dashboard-main--body-profile-second-banner'>
              <div className='dashboard-main--body-profile-second-banner-text'>
                <h2>Your teammates are online</h2>
                <p>
                  Schedule your call, conference meeting or start a new chats
                  with a welcome message
                </p>
              </div>
              <div className='dashboard-main--body-profile-second-banner-image'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
