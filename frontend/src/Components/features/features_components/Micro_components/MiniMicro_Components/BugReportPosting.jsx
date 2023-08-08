import React from "react";
import "../../../../css/AlertReportPosting.scss";
import ImageAlert from "../../../../img/alert-red.svg";
import { useDispatch, useSelector } from "react-redux";
import { CheckBugReportPost } from "../../../../Action/CheckAcconutDelete";
import axios from "axios";
import { useNavigate } from "react-router";

function AlertReportPosting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useSelector((state) => state.CheckMyPostReducer);
  async function deletePosting() {
    try {
      await axios
        .delete("http://localhost:5000/delete/user", { withCredentials: true })
        .then(() => {
          navigate("/");
        });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="AlertReportPosting">
      <div className="WrapContainerARP">
        <main className="SquareARP">
          <header className="HeaderARP">
            <div className="imgAlert">
              <img src={ImageAlert} alt="" />
            </div>
            <div className="TextHeaderAlert">
              <p>Are you sure for Report this Posting?</p>
            </div>
          </header>
          <article className="ArticleARP">
            <section className="TextArticleARP">
              <p>
                I agree that this post is intended or contains toxic, bullying,
                harsh words, hoaxes and others. Which can make the public or
                other users consumed by this post. With this I want to file a
                report on this post so that it is deleted
              </p>
            </section>
            <section className="ButtonArticleARP">
              <div className="containerButtonRed">
                <button className="ButtonRedARP" onClick={deletePosting}>
                  Yes, i will Report this posting
                </button>
              </div>
              <div className="containerButtonRegular">
                <button
                  className="ButtonRegularARP"
                  onClick={() => dispatch(CheckBugReportPost(false))}
                >
                  No, i will not Report
                </button>
              </div>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}

export default AlertReportPosting;
