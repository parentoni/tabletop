import React, { useState, useEffect } from "react";
import { Base } from "../../../shared/BasePage";
import { Navbar } from "../../../shared/Navbar";
import { TopBar } from "../../../shared/register/TopBar";

type User = {
  name: string;
  email: string;
};

const fetchUserData = async (): Promise<User> => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", email: "john.doe@example.com" });
    }, 1000);
  });
};

const saveUserData = async (user: User): Promise<{ success: boolean }> => {
  // Simulate an API call to save user data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

export const AccountInformation = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserData();
      setUser(userData);
      setName(userData.name);
      setEmail(userData.email);
    };

    getUserData();
  }, []);

  const handleSave = async () => {
    if (user) {
      const updatedUser = { ...user, name, email };
      const response = await saveUserData(updatedUser);
      if (response.success) {
        setUser(updatedUser);
        setIsEditing(false);
        setSuccessMessage("Changes saved successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    }
  };

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <TopBar />
        <div className="p-4 bg-white rounded-lg shadow-md">
          {user ? (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded"
                  readOnly={!isEditing}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded"
                  readOnly={!isEditing}
                />
              </div>
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="w-full p-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full p-2 bg-green-500 text-white rounded"
                >
                  Change Name and Email
                </button>
              )}
              {successMessage && (
                <div className="mt-4 p-2 bg-green-500 text-white rounded">
                  {successMessage}
                </div>
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <Navbar />
      </Base>
    </div>
  );
};