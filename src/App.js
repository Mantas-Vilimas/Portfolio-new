import "./App.css";
import "../src/assets/global.css";
import Layout from "./composition/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { routes } from "./constants/routes";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FlexContainer from "./composition/FlexContainer/FlexContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./ThemeContext";

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <header id="header">
          <Layout>
            <FlexContainer>
              <Navbar />
            </FlexContainer>
          </Layout>
        </header>

        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.contact} element={<ContactPage />} />
          <Route path={routes.project} element={<ProjectPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
