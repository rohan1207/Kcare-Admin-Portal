// src/pages/DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, AlertTriangle, Clock, CheckCircle, ArrowRight } from 'react-feather';
import { patients, appointments, tasks } from '../data';

const StatCard = ({ title, value, icon, color, link }) => (
    <Link to={link} className={`block p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 ${color}`}>
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-white/90 uppercase">{title}</p>
                <p className="text-3xl font-bold text-white">{value}</p>
            </div>
            <div className="text-white/70">{icon}</div>
        </div>
    </Link>
);

const TaskItem = ({ task }) => {
    const Icon = task.icon;
    const statusColor = task.status === 'Urgent' ? 'text-red-500' : 'text-gray-500';
    return (
        <li className="flex items-center justify-between py-3">
            <div className="flex items-center">
                <Icon className={`w-5 h-5 mr-3 ${statusColor}`} />
                <p className={`text-sm ${task.status === 'Completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>{task.text}</p>
            </div>
            <span className={`text-xs font-semibold ${statusColor}`}>{task.status}</span>
        </li>
    );
};

export default function DashboardPage() {
    const urgentCases = patients.filter(p => p.status === 'Urgent').length;

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
                <p className="mt-1 text-sm text-gray-600">Welcome back, Dr. Pramod Kadam. Here’s your summary for today.</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard
                    title="Today's Appointments"
                    value={appointments.length}
                    icon={<Calendar size={32} />}
                    color="bg-gradient-to-br from-teal-500 to-teal-600"
                    link="/schedule"
                />
                <StatCard
                    title="Admitted Patients"
                    value={patients.length}
                    icon={<Users size={32} />}
                    color="bg-gradient-to-br from-amber-500 to-amber-600"
                    link="/patients"
                />
                <StatCard
                    title="Urgent Cases"
                    value={urgentCases}
                    icon={<AlertTriangle size={32} />}
                    color="bg-gradient-to-br from-teal-600 to-teal-700"
                    link="/patients"
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Schedule & Tasks */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Today's Schedule */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Today's Schedule</h3>
                        <ul className="divide-y divide-gray-200">
                            {appointments.map(appt => (
                                <li key={appt.id} className="py-3 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{appt.patient}</p>
                                        <p className="text-sm text-gray-500">{appt.type}</p>
                                    </div>
                                    <div className="text-sm font-semibold text-teal-600">{appt.time}</div>
                                </li>
                            ))}
                        </ul>
                        <Link to="/schedule" className="mt-4 inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800">
                            View Full Schedule <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    {/* My Tasks */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">My Tasks</h3>
                        <ul className="divide-y divide-gray-200">
                            {tasks.map(task => <TaskItem key={task.id} task={task} />)}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Patient List Preview */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Patient Overview</h3>
                    <ul className="divide-y divide-gray-200">
                        {patients.slice(0, 5).map(patient => (
                            <li key={patient.id} className="py-3">
                                <Link to={`/patients/${patient.id}`} className="flex items-center justify-between group">
                                    <div>
                                        <p className="text-sm font-medium text-gray-800 group-hover:text-teal-600">{patient.name}</p>
                                        <p className="text-sm text-gray-500">Ward: {patient.ward}</p>
                                    </div>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.status === 'Urgent' ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'}`}>
                                        {patient.status}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/patients" className="mt-4 inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800">
                        View All Patients <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
