import React from "react";
import { Outlet } from "react-router-dom";

function LoginTemplate() {
  return (
    <div className="p-8 border-8 border-green-600">
      <Outlet />
    </div>
  );
}

export default LoginTemplate;
