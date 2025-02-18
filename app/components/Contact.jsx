import React, { useState } from 'react';
import Footer from './Footer';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleReceiveClick = () => {
    if (!email) {
      alert('Please enter your email first.');
      return;
    }

    const subject = 'Suko Gurung - Resume & Portfolio Site';
    const body = `Hello,\n\nPlease find attached Suko resume and the link to Suko website.\n
    \nResume: https://suko-gurung.com/Suko_Gurung_Resume_Software_Engineer_2025.pdf\nWebsite: https://suko-gurung.com\n
    \nBest regards,\nSuko Gurung`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div id='contact' className='w-full py-6 scroll-mt-20 rounded-3xl'>
      <h5 className='text-2xl mb-4'>contact.</h5>

      {/* Recruiter Quick Resume Request */}
      <div className='w-full border  border-gray-500 rounded-md p-3 mb-5'>
        <p className='mb-4'>Send yourself an email with Suko's resume and portfolio site link.
        </p>
        <div className='flex items-center gap-4'>
          <input
            type='email'
            placeholder='Recruiter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='flex-grow px-3 py-2 border border-gray-500 rounded-md'
          />
          <button
            type='button'
            onClick={handleReceiveClick}
            className='px-4 py-2 font-semibold text-gray-600 rounded-lg shadow-md hover:bg-gray-300 transition border border-gray-500'
          >
            Receive
          </button>
        </div>
      </div>

      {/* Main Contact Form */}
      <p>Feel free to reach out to me for any queries or collaborations.</p>
      <form className='mx-auto mt-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-4'>
          <input
            type='text'
            placeholder='Name'
            required
            className='w-full px-3 py-2 border border-gray-500 rounded-md'
          />
          <input
            type='email'
            placeholder='Your Email'
            required
            className='w-full px-3 py-2 border border-gray-500 rounded-md'
          />
        </div>
        <textarea
          placeholder='Message'
          required
          className='w-full px-3 py-2 border border-gray-500 rounded-md h-32'
        ></textarea>
        <button
          type='submit'
          className='mt-4 px-3 py-1 text-gray-600 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition border border-gray-500'
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;