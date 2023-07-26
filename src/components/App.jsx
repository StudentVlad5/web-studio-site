import { Route, Routes } from 'react-router-dom';
import { Home } from './Sections/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { About } from './Sections/About/About';
import { Contact } from './Sections/Contact/Contact';
import { Services } from './Sections/Services/Services';
import { Project } from "./Sections/Projects/Projects";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
