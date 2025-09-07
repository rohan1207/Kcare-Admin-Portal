// src/pages/PatientListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, User, Activity, AlertTriangle } from 'react-feather';
import { patients } from '../data';

const getStatusPill = (status) => {
  switch (status) {
    case 'Stable':
      return 'bg-teal-100 text-teal-800';
    case 'Urgent':
      return 'bg-amber-100 text-amber-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const PatientRow = ({ patient }) => (
  <Link
    to={`/patients/${patient.id}`}
    className="block bg-white hover:bg-gray-50 transition-colors duration-200"
  >
    <div className="px-4 py-4 sm:px-6">
      <div className="flex items-center justify-between">
        <div className="truncate">
          <div className="flex items-center text-sm">
            <p className="font-medium text-teal-600 truncate">{patient.name}</p>
            <p className="ml-2 flex-shrink-0 text-gray-500">
              ({patient.age}, {patient.gender.charAt(0)})
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <p className="truncate">{patient.diagnosis}</p>
          </div>
        </div>
        <div className="ml-5 flex-shrink-0 flex items-center">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusPill(patient.status)}`}>
            {patient.status}
          </span>
          <ChevronRight className="ml-4 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  </Link>
);

export default function PatientListPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">My Patients</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all patients currently under your care.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
          >
            Admit New Patient
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <div className="bg-white divide-y divide-gray-200">
                {patients.map((patient) => (
                  <PatientRow key={patient.id} patient={patient} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
