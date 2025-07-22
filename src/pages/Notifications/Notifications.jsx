import React, { useState } from "react";
import BreadCrumb from "../../components/shared/BreadCrumb";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "order",
      title: "A new message has arrived",
      message: "Your order has been shipped",
      time: "8:00am, today",
      read: false,
    },
    {
      id: "2",
      type: "message",
      title: "New comment on your post",
      message: "Sarah liked your recent update",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "3",
      type: "system",
      title: "Account security alert",
      message: "New login from Chrome on Windows",
      time: "Yesterday",
      read: true,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const viewNotification = (id) => {
    markAsRead(id);
    console.log("Viewing notification:", id);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-[#171717]">
      <div className="container mx-auto">
        <div className="container mx-auto flex justify-start items-center">
          <BreadCrumb name="Home" title="Notification" />
        </div>
        <div className="bg-[#3e3e3e] rounded-t-2xl border border-gray-700 p-5 mb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-semibold text-white">Notification</h1>
              {unreadCount > 0 && (
                <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>
            <button
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Mark as Read</span>
            </button>
          </div>
        </div>
        <div className="bg-[#3e3e3e] rounded-b-2xl border-x border-b border-gray-700 divide-y divide-gray-700">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 transition-all duration-200 hover:bg-gray-750 ${
                !notification.read ? "bg-gray-800" : "bg-gray-800/50"
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                {/* <div className="flex-shrink-0 mt-1">{notification.icon}</div> */}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="text-sm text-gray-400">
                          {notification.title}
                        </p>
                        <div className="flex items-center space-x-1 text-gray-500">
                          {/* <Clock className="w-3 h-3" /> */}
                          <span className="text-xs">{notification.time}</span>
                        </div>
                      </div>
                      <p
                        className={`text-sm font-medium ${
                          !notification.read ? "text-blue-400" : "text-gray-300"
                        }`}
                      >
                        {notification.message}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 ml-4">
                      {/* {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )} */}
                      <button
                        onClick={() => viewNotification(notification.id)}
                        className="text-blue-400 hover:text-blue-300 border border-blue-400 hover:border-blue-300 px-3 py-1 rounded text-sm font-medium transition-colors duration-200"
                      >
                        {/* <Eye className="w-4 h-4 inline mr-1" /> */}
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {notifications.length === 0 && (
          <div className="bg-gray-800 rounded-b-2xl border-x border-b border-gray-700 p-12 text-center">
            <div className="text-gray-400">
              {/* <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" /> */}
              <p className="text-lg font-medium mb-2">No notifications</p>
              <p className="text-sm">
                When you receive notifications, they'll appear here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
