import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ImageBack from "../img/vector-back.png";
import "../css/myLibrary.scss";
import "../css/ForgotPassword.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [getWitdh, setGetWidth] = useState(innerWidth);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setGetWidth(innerWidth);
    });
  }, [getWitdh]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.patch('http://localhost:5000/forgot-pass/get_email', {email: email})
    .then(({data}) => {console.log(data); alert("check email")})
    .catch((err) =>{console.error(err)})
  }
  return (
    <div className="ContainerEmailForgotPassword">
      <div className="ContainerEmailForgotPassword-wrap1">
        <div className="ContainerEmailForgotPassword-wrap2">
          <header className="judulEmailForgotPassword">
            <div className="backEmailForgotPassword">
              <Link to={"/"}>
                <img src={ImageBack} alt="" />
              </Link>
            </div>
            <h1>Forgot Password</h1>
          </header>
          <main className="mainEmailForgotPassword">
            <form className="formEmailForgotPassword">
              <div className="ResendEmailForgotPassword">
                <header>
                  <h2>Enter Email</h2>
                </header>
                <div className="titleResendEmail">
                  <article>
                    <p>Enter your registered email for checking</p>
                  </article>
                </div>
              </div>
              <div className="kolomInputEmailForgotPassword ">
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  className="emailCheck"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="CheckMessage ">
                <article>
                  <p>Your email is not existed</p>
                </article>
              </div>

              <div className="submitEmailForgotPassword">
                <button
                  className="ButtonSubmitEmailForgotPassword"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
