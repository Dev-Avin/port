import Features from "./components/Features";
import ContactUs from "./components/Contact";
import Projects from "./components/Projects";
import InternshipExperience from "./components/InternshipExperience";
import HeroSkillsWrapper from "./components/HeroSkillsWrapper";
function App() {
  const copyPhoneNumber = () => {
    const phoneNumber = "7876222974";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert(`Phone number ${phoneNumber} has been copied to the clipboard.`);
      })
      .catch((err) => {
        console.error("Failed to copy the phone number: ", err);
      });
  };

  return (
    <div>
      <HeroSkillsWrapper />
      <Projects />
      <InternshipExperience />
      <Features />
      <ContactUs />
    </div>
  );
}

export default App;
