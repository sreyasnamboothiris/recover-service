import React from 'react'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Service from '../Components/Service'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import Location from '../Components/Location'
import MyTeam from '../Components/MyTeam'
import { MessageCircle } from 'lucide-react'
import { Phone } from 'lucide-react'
function HomePage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Location />
      </div>
      <div>
        <MyTeam />
      </div>
      <div>
        <ContactUs />
      </div>
      {/* Fixed WhatsApp & Call Buttons */}
      <a
        href="https://wa.me/8281839912"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <MessageCircle size={28} />
      </a>

      <a
        href="tel:+918281839912"
        className="fixed bottom-4 left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        <Phone size={28} />
      </a>
    </div>
  )
}

export default HomePage