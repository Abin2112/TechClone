import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const VisionPurposeValues = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [hoveredNavButton, setHoveredNavButton] = useState<'prev' | 'next' | null>(null);
  const navigate = useNavigate();

  const content = [
    {
      key: 'vision',
      title: 'Vision',
      text: 'We will continue to Rise to be an agile, customer-centric, and purpose-driven company, delivering best-in-class technology solutions to our stakeholders.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
    },
    {
      key: 'purpose',
      title: 'Purpose',
      text: 'To drive positive change in the lives of our communities. Only when we enable others to Rise will we Rise.\n\n#TogetherWeRise',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
    },
    {
      key: 'values',
      title: 'Values',
      list: [
        'Professionalism',
        'Good Corporate Citizenship',
        'Customer First',
        'Quality Focus',
        'Dignity of the Individual'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
    }
  ];

  const handleTabClick = (index: number) => {
    if (index === activeTab || isAnimating) return;

    setIsAnimating(true);
    setHoveredTab(index);
    
    // Show preview animation first
    setTimeout(() => {
      setIsExpanding(true);
      
      // Then expand to full
      setTimeout(() => {
        setActiveTab(index);
        setHoveredTab(null);
        setIsExpanding(false);
        setIsAnimating(false);
      }, 800);
    }, 100);
  };
  
  const nextTab = () => {
    const nextIndex = (activeTab + 1) % content.length;
    
    if (isAnimating) return;
    
    setIsAnimating(true);
    setHoveredNavButton('next');
    
    // Show preview animation first
    setTimeout(() => {
      setIsExpanding(true);
      
      // Then expand to full
      setTimeout(() => {
        setActiveTab(nextIndex);
        setHoveredNavButton(null);
        setIsExpanding(false);
        setIsAnimating(false);
      }, 800);
    }, 100);
  };

  const prevTab = () => {
    const prevIndex = (activeTab - 1 + content.length) % content.length;
    
    if (isAnimating) return;
    
    setIsAnimating(true);
    setHoveredNavButton('prev');
    
    // Show preview animation first
    setTimeout(() => {
      setIsExpanding(true);
      
      // Then expand to full
      setTimeout(() => {
        setActiveTab(prevIndex);
        setHoveredNavButton(null);
        setIsExpanding(false);
        setIsAnimating(false);
      }, 800);
    }, 100);
  };

  const currentContent = content[activeTab];

  return (
    <section className="bg-black text-white min-h-screen flex flex-col py-4 sm:py-8 lg:py-20 px-4 relative">
      {/* Inline styles for slide animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideInFromRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          @keyframes slideOutToLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          @keyframes slideInHalfway {
            from { 
              transform: translateX(100%) translateY(-20%);
              clip-path: circle(0% at 75% 55%);
            }
            to { 
              transform: translateX(50%) translateY(-10%);
              clip-path: circle(50% at 75% 55%);
            }
          }
          @keyframes slideInHalfwayFromTopLeft {
            from { 
              transform: translateX(-100%) translateY(-100%);
              clip-path: circle(0% at 25% 50%);
            }
            to { 
              transform: translateX(-50%) translateY(0%);
              clip-path: circle(50% at 25% 50%);
            }
          }
          @keyframes slideOutHalfway {
            from { transform: translateX(50%) translateY(-10%); }
            to { transform: translateX(100%) translateY(-20%); }
          }
          @keyframes expandToFull {
            from { 
              transform: translateX(50%) translateY(-10%);
              clip-path: circle(50% at 75% 55%);
            }
            to { 
              transform: translateX(0%) translateY(0%);
              clip-path: circle(100% at 50% 50%);
            }
          }
          @keyframes expandToFullFromTopLeft {
            from { 
              transform: translateX(-50%) translateY(0%);
              clip-path: circle(50% at 25% 50%);
            }
            to { 
              transform: translateX(0%) translateY(0%);
              clip-path: circle(100% at 50% 50%);
            }
          }
          
          /* Mobile responsive animations */
          @media (max-width: 768px) {
            @keyframes slideInHalfway {
              from { 
                transform: translateX(100%) translateY(-15%);
                clip-path: circle(0% at 70% 54%);
              }
              to { 
                transform: translateX(40%) translateY(-8%);
                clip-path: circle(50% at 70% 54%);
              }
            }
            @keyframes slideInHalfwayFromTopLeft {
              from { 
                transform: translateX(-100%) translateY(-80%);
                clip-path: circle(0% at 30% 50%);
              }
              to { 
                transform: translateX(-40%) translateY(0%);
                clip-path: circle(50% at 30% 50%);
              }
            }
            @keyframes expandToFull {
              from { 
                transform: translateX(40%) translateY(-8%);
                clip-path: circle(50% at 70% 54%);
              }
              to { 
                transform: translateX(0%) translateY(0%);
                clip-path: circle(100% at 50% 50%);
              }
            }
            @keyframes expandToFullFromTopLeft {
              from { 
                transform: translateX(-40%) translateY(0%);
                clip-path: circle(50% at 30% 50%);
              }
              to { 
                transform: translateX(0%) translateY(0%);
                clip-path: circle(100% at 50% 50%);
              }
            }
          }
          
          .slide-in-animation {
            animation: slideInFromRight 0.4s ease-in-out forwards;
          }
          .slide-out-animation {
            animation: slideOutToLeft 0.4s ease-in-out forwards;
          }
          .slide-in-halfway {
            animation: slideInHalfway 0.8s ease-out forwards;
          }
          .slide-in-halfway-top-left {
            animation: slideInHalfwayFromTopLeft 0.8s ease-out forwards;
          }
          .slide-out-halfway {
            animation: slideOutHalfway 0.6s ease-in forwards;
          }
          .expand-to-full {
            animation: expandToFull 1.0s ease-out forwards;
          }
          .expand-to-full-from-top-left {
            animation: expandToFullFromTopLeft 1.0s ease-out forwards;
          }
        `
      }} />
      
      {/* Navigation buttons - positioned for mobile at top, desktop at top-right */}
      <div className="flex justify-center md:absolute md:top-4 md:right-4 lg:top-8 lg:right-8 mb-6 md:mb-0 gap-3 lg:gap-4">
        <button
          onClick={prevTab}
          onMouseEnter={() => !isAnimating && setHoveredNavButton('prev')}
          onMouseLeave={() => !isAnimating && setHoveredNavButton(null)}
          disabled={isAnimating}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextTab}
          onMouseEnter={() => !isAnimating && setHoveredNavButton('next')}
          onMouseLeave={() => !isAnimating && setHoveredNavButton(null)}
          disabled={isAnimating}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors disabled:opacity-50"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Main content container */}
      <div className="flex-1 flex flex-col md:block">
        {/* Desktop layout */}
        <div className="hidden md:block max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center min-h-[70vh]">
            {/* Left side navigation */}
            <div className="space-y-10">
              {content.map((item, index) => (
                <h2
                  key={item.key}
                  className={`text-6xl lg:text-7xl font-bold cursor-pointer transition-all duration-300 ${
                    activeTab === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  } ${isAnimating ? 'pointer-events-none' : ''}`}
                  onClick={() => handleTabClick(index)}
                  onMouseEnter={() => !isAnimating && setHoveredTab(index)}
                  onMouseLeave={() => !isAnimating && setHoveredTab(null)}
                >
                  {item.title}
                </h2>
              ))}
            </div>

            {/* Center circular image */}
            <div className="flex justify-center items-center relative">
              {/* Circular mask container */}
              <div className="relative w-80 h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
                {/* Current active image - stays in place during transitions */}
                <div className="absolute inset-0">
                  <img
                    src={currentContent.image}
                    alt={currentContent.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover preview image that slides in halfway */}
                {((hoveredTab !== null && hoveredTab !== activeTab) || hoveredNavButton !== null) && (
                  <div 
                    className={`absolute inset-0 overflow-hidden rounded-full ${
                      isExpanding ? 'expand-to-full' : ''
                    }`}
                    style={{
                      zIndex: 10,
                      transform: (() => {
                        let targetIndex;
                        let isVision = false;
                        
                        if (hoveredTab !== null) {
                          targetIndex = hoveredTab;
                          isVision = hoveredTab === 0;
                        } else if (hoveredNavButton === 'next') {
                          targetIndex = (activeTab + 1) % content.length;
                          isVision = targetIndex === 0;
                        } else if (hoveredNavButton === 'prev') {
                          targetIndex = (activeTab - 1 + content.length) % content.length;
                          isVision = targetIndex === 0;
                        }
                        
                        if (isVision) {
                          return isExpanding 
                            ? 'translateX(-50%) translateY(0%)'
                            : 'translateX(-100%) translateY(-100%)';
                        } else {
                          return isExpanding 
                            ? 'translateX(50%) translateY(-10%)'
                            : 'translateX(100%) translateY(-20%)';
                        }
                      })(),
                      animation: (() => {
                        let targetIndex;
                        let isVision = false;
                        
                        if (hoveredTab !== null) {
                          targetIndex = hoveredTab;
                          isVision = hoveredTab === 0;
                        } else if (hoveredNavButton === 'next') {
                          targetIndex = (activeTab + 1) % content.length;
                          isVision = targetIndex === 0;
                        } else if (hoveredNavButton === 'prev') {
                          targetIndex = (activeTab - 1 + content.length) % content.length;
                          isVision = targetIndex === 0;
                        }
                        
                        return isVision
                          ? (isExpanding 
                              ? 'expandToFullFromTopLeft 1.0s ease-out forwards' 
                              : 'slideInHalfwayFromTopLeft 0.8s ease-out forwards')
                          : (isExpanding 
                              ? 'expandToFull 1.0s ease-out forwards' 
                              : 'slideInHalfway 0.8s ease-out forwards');
                      })()
                    }}
                  >
                    <img
                      src={(() => {
                        if (hoveredTab !== null) {
                          return content[hoveredTab].image;
                        } else if (hoveredNavButton === 'next') {
                          return content[(activeTab + 1) % content.length].image;
                        } else if (hoveredNavButton === 'prev') {
                          return content[(activeTab - 1 + content.length) % content.length].image;
                        }
                        return '';
                      })()}
                      alt={(() => {
                        if (hoveredTab !== null) {
                          return content[hoveredTab].title;
                        } else if (hoveredNavButton === 'next') {
                          return content[(activeTab + 1) % content.length].title;
                        } else if (hoveredNavButton === 'prev') {
                          return content[(activeTab - 1 + content.length) % content.length].title;
                        }
                        return '';
                      })()}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Expanding image when clicking on hovered item */}
                {isExpanding && (hoveredTab !== null || hoveredNavButton !== null) && (
                  <div 
                    className={`absolute inset-0 overflow-hidden rounded-full ${
                      (() => {
                        let isVision = false;
                        
                        if (hoveredTab !== null) {
                          isVision = hoveredTab === 0;
                        } else if (hoveredNavButton === 'next') {
                          isVision = ((activeTab + 1) % content.length) === 0;
                        } else if (hoveredNavButton === 'prev') {
                          isVision = ((activeTab - 1 + content.length) % content.length) === 0;
                        }
                        
                        return isVision ? 'expand-to-full-from-top-left' : 'expand-to-full';
                      })()
                    }`}
                    style={{
                      zIndex: 15,
                      transform: (() => {
                        let isVision = false;
                        
                        if (hoveredTab !== null) {
                          isVision = hoveredTab === 0;
                        } else if (hoveredNavButton === 'next') {
                          isVision = ((activeTab + 1) % content.length) === 0;
                        } else if (hoveredNavButton === 'prev') {
                          isVision = ((activeTab - 1 + content.length) % content.length) === 0;
                        }
                        
                        return isVision 
                          ? 'translateX(-50%) translateY(0%)'
                          : 'translateX(50%) translateY(-10%)';
                      })()
                    }}
                  >
                    <img
                      src={(() => {
                        if (hoveredTab !== null) {
                          return content[hoveredTab].image;
                        } else if (hoveredNavButton === 'next') {
                          return content[(activeTab + 1) % content.length].image;
                        } else if (hoveredNavButton === 'prev') {
                          return content[(activeTab - 1 + content.length) % content.length].image;
                        }
                        return '';
                      })()}
                      alt={(() => {
                        if (hoveredTab !== null) {
                          return content[hoveredTab].title;
                        } else if (hoveredNavButton === 'next') {
                          return content[(activeTab + 1) % content.length].title;
                        } else if (hoveredNavButton === 'prev') {
                          return content[(activeTab - 1 + content.length) % content.length].title;
                        }
                        return '';
                      })()}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Enhanced border ring that responds to hover */}
              <div 
                className={`absolute inset-0 rounded-full border-2 transition-all duration-800 ease-out pointer-events-none ${
                  (hoveredTab !== null || hoveredNavButton !== null)
                    ? 'border-white/50 scale-105 shadow-lg shadow-white/10'
                    : 'border-white/20 scale-100'
                }`}
                style={{
                  width: '320px',
                  height: '320px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>

            {/* Right side content */}
            <div className="flex items-center justify-start">
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                }`}
              >
                {currentContent.text ? (
                  <p className="text-lg leading-relaxed whitespace-pre-line max-w-lg">{currentContent.text}</p>
                ) : (
                  <ul className="text-lg space-y-3 max-w-lg">
                    {currentContent.list?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col h-full">
          {/* Navigation titles - horizontal layout for mobile */}
          <div className="flex justify-center space-x-8 mb-6">
            {content.map((item, index) => (
              <h2
                key={item.key}
                className={`text-xl font-bold cursor-pointer transition-all duration-300 ${
                  activeTab === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                } ${isAnimating ? 'pointer-events-none' : ''}`}
                onClick={() => handleTabClick(index)}
                onMouseEnter={() => !isAnimating && setHoveredTab(index)}
                onMouseLeave={() => !isAnimating && setHoveredTab(null)}
              >
                {item.title}
              </h2>
            ))}
          </div>

          {/* Large circular image - centered and prominent */}
          <div className="flex justify-center items-center flex-1 min-h-[40vh] mb-6">
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile animations */}
              {((hoveredTab !== null && hoveredTab !== activeTab) || hoveredNavButton !== null) && (
                <div 
                  className="absolute inset-0 overflow-hidden rounded-full"
                  style={{
                    zIndex: 10,
                    transform: (() => {
                      let isVision = false;
                      
                      if (hoveredTab !== null) {
                        isVision = hoveredTab === 0;
                      } else if (hoveredNavButton === 'next') {
                        isVision = ((activeTab + 1) % content.length) === 0;
                      } else if (hoveredNavButton === 'prev') {
                        isVision = ((activeTab - 1 + content.length) % content.length) === 0;
                      }
                      
                      return isVision 
                        ? 'translateX(-40%) translateY(0%)'
                        : 'translateX(40%) translateY(-8%)';
                    })(),
                    animation: (() => {
                      let isVision = false;
                      
                      if (hoveredTab !== null) {
                        isVision = hoveredTab === 0;
                      } else if (hoveredNavButton === 'next') {
                        isVision = ((activeTab + 1) % content.length) === 0;
                      } else if (hoveredNavButton === 'prev') {
                        isVision = ((activeTab - 1 + content.length) % content.length) === 0;
                      }
                      
                      return isVision
                        ? 'slideInHalfwayFromTopLeft 0.8s ease-out forwards'
                        : 'slideInHalfway 0.8s ease-out forwards';
                    })()
                  }}
                >
                  <img
                    src={(() => {
                      if (hoveredTab !== null) {
                        return content[hoveredTab].image;
                      } else if (hoveredNavButton === 'next') {
                        return content[(activeTab + 1) % content.length].image;
                      } else if (hoveredNavButton === 'prev') {
                        return content[(activeTab - 1 + content.length) % content.length].image;
                      }
                      return '';
                    })()}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Enhanced border ring */}
              <div 
                className={`absolute inset-0 rounded-full border-2 transition-all duration-800 ease-out pointer-events-none ${
                  (hoveredTab !== null || hoveredNavButton !== null)
                    ? 'border-white/50 scale-105 shadow-lg shadow-white/10'
                    : 'border-white/20 scale-100'
                }`}
                style={{
                  width: '300px',
                  height: '300px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          </div>

          {/* Content text */}
          <div className="text-center px-4 mb-6">
            <div
              className={`transition-all duration-300 ease-in-out ${
                isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}
            >
              {currentContent.text ? (
                <p className="text-sm leading-relaxed whitespace-pre-line max-w-md mx-auto">{currentContent.text}</p>
              ) : (
                <ul className="text-sm space-y-2 max-w-md mx-auto text-left">
                  {currentContent.list?.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="px-4 pb-4">
            <div className="w-full bg-gray-700 h-1 rounded-full">
              <div 
                className="bg-red-600 h-1 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${((activeTab + 1) / content.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPurposeValues;