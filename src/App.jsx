import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const LoginScreen = lazy(() =>
  import("./Application/features/authentication/screen/login/login.screen")
);

const RegisterScreen = lazy(() =>
  import(
    "./Application/features/authentication/screen/register/register.screen"
  )
);

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/app-login" element={<LoginScreen />} />
            <Route path="/app-register" element={<RegisterScreen />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
