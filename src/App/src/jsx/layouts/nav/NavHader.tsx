/// React router dom
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

const NavHader = () => {
  const { openMenuToggle, setOpenMenuToggle } = useContext(ThemeContext);
  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        <svg
          className="logo-abbr"
          width="40"
          height="40"
          viewBox="0 0 48 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="3" width="48" height="48" rx="16" fill="#FB7D5B" />
          <text
            x="46%"
            y="58%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="36"
            fontFamily="Arial"
            fill="white"
          >
            T
          </text>
        </svg>

        <div className="brand-title">
          <svg
            width="140"
            height="30"
            viewBox="0 0 140 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="62%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="40"
              fontFamily="Poppins, sans-serif"
              fill="white"
              fontWeight="bold"
            >
              TRIO
            </text>
          </svg>

        </div>
      </Link>

      <div
        className="nav-control"
        onClick={() => {          
          setOpenMenuToggle(!openMenuToggle);
        }}
      >
        
        <div className={`hamburger ${openMenuToggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="22" y="11" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="11" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="22" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="11" y="11" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="11" y="22" width="4" height="4" rx="2" fill="#2A353A" />
            <rect width="4" height="4" rx="2" fill="#2A353A" />
            <rect y="11" width="4" height="4" rx="2" fill="#2A353A" />
            <rect x="22" y="22" width="4" height="4" rx="2" fill="#2A353A" />
            <rect y="22" width="4" height="4" rx="2" fill="#2A353A" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
