import './App.css'
import Hero from './components/Hero'
import Magic from './components/Magic'
import Features from './components/Features'
import Skills from './components/Skills'
import ContactUs from './components/Contact'
function App() {

  const copyPhoneNumber = () => {
    const phoneNumber = "7876222974"; 
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert(`Phone number ${phoneNumber} has been copied to the clipboard.`);
    }).catch(err => {
      console.error('Failed to copy the phone number: ', err);
    });
  }

  return (
    <div>
      <Hero />
      <Magic />
      <Skills/>
      <Features />
      <ContactUs/>
     </div>
  )
}

export default App
