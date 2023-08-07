import React from 'react'

import { Link, Outlet, useLocation } from "react-router-dom";


const Nothing = () => {
  return (
    <div>
      <div className="bg_blue max-w-[1300px] md:mx-auto  sm:mx-[12px] ">
        <div className="container max-w-[1100px] mx-auto p-[30px] ">
          <div className="text-[#FFFFFF]">
            <Link to={"/"}>
              <p>Главная</p>
            </Link>

            <h2 className=" md:text-[58px] font-bold	leading-[34px] not-italic	sm:text-[20px] mt-[20px]">
              404 - error
            </h2>
            <p className="mt-[30px]">
              Страница с такой названные не существует!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nothing