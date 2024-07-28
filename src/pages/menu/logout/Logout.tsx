import React from "react";
import { useNavigate } from "react-router-dom";
import { Base } from "../../../shared/BasePage";
import { Navbar } from "../../../shared/Navbar";

const logout = async (): Promise<{ success: boolean }> => {
  // Simulate an API call to log out
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await logout();
    if (response.success) {
      navigate("/login");
    }
  };

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
          <p className="mb-4">Are you sure you want to log out?</p>
          <button
            onClick={handleLogout}
            className="button button-primary"
          >
            Confirm Logout
          </button>
        </div>
        <Navbar />
      </Base>
    </div>
  );
};