import React from "react";
import "./Dashboard.css";
import { Menu } from "../Menu/Menu.js";
import DashboardPic from "../../assets/images/Illustration.svg";

export function Dashboard() {
  return (
    <section className='dashboard'>
      <Menu />
      <div className='dashboard-main'>
        <div className='dashboard-main--nav'></div>
        <div className='dashboard-main--body'>
          <div className='dashboard-main--body-profile'></div>
          <div className='dashboard-main--body-profile-second grid grid-one'>
            <div className='dashboard-main--body-profile-second-banner'>
              <div className='dashboard-main--body-profile-second-banner-text'>
                <h2>Your teammates are online</h2>
                <label>
                  Schedule your call, conference meeting or start a new chats
                  with a welcome message
                </label>
              </div>
              <div className='dashboard-main--body-profile-second-banner-image'>
                <img className='bannerImage' src={DashboardPic} alt='' />
              </div>
            </div>
            <div className='dashboard-main--body-profile-second-body grid grid-two grid-m'>
              <div className='dashboard-main--body-profile-second-body-events'>
                <div className='events--text'>
                  <p>
                    <strong>Upcoming events</strong>
                  </p>

                  <label>Scheduled meetings and calls</label>
                </div>
              </div>
              <div className='dashboard-main--body-profile-second-body-actions'>
                <div className='dashboard-main--body-profile-second-body-actions-quick-actions'>
                  <div className='quick-actions--text'>
                    <p>
                      <strong>Quick actions </strong>
                    </p>

                    <label>Plan a meeting or start a call</label>
                  </div>
                  <div className='quick-actions--sections grid grid-two grid-s'>
                    <div className='quick-actions--sections-action'>
                      <a href='/#'> Start a conference call</a>
                    </div>
                    <div className='quick-actions--sections-action'>
                      <a href='/#'> Add new contact</a>
                    </div>
                    <div className='quick-actions--sections-action'>
                      <a href='/#'> Send private message</a>
                    </div>
                    <div className='quick-actions--sections-action'>
                      <a href='/#'> Launch screenshare</a>
                    </div>
                  </div>
                </div>
                <div className='dashboard-main--body-profile-second-body-actions-top-users'>
                  <div className='top-users--text'>
                    <p>
                      <strong>Top users</strong>
                    </p>

                    <label>Week to week performance</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
