import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Home } from "./page";
import { Toast, ToastProvider } from "./components/ui/toast";
const App = () => {
  return (
    <div>
      <ToastProvider>
        <Toast />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUpPage" element={<SignUp />} />
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </ToastProvider>
    </div>
  );
};

export default App;
