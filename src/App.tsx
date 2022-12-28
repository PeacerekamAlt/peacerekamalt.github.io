import { Routes, Route, HashRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { NotificationBar } from "./components/NotificationBar";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { MainPage } from "./pages/MainPage";
import { NewsPage } from "./pages/NewsPage";
import { TicketsPage } from "./pages/TicketsPage";
import { TimetablePage } from './pages/TimetablePage';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <NotificationBar />
        <div className="content-wrapper">
          <div className="logo-wrapper">
            <img src="/stuff/bmclogo.png" className="bmc-logo" />
          </div>
          <Navbar />
          <Routes>
            {/* @TODO: later use dashboard page instead */}
            <Route path="/" element={<MainPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/timetable" element={<TimetablePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="*" element={"404. Nie znaleziono adresu."} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
