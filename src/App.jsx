import React, { useState } from 'react';
import bgPattern from '/images/bg-pattern-desktop.svg';
import iconArrow from '/images/icon-arrow.svg';
import iconError from '/images/icon-error.svg';
import logo from '/images/logo.svg';
import heroDesktop from '/images/hero-desktop.jpg';
import heroMobile from '/images/hero-mobile.jpg';

const App = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else {
      // Handle form submission
      console.log('Form submitted successfully!', email);
      setSubmitted(true);
      setEmail('');
      setError('');
    }
  };



  return (
    <main className='flex flex-col-reverse sm:flex-row' style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className='sm:w-2/3 p-8 sm:mx-32 text-center sm:text-justify'>
        <img src={logo} alt='Logo' className='hidden sm:block' />
        <div className='flex flex-col sm:max-w-sm gap-4'>
          <div className='mt-10 sm:w-32 w-full'>
            <h1 className='text-4xl text-DesaturatedRed'>WE'RE</h1>
            <h2 className='text-4xl font-semibold text-DarkGrayishRed'>COMING</h2>
            <h2 className='text-4xl font-semibold text-DarkGrayishRed'>SOON</h2>
          </div>

          <p className='text-DesaturatedRed'>
            Hello! We're currently building our new fashion store. Add your email below to stay updated with announcements and our launch deals.
          </p>

          <form className='container' onSubmit={handleSubmit}>
            <div className='relative flex flex-row px-4 sm:px-0'>
              <input type='email' name='email' value={email} onChange={handleChange} placeholder='Email Address' className={`rounded-full border-2 py-1.5 pl-7 pr-20 border-DesaturatedRed ${error && 'border-red-500'}`} />
              <span className='absolute flex flex-row gap-2 translate-x-60'>
                {error && <img src={iconError} alt='Error Icon' />}
                <button type='submit' className='bg-gradient-to-l from-liner2a to-liner2b px-6 py-2 rounded-full'>
                  <img src={iconArrow} alt='Submit Icon' />
                </button>
              </span>
            </div>
            {error && <span className='text-SoftRed'>{error}</span>}
            {submitted && <span className='text-SoftRed'>Thank you for subscribing!</span>}
          </form>
        </div>
      </div>
      <div className='sm:w-1/3 w-full'>
        <img src={logo} alt='Logo' className='sm:hidden p-8' />
        <img src={heroDesktop} alt='Desktop Hero' className='hidden sm:block h-full' />
        <img src={heroMobile} alt='Mobile Hero' className='sm:hidden w-full' />
      </div>
    </main>
  );
};

export default App;
