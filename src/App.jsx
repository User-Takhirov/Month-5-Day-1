import React from "react";
import { Header } from "./Pages/Header/header";
import { Hero } from "./Pages/Hero/hero";
import { Differences } from "./Pages/Differences/differences";
import { Comments } from "./Pages/Comments/comment";
import { TeamWork } from "./Pages/TeamWork/TeamWork";
import { Footer } from "./Pages/Footer/footer";
// import { Hero } from "./Pages/Hero";
// import { Differences } from "./Pages/Differences";
// import { Comments } from "./Pages/Comments";
// import { Footer } from "./Pages/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Differences />
      <Comments />
      <TeamWork />
      <Footer />
    </>
  );
}

export default App;
