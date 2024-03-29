import React, { Fragment } from "react";
import Navbar from "./features_components/Navbar";
import AsideSearch from "./features_components/AsideSearch";
import "../css/Notifcations.scss";
import Section_Notification from "./features_components/Micro_ComponentNotifcation/Section_Notification";
import { useSelector } from "react-redux";
import OptionBugReport from "./features_components/Micro_components/MiniMicro_Components/OptionBugReport";
import Version from "./features_components/Micro_components/Version";
import { useNavigate } from "react-router";

function Notifications() {
  const components = useSelector((state) => state.ComponentImagePostReducer);
  const navigate = useNavigate();
  return (
    <Fragment>
      <Navbar />
      <div className="ContainerNotifications">
        <div className="wrapNotifications">
          <header className="header-Notifications">
            <figure className="buttonBackNotifications">
              <img
                src={components.ImageBack}
                alt=""
                onClick={() => navigate("/homepage")}
                style={{ cursor: "pointer" }}
              />
            </figure>
            <div className="NameNotifications">
              <h1>Notifications</h1>
            </div>
          </header>
          <main className="main-Notifications">
            <Section_Notification />
          </main>
        </div>
      </div>
      <OptionBugReport />
      <AsideSearch />
      <Version />
    </Fragment>
  );
}

export default Notifications;
