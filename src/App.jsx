import React from "react";
import Home from "./home/Home";
import Aboutus from "./about/Aboutus";
import AllProjects from "./pages/AllProjects";
import { Route, Routes } from "react-router-dom";
import ProjectSectorial from "./projectsectorial/ProjectSectorial";
import DesignConsultingService from "./servicedesginandconsulting/DesignConsultingService";
import InstallationCommisioningService from "./serviceinstallationandcommisioning/InstallationCommisioningService";
import PanelBoardControlSystem from "./servicepanelboardcontrolsystem/PanelBoardControlSystem";
import ApprovalComplianceService from "./serviceapprovalcompliance/ApprovalCompliance";
import Enquire from "./enquire/Enquire";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/designconsultingservice" element={<DesignConsultingService/>} />
        <Route path="/installationcommisioningservice" element={<InstallationCommisioningService/>}/>
        <Route path="/panelboardcontrolservice" element={<PanelBoardControlSystem/>}/>
        <Route path="/approvalcomplianceservice" element={<ApprovalComplianceService/>}/>
        <Route path="/projectsectorial" element={<ProjectSectorial />} />
        <Route path="/allprojects" element={<AllProjects/>}/>
        <Route path="/enquire" element={<Enquire/>} />
      </Routes>
    </>
  );
}
