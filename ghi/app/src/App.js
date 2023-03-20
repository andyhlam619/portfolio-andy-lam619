import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Andy Lam",
    location: "San Diego, CA",
    tagline: "Full Stack Software Engineer",
    email: "andy.h.lam1@gmail.com",
    availability: "Open for work",
    brand:
      " I'm a Software Engineer with expertise in FastAPI, React, Python, JavaScript, and SQL. I've had the opportunity to work on a variety of projects, from developing responsive web applications to building robust APIs. ",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
