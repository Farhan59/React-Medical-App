import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './Pages/LoginForm'
import RegistrationForm from './Pages/RegistrationForm'
import DoctorPage from './Pages/DoctorPage'
import PatientPage from './Pages/PatientPage'
import DoctorDiseaseResult from './Pages/DoctorDiseaseResult';
import DoctorAppointmentList from './Pages/DoctorAppointmentList';
import DoctorPatients from './Pages/DoctorPatients';
import DoctorSchedulePlan from './Pages/DoctorSchedulePlan';
import SkinDiseasesDetectionResult from './Pages/SkinDiseasesDetectionResult';
import DoctorList from './Pages/DoctorList';
import MakeAppointment from './Pages/MakeAppointment';
import JoinCall from './Components/Patient/JoinCall/JoinCall';
import StartVideoCall from './Pages/StartVideoCall';
import PatientMessages from './Pages/PatientMessages';
import AdminPage from './Pages/AdminPage';
import LandingPage from './Pages/LandingPage';
import AppointmentDetailsPage from './Pages/AppointmentDetailsPage';
import AppointmentManagementPage from './Pages/AppointmentManagementPage';
import AnalyticsReportsPage from './Pages/AnalyticsReportsPage';
import AuditLogsPage from './Pages/AuditLogsPage';
import BackupRestorePage from './Pages/BackupRestorePage';
import ContentManagementPage from './Pages/ContentManagementPage';
import UserManagementPage from './Pages/UserManagementPage';
import SystemSettingsPage from './Pages/SystemSettingsPage';
import SystemHealthMonitoringPage from './Pages/SystemHealthMonitoringPage';
import SecurityAccessControlPage from './Pages/SecurityAccessControlPage';
import IntegrationManagementPage from './Pages/IntegrationManagementPage';
import FeedbackSupportManagementPage from './Pages/FeedbackSupportManagementPage';
import DrugsPage from './Pages/DrugsPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/DoctorPage" element={<DoctorPage />} />
          <Route path="/PatientPage" element={<PatientPage />} />
          <Route path="/DoctorPatients" element={<DoctorPatients />} />
          <Route path="/DoctorDiseaseResult" element={<DoctorDiseaseResult />} />
          <Route path="/DoctorSchedulePlan" element={<DoctorSchedulePlan />} />
          <Route path="/DoctorAppointmentList" element={<DoctorAppointmentList />} />
          <Route path="/SkinDiseasesDetectionResult" element={<SkinDiseasesDetectionResult />} />
          <Route path="/DoctorList" element={<DoctorList />} />
          <Route path="/MakeAppointment" element={<MakeAppointment />} />
          <Route path="/join-call" element={<JoinCall appointmentTime="2024-07-11T14:00:00Z" appointmentDetails="Appointment with Dr. Smith" />} />
          <Route path="/StartVideoCall" element={<StartVideoCall />} />
          <Route path="/PatientMessages" element={<PatientMessages />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/AppointmentDetailsPage" element={<AppointmentDetailsPage />} />
          <Route path="/AppointmentManagementPage" element={<AppointmentManagementPage />} />
          <Route path="/AnalyticsReportsPage" element={<AnalyticsReportsPage />} />
          <Route path="/AuditLogsPage" element={<AuditLogsPage />} />
          <Route path="/BackupRestorePage" element={<BackupRestorePage />} />
          <Route path="/ContentManagementPage" element={<ContentManagementPage />} />
          <Route path="/UserManagementPage" element={<UserManagementPage />} />
          <Route path="/SystemSettingsPage" element={<SystemSettingsPage />} />
          <Route path="/SystemHealthMonitoringPage" element={<SystemHealthMonitoringPage />} />
          <Route path="/SecurityAccessControlPage" element={<SecurityAccessControlPage />} />
          <Route path="/IntegrationManagementPage" element={<IntegrationManagementPage />} />
          <Route path="/FeedbackSupportManagementPage" element={<FeedbackSupportManagementPage />} />
          <Route path="/DrugsPage" element={<DrugsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
