import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Topbar } from "./global/Topbar";
import { Sidebar } from "./global/Sidebar";
import { Dashboard } from "./pages/scenes/Dashboard";
import { Team } from "./pages/scenes/Team";
import { Contacts } from "./pages/scenes/Contacts";
import { Invoices } from "./pages/scenes/Invoices";
import { Form } from "./pages/scenes/Form";
// import { Calendar } from "./pages/scenes/Calendar";
import { FAQ } from "./pages/scenes/FAQ";
import { Bar } from "./pages/scenes/Bar";
import { Pie } from "./pages/scenes/Pie";
import { Line } from "./pages/scenes/Line";
import { Geo } from "./pages/scenes/Geo";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./styles/theme";

export function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                {/* <Route path="/calendar" element={<Calendar />} /> */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geo />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
