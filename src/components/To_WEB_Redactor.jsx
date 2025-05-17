import { useState } from "react";
import { Link } from "react-router-dom";

export default function To_WEB_Redactor() {
  const [isShow, setIsShow] = useState(false);

  const handleOnMouseEnter = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleOnMouseEnter}
      style={{
        width: "32px",
        position: "fixed",
        bottom: "5px",
        right: "5px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: "#ffffff",
        border: "none",
        cursor: "pointer",
      }}
    >
      <Link
        to={`https://web-redactor.vercel.app/`}
        target="_blank"
        style={{
          position: "fixed",
          border: "1px solid #FFA500",
          padding: "4px 8px",

          bottom: "30px",
          right: isShow ? "30px" : "-100%",
          zIndex: "10",
          color: "#FFFFFF",
          fontWeight: "600",
          borderRadius: "6px 6px 0 6px",
          backgroundColor: "#FFA500",
        }}
      >
        <p>Web редактор</p>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WR"
        role="img"
        viewBox="0 0 512 512"
        width="32px"
        height="32px"
      >
        <g>
          <rect width="512" height="512" rx="15%" fill="none"></rect>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="200"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fill="#FFA500"
          >
            WR
          </text>
        </g>
      </svg>
    </button>
  );
}
