import React from "react";

const AlertClock = ({ onClick }) => {
  return (
    <button onClick={onClick} className="p-2 bg-blue-500 text-white rounded">
      Show Time
    </button>
  );
};

export default AlertClock;
