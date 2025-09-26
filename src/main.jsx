import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Service } from "./components/Service.jsx";
import { About } from "./components/About.jsx";
import { Differentials } from "./components/Differentials.jsx";
import { Result } from "./components/Result.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { Contact } from "./components/Contact.jsx";
import { CleanUp } from "./components/CleanUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <Service />
    <About />
    <Differentials />
    <Result />
    <CleanUp />
    <Testimonials />
    <Contact />
  </StrictMode>
);
