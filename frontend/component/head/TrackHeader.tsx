"use client";

import Image from "next/image";
import {
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react";

const TrackHeader = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6 lg:px-8">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>

        {/* Page Title */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Track Bus
          </h2>

          <p className="text-sm text-gray-500">
            Live tracking of buses in real-time
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-600 hover:text-black" />

          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="flex cursor-pointer items-center gap-3">
          <Image
            src="/user.jpg"
            alt="User"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />

          <div className="hidden text-sm sm:block">
            <p>
              <span className="text-gray-500">Hi, </span>
              <span className="font-semibold text-gray-900">
                Pratik
              </span>
            </p>
          </div>

          <ChevronDown className="hidden h-4 w-4 text-gray-500 sm:block" />
        </div>
      </div>
    </header>
  );
};

export default TrackHeader;