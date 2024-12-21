import React, { useState } from "react";

const Settings = ({ tabsData, onSave, onClose, isDarkMode }) => {
  const [updatedTabs, setUpdatedTabs] = useState([...tabsData]);

  const handleChange = (index, field, value) => {
    const newTabs = [...updatedTabs];
    newTabs[index][field] = value;
    setUpdatedTabs(newTabs);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
    >
      <div
        className={`p-6 rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        {updatedTabs.map((tab, index) => (
          <div key={tab.value} className="mb-4">
            <label className="block text-sm font-medium">
              {tab.label} Duration
            </label>
            <input
              type="text"
              value={tab.duration}
              onChange={(e) =>
                handleChange(index, "duration", e.target.value)
              }
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
        ))}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-400 text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(updatedTabs)}
            className="px-4 py-2 rounded bg-blue-500 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
