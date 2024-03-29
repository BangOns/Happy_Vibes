import React, { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "./features_components/Navbar";
import "../css/Homepage.scss";
import "../css/Comment.scss";
import "../css/myLibrary.scss";
import AsideSearch from "./features_components/AsideSearch";
import FeaturePost_HomePage from "./features_components/Micro_ComponentHomePage/FeaturesPost_HomePage";
import OptionBugReport from "./features_components/Micro_components/MiniMicro_Components/OptionBugReport";
import BugReport from "./features_components/Micro_components/MiniMicro_Components/BugReport";
import { useSelector } from "react-redux";
import CommentComponents from "./features_components/Micro_components/Comment";
import Version from "./features_components/Micro_components/Version";
import AlertDeletePosting from "./features_components/Micro_components/MiniMicro_Components/AlertDeletePosting";
function Homepage() {
  const myComment = useSelector((state) => state.CheckMyPostReducer);
  const myCheck = useSelector((state) => state.CheckDeleteReducer);
  const components = useSelector((state) => state.ComponentImagePostReducer);
  const [getWitdh, setGetWidth] = useState(innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setGetWidth(innerWidth);
    });
  }, [getWitdh]);

  return (
    <Fragment>
      <Navbar />
      <div className="Container-HomePage">
        <div className="WrapContainer-HomePage">
          {getWitdh <= 500 ? (
            <div className="NavbarHomePage">
              <header>
                <h1>HV</h1>
              </header>
              <figure className="featuresChat">
                <img src={components.ImageChat2} alt="" />
              </figure>
            </div>
          ) : null}
          <FeaturePost_HomePage />
        </div>
      </div>
      {myComment.checkImageComment ? <CommentComponents /> : null}
      {myCheck.dltCheckPosting ? <AlertDeletePosting /> : null}
      <OptionBugReport />
      <AsideSearch />
      <Version />
    </Fragment>
  );
}

export default Homepage;
