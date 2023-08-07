import React from "react";
import "../18n";
import { useTranslation } from "react-i18next";
import MyTranslation from "../components/MyTanslation";

// IMAGES
import Logo from "../assets/Logo.png";

import { Link, Outlet, useLocation } from "react-router-dom";
import Btn from "../components/Btn";
import DarkMode from "../components/DarkMode";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
// import * as React from 'react';
// import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Layout = () => {
  const { t, i18n } = useTranslation();

  const location = useLocation();
  console.log(location.pathname);

  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Navber */}
      <div className="section1">
        <div className="container max-w-[1100px] mx-auto  sm:px-[20px]">
          <nav className=" dark:bg-slate-800 dark:text-white  mx-auto  py-[26px] flex gap-[20px] items-center justify-between">
            {/* logo */}
            <Link to="/">
              <div className="flex gap-[10px] items-center">
                <div className="w-[40px] md:w-[46px] h-[40px] md:h-[46px]">
                  <img src={Logo} alt="" />
                </div>
                <p className="font-[700] text-[25px] md:text-[29px]">
                  OkeyPost
                </p>
              </div>
            </Link>
            {/* ul */}
            <ul className="lg:flex hidden gap-[16px] items-center text-[14px] font-[600] leading-[16px]">
              <Link
                to="/howToBy"
                style={{ color: pathname == "/howToBy" ? "#01CD7D" : "black" }}
              >
                <li className=" dark:text-white ">{t("nav.l1")}</li>
              </Link>
              <Link
                to="/sales"
                style={{ color: pathname == "/sales" ? "#01CD7D" : "black" }}
              >
                <li className=" dark:text-white ">{t("nav.l2")}</li>
              </Link>
              <Link
                to="/prices"
                style={{ color: pathname == "/prices" ? "#01CD7D" : "black" }}
              >
                <li className=" dark:text-white ">{t("nav.l3")}</li>
              </Link>
              <Link
                to="/help"
                style={{ color: pathname == "/help" ? "#01CD7D" : "black" }}
              >
                <li className=" dark:text-white ">{t("nav.l4")}</li>
              </Link>
              <Link
                to="/bonuses"
                style={{ color: pathname == "/bonuses" ? "#01CD7D" : "black" }}
              >
                <li className=" dark:text-white ">{t("nav.l5")}</li>
              </Link>
              <Link
                to="/blog"
                style={{ color: pathname == "/blog" ? "#01CD7D" : "black" }}
              >
                <li className=" dark:text-white ">{t("nav.l6")}</li>
              </Link>
              <Link
                to="/theShops"
                style={{ color: pathname == "/theShops" ? "#01CD7D" : "black" }}
              >
                <li className=" dark:text-white ">{t("nav.l7")}</li>
              </Link>
            </ul>
            {/* end */}
            <div className="flex items-center gap-[20px]">
              <div className="items-center gap-[42px] hidden xl:flex">
                {/* Out */}
                <div className="flex items-center gap-[11px] text-[15px] font-[600] leading-[16px]">
                  <AiOutlineUser className="text-[25px]"></AiOutlineUser>
                  <p className="cursor-pointer">{t("nav.t1")}</p>
                </div>
                {/* btn */}
                <div>
                  <Btn name={t("nav.btn")}></Btn>
                </div>
              </div>
              {/* Menu */}
              <div className="flex items-center">
                <button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="hover:scale-105"
                >
                  <AiOutlineMenu className="text-[25px]"></AiOutlineMenu>
                </button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {/* ul */}
                  <div className="lg:hidden block">
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/howToBy"
                        style={{
                          color: pathname == "/howToBy" ? "red" : "black",
                        }}
                      >
                        <li className=" dark:text-white ">{t("nav.l1")}</li>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/sales"
                        style={{
                          color: pathname == "/sales" ? "red" : "black",
                        }}
                      >
                        <li className=" dark:text-white ">{t("nav.l2")}</li>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/prices"
                        style={{
                          color: pathname == "/prices" ? "red" : "black",
                        }}
                      >
                        <li className=" dark:text-white ">{t("nav.l3")}</li>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/help"
                        style={{ color: pathname == "/help" ? "red" : "black" }}
                      >
                        <li className=" dark:text-white ">{t("nav.l4")}</li>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/bonuses"
                        style={{
                          color: pathname == "/bonuses" ? "red" : "black",
                        }}
                      >
                        <li className=" dark:text-white ">{t("nav.l5")}</li>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/blog"
                        style={{ color: pathname == "/blog" ? "red" : "black" }}
                      >
                        <li className=" dark:text-white ">{t("nav.l6")}</li>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        to="/theShops"
                        style={{
                          color: pathname == "/theShops" ? "red" : "black",
                        }}
                      >
                        <li className=" dark:text-white ">{t("nav.l7")}</li>
                      </Link>
                    </MenuItem>
                  </div>
                  {/* btns */}
                  <div className="xl:hidden">
                    <MenuItem>
                      <div className="flex items-center gap-[11px] text-[15px] font-[600] leading-[16px]">
                        <AiOutlineUser className="text-[25px]"></AiOutlineUser>
                        <p className="cursor-pointer">{t("nav.t1")}</p>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <Btn name={t("nav.btn")}></Btn>
                    </MenuItem>
                  </div>
                  {/* translate and dark mode */}
                  <div className="flex">
                    <MenuItem>
                      <DarkMode></DarkMode>
                    </MenuItem>
                    <MenuItem>
                      <MyTranslation></MyTranslation>
                    </MenuItem>
                  </div>
                </Menu>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Outlet */}
      <div>
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <div className="section1 py-[20px]">
        <div className="container max-w-[1200px] mx-auto py-[10px] sm:px-[20px]">
          <footer>
            <div className="2xl:px-[60px]  md:mt-[86px] mt-[40px] dark:bg-slate-800 dark:text-white ">
              <div className=" gap-[20px] px-[20px] 2xl:px-[40px] grid lg:grid-cols-4 md:grid-cols-3">
                {/* a */}
                <div className="row-start-1 col-span-3 flex md:justify-center lg:justify-start lg:col-span-1">
                  <div>
                    {/* logo */}
                    <Link to="/">
                      <div className="flex gap-[10px] items-center">
                        <div className="w-[40px] md:w-[46px] h-[40px] md:h-[46px]">
                          <img src={Logo} alt="" />
                        </div>
                        <p className="font-[700] text-[25px]">OkeyPost</p>
                      </div>
                    </Link>
                    {/* icons */}
                    <div className="flex gap-[6px] md:justify-center lg:justify-start md:mt-[34px] mt-[20px]">
                      <div className="md:p-[10px] p-[6px] rounded-full border border-[#0DC143] text-[#0DC143] inline-block">
                        <BsWhatsapp className="md:text-[20px] cursor-pointer"></BsWhatsapp>
                      </div>
                      <div className="md:p-[10px] p-[6px] rounded-full border border-[#675DA9] text-[#675DA9] inline-block">
                        <FaViber className="md:text-[20px] cursor-pointer"></FaViber>
                      </div>
                      <div className="md:p-[10px] p-[6px] rounded-full border border-[#41B7E9] text-[#41B7E9] inline-block">
                        <TbMessage className="md:text-[20px] cursor-pointer"></TbMessage>
                      </div>
                    </div>
                  </div>
                </div>
                {/* b */}
                <ul className="flex flex-col gap-[10px] row-start-2 lg:row-start-1">
                  <li className="font-[700]">{t("footer.ul1.l1")}</li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul1.l2")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul1.l3")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul1.l4")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul1.l5")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul1.l6")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul1.l7")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul1.l8")}
                  </li>
                </ul>
                {/* c */}
                <ul className="flex flex-col gap-[10px] row-start-3 lg:row-start-1 md:row-start-2">
                  <li className="font-[700]">{t("footer.ul2.l1")}</li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul2.l2")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul2.l3")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul2.l4")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul2.l5")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul2.l6")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul2.l7")}
                  </li>
                </ul>
                {/* d */}
                <ul className="flex flex-col gap-[10px] row-start-4 lg:row-start-1 md:row-start-2">
                  <li className="font-[700]">{t("footer.ul3.l1")}</li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul3.l2")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul3.l3")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul3.l4")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul3.l5")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul3.l6")}
                  </li>
                  <li className="cursor-pointer hover:text-[#01CD7D]">
                    {t("footer.ul3.l7")}
                  </li>
                </ul>
              </div>
              <hr className="opacity-70 md:mt-[55p] mt-[30px]" />
              <p className="md:py-[36px] py-[25px] text-center px-[40px] text-[13px] font-[300]">
                {t("footer.bottom")}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
