import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";

const UserDetail = () => {
  const param = useParams();
  const [User, setUser] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = () => {
    axios
      .get(`https://reqres.in/api/users/${param.id}`)
      .then((respon) => {
        setUser(respon.data.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.respons.data);
      });
  };
  return (
    <>
      {<Navbar />}
      <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-indigo-600">
        <div className="w-96 p-6 shadow-lg bg-white">
          <img src={User.avatar} alt="" className="rounded-full w-full" />
          <br />
          <h1>First Name : {User.first_name}</h1>
          <h1>Last Name : {User.last_name}</h1>
          <h1>Email : {User.email}</h1>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default UserDetail;
