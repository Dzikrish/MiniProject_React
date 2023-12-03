import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";

function ListUser() {
  const [listUser, setListUser] = useState([]);
  const [paging, setPaging] = useState({
    currentPage: 1,
    previousPage: 0,
    nextPage: 2,
    maxPage: 5,
  });

  useEffect(() => {
    ListUsers();
  }, [paging.currentPage]);

  const ListUsers = () => {
    axios
      .get(`https://reqres.in/api/users?page=${paging.currentPage}`)
      .then((res) => {
        setListUser(res.data.data);
        setPaging({
          currentPage: res.data.page,
          previousPage: res.data.page - 1,
          nextPage: res.data.page + 1,
          maxPage: res.data.total_pages,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNext = () => {
    setPaging({
      ...paging,
      currentPage: paging.currentPage + 1,
    });
  };

  const handleBack = () => {
    setPaging({
      ...paging,
      currentPage: paging.currentPage - 1,
    });
  };

  return (
    <>
      {<Navbar />}
      <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-indigo-600">
        <h1 className="text-6xl font-semibold text-center pt-10 pb-10 text-white">Our User</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {listUser.map((item) => (
            <Link to={`/UserDetail/${item.id}`} className="w-full md:w-1/3 xl:w-1/4 p-5  rounded_lg bg-white rounded-md hover:bg-slate-400">
              <button className="w-full">
                <h3 className="font-semibold text-center text-2xl pt-6">{item.first_name}</h3>
                <br />
                <img src={item.avatar} alt="image" className="rounded-xl w-full " />
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className=" block mx-auto justify-center bg-indigo-950 text-white gap-5 bottom-0 left-0 right-0">
        <ul className="flex justify-between px-8 py-6">
          <li>
            <button onClick={handleBack} disabled={!paging.previousPage} className="">
              Back
            </button>
          </li>
          <li>
            <h4>{paging.currentPage}</h4>
          </li>
          <li>
            <button onClick={handleNext} disabled={paging.nextPage > paging.maxPage}>
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ListUser;
