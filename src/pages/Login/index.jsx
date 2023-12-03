import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess("");
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
    setSuccess("");
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const bodyPayload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/login", bodyPayload)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("accessToken", token);
        setSuccess("Berhasil");
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-600">
        <div className="w-96 p-6 shadow-lg bg-white">
          <h1 className="text-3xl block text-center font-semibold">
            <i className="fa-solid fa-user"></i> Login
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Email
            </label>
            <input type="text" id="email" onChange={onChangeEmail} className="border w-full text-base px-2 py-1 focus:ring-0 shadow-sm bg-gray-50 border-gray-300" placeholder="Enter Email" />
          </div>
          <div className="mt-3">
            <label htmlFor="Password" className="block text-base mb-2">
              Password
            </label>
            <div className="flex justify-between items-center shadow-sm bg-gray-50 border border-gray-300 w-full">
              <input type={visible ? "text" : "password"} id="Password" onChange={onChangePassword} className="text-base px-2 py-1 focus:ring-0 focus:border-gray-600 w-[300px]" placeholder="Enter Password" />
              <div className="p-2" onClick={() => setVisible(!visible)}>
                {visible ? <i class="fa-regular fa-eye" /> : <i class="fa-regular fa-eye-slash" />}
              </div>
            </div>
          </div>
          <div className="mt-3 mx-1 flex">
            Belum memiliki akun ?
            <a href="/Registrasi" className="text-indigo-800 font-semibold px-1">
              Buat Akun
            </a>
          </div>
          <div className="mt-5">
            <button disabled={loading ? true : false} onClick={onSubmit} className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full">
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </div>
      {/* alert */}
      {error.length ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-0 right-0">
          <strong>Username atau Password tidak benar</strong>
        </div>
      ) : null}
      {success.length ? (
        <div className="bg-teal-100 border border-teal-400 text-teal-700 px-4 py-3 rounded fixed top-0 right-0">
          <strong>Login Berhasil</strong>
        </div>
      ) : null}
    </>
  );
}

export default Login;
