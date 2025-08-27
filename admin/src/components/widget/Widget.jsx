import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import useFetch from "../../hooks/useFetch";

const Widget = ({ type }) => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=sonipat,karnal,panipat");
  const [userCount, setUserCount] = useState(0);
  const [loadingUserCount, setLoadingUserCount] = useState(true);
  let dataInfo;

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT_FOR_USERS');
        const result = await response.json();
        setUserCount(result.count);
      } catch (error) {
        console.error("Error fetching user count:", error);
      } finally {
        setLoadingUserCount(false);
      }
    };

    fetchUserCount();
  }, []);

  switch (type) {
    case "user":
      dataInfo = {
        title: "USERS",
        isMoney: false,
        link: (
          <Link to=""> View All Users</Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      dataInfo = {
        title: "Sonipat",
        isMoney: false,
        link: (
          <Link to="/properties/Sonipat">View Sonipat properties</Link>
        ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        )
      };
      break;
    case "earning":
      dataInfo = {
        title: "Karnal",
        isMoney: true,
        link: (
          <Link to="/properties/karnal">View Karnal properties</Link>
        ),
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      dataInfo = {
        title: "Panipat",
        isMoney: true,
        link: (
          <Link to="/properties/panipat">See Panipat properties</Link>
        ),
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  const propertyCount = dataInfo.title === "Karnal" ? data[0] :
                         dataInfo.title === "Sonipat" ? data[1] :  
                        dataInfo.title === "Panipat" ? data[2] : 
                        0;

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{dataInfo.title}</span>
        <span className="counter">
          {dataInfo.title === "USERS" ? userCount : propertyCount} properties
        </span>
        <span className="link">{dataInfo.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {20} %
        </div>
        {dataInfo.icon}
      </div>
    </div>
  );
};

export default Widget;