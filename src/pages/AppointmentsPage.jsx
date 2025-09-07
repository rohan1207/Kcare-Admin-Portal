// src/pages/AppointmentsPage.jsx
import React from 'react';
import { Calendar, Plus } from 'react-feather';
import { appointments } from '../data';

export default function AppointmentsPage() {
  // This is a simplified view. A real app would use a calendar library like FullCalendar.
  const today = "2025-09-07"; 

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">My Schedule</h1>
          <p className="mt-2 text-sm text-gray-700">
            Overview of your appointments for today, {today}.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            New Appointment
          </button>
        </div>
      </div>

      {/* Schedule View */}
      <div className="mt-8 bg-white shadow-md rounded-lg">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">Today's Appointments</h2>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <li key={appointment.id} className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-teal-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      <a href="#" className="hover:underline hover:text-teal-600 focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {appointment.patient}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {appointment.type}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{appointment.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="w-full flex justify-center items-center px-4 py-2 border border-teal-300 shadow-sm text-sm font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50"
            >
              View Full Calendar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
