import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import TermsOfService from "./components/TermsOfService";
// import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import CancellationPolicy from "./components/CancellationPolicy";
import ShippingPolicy from "./components/ShippingPolicy";
import Contact from "./components/Contact";
import Chat from "./components/Chat";

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests />} />
            <Route path="/chat/:targetUserId" element={<Chat />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
