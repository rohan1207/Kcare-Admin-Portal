// src/pages/PatientDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { patients } from '../data';
import ArrowLeft from 'react-feather/dist/icons/arrow-left';
import CheckCircle from 'react-feather/dist/icons/check-circle';
import Clock from 'react-feather/dist/icons/clock';
import Edit from 'react-feather/dist/icons/edit';
import MessageSquare from 'react-feather/dist/icons/message-square';

const TimelineItem = ({ item, isLast }) => {
    const getStatusClasses = () => {
        switch (item.status) {
            case 'completed':
                return {
                    bg: 'bg-teal-500',
                    icon: <CheckCircle className="w-4 h-4 text-white" />,
                };
            case 'active':
                return {
                    bg: 'bg-amber-500 ring-4 ring-amber-200',
                    icon: <div className="w-2 h-2 bg-white rounded-full" />,
                };
            default: // pending
                return {
                    bg: 'bg-gray-300',
                    icon: <Clock className="w-4 h-4 text-white" />,
                };
        }
    };

    const { bg, icon } = getStatusClasses();

    return (
        <li>
            <div className="relative pb-8">
                {!isLast && <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />}
                <div className="relative flex space-x-3">
                    <div>
                        <span className={`h-8 w-8 rounded-full ${bg} flex items-center justify-center`}>
                            {icon}
                        </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                            <p className="text-sm text-gray-500">{item.stage}</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime={item.date}>{item.date}</time>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};


export default function PatientDetailPage() {
    const { id } = useParams();
    const patient = patients.find(p => p.id === id);

    if (!patient) {
        return <div>Patient not found</div>;
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <Link to="/patients" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Patient List
                </Link>
                <div className="mt-4 md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">{patient.name}</h1>
                        <p className="mt-1 text-sm text-gray-500">ID: {patient.id} | Ward: {patient.ward}</p>
                    </div>
                    <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                        <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <Edit className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                            Edit Profile
                        </button>
                        <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700">
                            <MessageSquare className="-ml-1 mr-2 h-5 w-5" />
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Details & Vitals */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Patient Info Card */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Patient Details</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div><span className="font-medium text-gray-500">Age:</span> {patient.age}</div>
                            <div><span className="font-medium text-gray-500">Gender:</span> {patient.gender}</div>
                            <div><span className="font-medium text-gray-500">Admission:</span> {patient.admissionDate}</div>
                            <div><span className="font-medium text-gray-500">Doctor:</span> {patient.doctor}</div>
                            <div className="col-span-2"><span className="font-medium text-gray-500">Diagnosis:</span> {patient.diagnosis}</div>
                        </div>
                    </div>

                    {/* Vitals Card */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Vitals</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-sm text-gray-500">Blood Pressure</p>
                                <p className="text-2xl font-semibold text-gray-800">{patient.vitals.bp}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Heart Rate</p>
                                <p className="text-2xl font-semibold text-gray-800">{patient.vitals.pulse}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Temperature</p>
                                <p className="text-2xl font-semibold text-gray-800">{patient.vitals.temp}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Treatment Timeline */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Treatment Journey</h3>
                    <ul>
                        {patient.timeline.map((item, index) => (
                            <TimelineItem key={item.stage} item={item} isLast={index === patient.timeline.length - 1} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
