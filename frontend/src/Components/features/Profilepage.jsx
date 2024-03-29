import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./features_components/Navbar";
import AsideSearch from "./features_components/AsideSearch";
import "../css/ProfilePage.scss";
import "../css/Posting_ProfilePage.scss";
import HeaderPageProfile from "./features_components/Micro_Components_ProfilePge.jsx/HeaderPageProfile";
import MainPageProfile from "./features_components/Micro_Components_ProfilePge.jsx/MainPageProfile";
import Navigation_ProfilePage from "./features_components/Micro_Components_ProfilePge.jsx/Navigation_ProfilePage";
import FeaturePost_ProfilePageUser from "./features_components/Micro_Components_ProfilePge.jsx/FeaturePost_ProfilePageUser";

import OptionBugReport from "./features_components/Micro_components/MiniMicro_Components/OptionBugReport";
import CommentComponents from "./features_components/Micro_components/Comment";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Version from "./features_components/Micro_components/Version";
import BugReportPosting from "./features_components/Micro_components/MiniMicro_Components/BugReportPosting";

function Profilepage() {
  const { id } = useParams();
  const myComment = useSelector((state) => state.CheckMyPostReducer);
  const checkReport = useSelector((state) => state.CheckDeleteReducer);

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  async function getDataUser() {
    try {
      axios
        .get(`http://localhost:5000/get/user/${id}`, { withCredentials: true })
        .then(({ data }) => {
          setUser(data.result);
        })
        .catch(({ response }) => {
          const { status } = response.data;
          if (status === 403) {
            navigate("/profile/user");
          }
        });
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getDataUser();
  }, [user.id, setUser]);
  return (
    <Fragment>
      <Navbar />
      <div className="Container-ProfilePage">
        <div className="WrapContainer-ProfilePage">
          <HeaderPageProfile userName={user.username} />
          <MainPageProfile user={user} />
          <Navigation_ProfilePage />
          <FeaturePost_ProfilePageUser userId={user.id} />
        </div>
      </div>
      {myComment.checkImageComment ? <CommentComponents /> : null}
      {checkReport.CheckBugReportPosting ? <BugReportPosting /> : null}

      <OptionBugReport />
      <AsideSearch />
      <Version />
    </Fragment>
  );
}

export default Profilepage;
