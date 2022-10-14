import React from "react";

const TabItem = ({ label, content }) => {
  return (
    <div className="grid grid-cols-3 shadow-md my-3">
      <p className="font-bold text-lg">{label}</p>
      <p className="col-span-2 text-lg">{content}</p>
    </div>
  );
};

export default TabItem;
