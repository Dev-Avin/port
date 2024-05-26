import './App.css'
import Hero from './components/Hero'
import Magic from './components/Magic'
import Features from './components/Features'

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
      <Features />
      <footer className='footer'>
        <div className='align'>
          © 2024 Copywrite. All rights reserved.
        </div>
        <div className='footerLinks'>
          <a className='mailto' href="mailto:avinash.dev.sharmaji@gmail.com">Email ME</a>
          <a className='contact' href="#" onClick={copyPhoneNumber}>Contact me</a>
        </div>
      </footer>
    </div>
  )
}

export default App
