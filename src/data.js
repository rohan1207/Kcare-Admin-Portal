// src/data.js

import { CheckCircle, AlertTriangle, Clock } from 'react-feather';

export const patients = [
  {
    id: 'PAT001',
    name: 'Aarav Sharma',
    age: 45,
    gender: 'Male',
    ward: 'A-101',
    diagnosis: 'Post-operative Care (Appendectomy)',
    status: 'Stable',
    admissionDate: '2025-09-05',
    doctor: 'Dr. Pramod Kadam',
    tasks: [
      { id: 1, text: 'Review post-op vitals', status: 'completed' },
      { id: 2, text: 'Check incision site', status: 'pending' },
    ],
    vitals: {
      bp: '120/80 mmHg',
      pulse: '72 bpm',
      temp: '98.6°F',
    },
    timeline: [
        { stage: 'Admission', date: '2025-09-05', status: 'completed' },
        { stage: 'Surgery', date: '2025-09-05', status: 'completed' },
        { stage: 'Post-Op', date: '2025-09-06', status: 'active' },
        { stage: 'Recovery', date: '2025-09-07', status: 'pending' },
        { stage: 'Discharge', date: '2025-09-08', status: 'pending' },
    ],
  },
  {
    id: 'PAT002',
    name: 'Priya Patel',
    age: 62,
    gender: 'Female',
    ward: 'B-204',
    diagnosis: 'Cardiac Monitoring',
    status: 'Urgent',
    admissionDate: '2025-09-06',
    doctor: 'Dr. Pramod Kadam',
    tasks: [
      { id: 1, text: 'Analyze ECG report', status: 'pending' },
      { id: 2, text: 'Adjust medication', status: 'pending' },
    ],
    vitals: {
      bp: '150/95 mmHg',
      pulse: '95 bpm',
      temp: '99.1°F',
    },
    timeline: [
        { stage: 'Admission', date: '2025-09-06', status: 'completed' },
        { stage: 'Diagnosis', date: '2025-09-06', status: 'active' },
        { stage: 'Treatment Plan', date: '2025-09-07', status: 'pending' },
        { stage: 'Recovery', date: '2025-09-09', status: 'pending' },
        { stage: 'Discharge', date: '2025-09-12', status: 'pending' },
    ],
  },
  {
    id: 'PAT003',
    name: 'Rohan Joshi',
    age: 34,
    gender: 'Male',
    ward: 'C-302',
    diagnosis: 'Diabetic Foot Ulcer',
    status: 'Stable',
    admissionDate: '2025-09-04',
    doctor: 'Dr. Pramod Kadam',
    tasks: [
      { id: 1, text: 'Daily wound dressing', status: 'completed' },
      { id: 2, text: 'Monitor blood sugar', status: 'completed' },
    ],
    vitals: {
      bp: '130/85 mmHg',
      pulse: '80 bpm',
      temp: '98.7°F',
    },
    timeline: [
        { stage: 'Admission', date: '2025-09-04', status: 'completed' },
        { stage: 'Diagnosis', date: '2025-09-04', status: 'completed' },
        { stage: 'Treatment Plan', date: '2025-09-05', status: 'completed' },
        { stage: 'Recovery', date: '2025-09-06', status: 'active' },
        { stage: 'Discharge', date: '2025-09-10', status: 'pending' },
    ],
  },
  {
    id: 'PAT004',
    name: 'Ananya Reddy',
    age: 28,
    gender: 'Female',
    ward: 'A-102',
    diagnosis: 'Pre-operative Assessment (Gallbladder)',
    status: 'Stable',
    admissionDate: '2025-09-07',
    doctor: 'Dr. Pramod Kadam',
    tasks: [
      { id: 1, text: 'Review ultrasound report', status: 'pending' },
      { id: 2, text: 'Finalize surgery schedule', status: 'pending' },
    ],
    vitals: {
      bp: '110/70 mmHg',
      pulse: '68 bpm',
      temp: '98.5°F',
    },
    timeline: [
        { stage: 'Admission', date: '2025-09-07', status: 'completed' },
        { stage: 'Diagnosis', date: '2025-09-07', status: 'active' },
        { stage: 'Surgery', date: '2025-09-08', status: 'pending' },
        { stage: 'Post-Op', date: '2025-09-09', status: 'pending' },
        { stage: 'Discharge', date: '2025-09-11', status: 'pending' },
    ],
  },
];

export const appointments = [
    { id: 1, time: '09:00 AM', patient: 'Vikram Singh', type: 'Follow-up' },
    { id: 2, time: '10:30 AM', patient: 'Sunita Gupta', type: 'New Consultation' },
    { id: 3, time: '02:00 PM', patient: 'Rohan Joshi', type: 'Ward Round' },
];

export const tasks = [
    { id: 1, text: 'Review Priya Patel\'s ECG report', status: 'Urgent', icon: AlertTriangle },
    { id: 2, text: 'Sign discharge papers for Aarav Sharma', status: 'Pending', icon: Clock },
    { id: 3, text: 'Check evening vitals for all assigned patients', status: 'Completed', icon: CheckCircle },
];
