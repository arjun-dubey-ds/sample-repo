import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { PortfolioManagement } from '@/pages/PortfolioManagement';
import { PortfolioEditor } from '@/pages/PortfolioEditor';
import { MyPlans } from '@/pages/MyPlans';

export default function App() {
  return (
    <div className="min-h-screen flex flex-column">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/health" element={<div>OK</div>} />
          <Route path="/portfolio-management" element={<PortfolioManagement />} />
          <Route path="/portfolio-management/portfolio-editor" element={<PortfolioEditor />} />
          <Route path="/portfolio-management/my-plans" element={<MyPlans />} />
          <Route path="/logout" element={<div>Logged out</div>} />
          <Route path="/" element={<Navigate to="/portfolio-management" replace />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}


