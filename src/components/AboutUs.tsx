import { useState, useEffect } from 'react';
import VisionPurposeValues from './VisionPurposeValues'; // Import stays the same

const AboutUs = () => {
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Data for the Corporate Citizenship section
  const citizenshipData = [
    {
      title: 'Tech Mahindra Foundation',
      description: 'The Tech Mahindra Foundation is our corporate social responsibility arm of Tech Mahindra Limited, a Mahindra Group Company.',
    },
    {
      title: 'Mahindra Educational Institutions',
      description: 'Offer world-class higher education to ensure well-rounded learning for empowering the youth.',
    },
    {
      title: 'Individual Social Responsibility',
      description: 'Making responsibility personal, TechMighties go the extra mile to embrace it in their daily lives and drive positive change uniquely.',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scaleTimer = setTimeout(() => {
      setScaleAtSpeedVisible(true);
    }, 200);
    const promiseTimer = setTimeout(() => {
      setPromiseTextVisible(true);
    }, 400);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(promiseTimer);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background with diagonal section for image */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full h-full">
            <div
              className="w-full h-full bg-transparent"
              style={{
                clipPath: windowWidth < 768
                  ? 'polygon(-375% 75%, 100% 20%, 100% 100%, 0% 100%)'
                  : 'polygon(-40% 90%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="About Us"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="absolute top-4 sm:top-8 lg:top-16 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 transition-all duration-700 ease-out ${
                scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px',
                lineHeight: windowWidth < 640 ? '36px' : windowWidth < 1024 ? '56px' : '90px'
              }}
            >
              About Us
            </h1>

            <div
              className={`transition-all duration-700 ease-out ${
                promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-xs lg:text-sm text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 640 ? '12px' : windowWidth < 1024 ? '14px' : '16px',
                  lineHeight: windowWidth < 640 ? '18px' : windowWidth < 1024 ? '22px' : '26px'
                }}
              >
                We are digital changemakers – here to disrupt old ideas, blaze new trails, and help enterprises transform and scale at unparalleled speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part of Mahindra Group section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="relative">
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 tracking-tight transition-all ease-in-out duration-1000 transform ${scaleAtSpeedVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                Scale easily with EzyGro
              </h2>
              <p className={`mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed transition-all ease-in-out duration-1000 delay-200 transform ${promiseTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                EZYGRO is a visionary initiative founded by Sushma B. Salunkhe and Dhanashree B. Salunkhe, designed to offer comprehensive, end-to-end solutions across the domains of legal, tax, audit, and corporate advisory. Born from a shared passion for simplifying the intricate challenges faced by businesses and individuals alike, EZYGRO stands as a one-stop destination for navigating the evolving regulatory and financial landscape with confidence. With a foundation built on trust, ethics, and deep industry knowledge, we are committed to delivering more than just services we deliver clarity, confidence, and long-term value. Whether it's guiding a startup through its legal framework, helping businesses stay compliant, or offering tailored financial advice, we combine precision with a personal touch to ensure every client receives support that’s both strategic and sincere.
              </p>
            </div>
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Mahindra Group - Modern office building representing innovation and growth"
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{ transform: `scale(1.05)` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Purpose Values section moved up */}
      <VisionPurposeValues />

      {/* Corporate Citizenship section moved below VisionPurposeValues */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Corporate Citizenship
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-4xl">
              We believe that technology holds the power to transform communities worldwide...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {citizenshipData.map((item, index) => (
              <div key={index} className="group relative bg-gray-50 p-8 border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-4 text-gray-600">{item.description}</p>
                <a href="#" className="inline-block mt-6 font-semibold text-gray-800 tracking-wider text-sm">
                  LEARN MORE
                </a>
                <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Line */}
      <div className="bg-black border-t border-gray-800"></div>
    </>
  );
};

export default AboutUs;
