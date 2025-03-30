import React from "react";
import AlertClock from "./AlertClock";

const App = () => {
  const showAlertWithTime = () => {
    alert(`Current Time: ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <AlertClock onClick={showAlertWithTime} />
    </div>
  );
};

export default App;
