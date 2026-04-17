import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerLayout from './layouts/CustomerLayout';
import SellerLayout from './layouts/SellerLayout';
import StorefrontHome from './pages/StorefrontHome';
import YourShoppingBag from './pages/YourShoppingBag';
import CompleteYourOrder from './pages/CompleteYourOrder';
import MerchantDashboard from './pages/MerchantDashboard';
import InventoryLedger from './pages/InventoryLedger';
import AiInsightsAssistant from './pages/AiInsightsAssistant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<StorefrontHome />} />
          <Route path="cart" element={<YourShoppingBag />} />
          <Route path="checkout" element={<CompleteYourOrder />} />
        </Route>
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<MerchantDashboard />} />
          <Route path="inventory" element={<InventoryLedger />} />
          <Route path="insights" element={<AiInsightsAssistant />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
