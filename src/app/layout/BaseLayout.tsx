import { Route, Routes } from 'react-router-dom';
import PurchasingPolicy from '@/pages/purchasingPolicy/ui/PurchasingPolicy';
import { ChooseProgram } from '@/pages/chooseProgram';

function BaseLayout() {
  return (
    <main
      style={{
        backgroundColor: '#EAEFFA',
        minHeight: '100vh',
      }}
    >
      <Routes>
        <Route path="/" element={<PurchasingPolicy />} />
        <Route path="/second-step" element={<ChooseProgram />} />
      </Routes>
    </main>
  );
}

export default BaseLayout;
