import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import OtherPage from "./components/OtherPage";

import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/other-page" element={<OtherPage />} />

        <Route path="/hooks">
          <Route path="" element={<Navigate to="/hooks/useState" />} />
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useMemo" element={<UseMemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
