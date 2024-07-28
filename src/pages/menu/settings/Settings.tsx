import React, { useState } from "react";
import { Base } from "../../../shared/BasePage";
import { Navbar } from "../../../shared/Navbar";
import { TopBar } from "../../../shared/register/TopBar";

type UserSettings = {
  notifications: boolean;
  privacy: "public" | "private";
  language: string;
  timeZone: string;
};

const saveSettings = async (settings: UserSettings): Promise<{ success: boolean }> => {
  // Simulate an API call to save settings
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

export const Settings = () => {
  const [settings, setSettings] = useState<UserSettings>({
    notifications: true,
    privacy: "public",
    language: "en",
    timeZone: "UTC",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    const response = await saveSettings(settings);
    if (response.success) {
      setSuccessMessage("Settings saved successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <TopBar />
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Settings</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Notifications</label>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Privacy</label>
            <select
              name="privacy"
              value={settings.privacy}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Language</label>
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time Zone</label>
            <select
              name="timeZone"
              value={settings.timeZone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="UTC">UTC</option>
              <option value="PST">PST</option>
              <option value="EST">EST</option>
              <option value="CST">CST</option>
              <option value="MST">MST</option>
            </select>
          </div>
          <button
            onClick={handleSave}
            className="button button-primary"
          >
            Save Settings
          </button>
          {successMessage && (
            <div className="mt-4 p-2 bg-green-500 text-white rounded">
              {successMessage}
            </div>
          )}
        </div>
        <Navbar />
      </Base>
    </div>
  );
};