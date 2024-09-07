import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./home/Home";
import Aboutus from "./about/Aboutus";
import AllProjects from "./pages/AllProjects";
import { Route, Routes } from "react-router-dom";
import ProjectSectorial from "./projectsectorial/ProjectSectorial";
import DesignConsultingService from "./servicedesginandconsulting/DesignConsultingService";
import InstallationCommisioningService from "./serviceinstallationandcommisioning/InstallationCommisioningService";
import PanelBoardControlSystem from "./servicepanelboardcontrolsystem/PanelBoardControlSystem";
import ApprovalComplianceService from "./serviceapprovalcompliance/ApprovalComplianceService";
import MaintenaceRepairService from "./servicemaintenancerepair/MaintenaceRepairService";
import ValueAddedService from "./servicevalueaddedservice/ValueAddedService";
import Enquire from "./enquire/Enquire";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
    <>
      <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/design-consulting-service" element={<DesignConsultingService />} />
        <Route path="/installation-commisioning-service" element={<InstallationCommisioningService />} />
        <Route path="/panel-board-control-service" element={<PanelBoardControlSystem />} />
        <Route path="/approval-compliance-service" element={<ApprovalComplianceService />} />
        <Route path="/maintenance-repair-service" element={<MaintenaceRepairService />} />
        <Route path="/value-added-service" element={<ValueAddedService />} />
        <Route path="/project-sectorial" element={<ProjectSectorial />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/enquire" element={<Enquire />} />
      </Routes>
      <ScrollToTop />
    </HelmetProvider>
    </>
  );
}
