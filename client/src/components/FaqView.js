import React, { useState } from 'react';
import FAQ from './FAQ';

const NavBar = () => {
    const [faqs, setfaqs] = useState([
        {
          question: 'How do I sign up?',
          answer: 'Just click "Signup" and follow directions 😅.',
          open: true
        },
        {
          question: 'Can I invite friends and family?',
          answer: 'Absolutely!',
          open: false
        },
        {
          question: 'how many trips can I plan in the app?',
          answer: 'As many as you want.',
          open: false
        }
      ]);
    
      const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }
    
    
      return (
        <div className="App">
          {/* <Header /> */}
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      );
}

export default NavBar