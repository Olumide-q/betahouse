'use client'
import { useState, useRef, useEffect } from 'react';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { Discovers } from "@/db"
import DiscoverCard from "../reusable/card/discoverCard"
export default function Discover() {
    useEffect(() => {
        const updateMaxIndex = () => {
          if (scrollRef.current) {
            const container = scrollRef.current;
            const cardWidth = container.children[0]?.offsetWidth || 0;
            const gap = 16; // gap-4 = 16px
            const containerWidth = container.offsetWidth;
            
            // Calculate how many cards are visible
            let visibleCards = 4; // desktop default
            if (window.innerWidth < 768) {
              visibleCards = 1; // mobile
            } else if (window.innerWidth < 1024) {
              visibleCards = 2; // tablet
            }
            
            const totalScrollableCards = Discovers.length - visibleCards;
            setMaxIndex(Math.max(0, totalScrollableCards));
          }
        };
    
        updateMaxIndex();
        window.addEventListener('resize', updateMaxIndex);
        return () => window.removeEventListener('resize', updateMaxIndex);
      }, [Discovers.length]);
    
      const scroll = (direction) => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const cardWidth = container.children[0]?.offsetWidth || 0;
          const gap = 16;
          const scrollAmount = cardWidth + gap;
          
          if (direction === 'left' && currentIndex > 0) {
            container.scrollLeft -= scrollAmount;
            setCurrentIndex(prev => prev - 1);
          } else if (direction === 'right' && currentIndex < maxIndex) {
            container.scrollLeft += scrollAmount;
            setCurrentIndex(prev => prev + 1);
          }
        }
      };
    
      const handleScroll = () => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const cardWidth = container.children[0]?.offsetWidth || 0;
          const gap = 16;
          const scrollLeft = container.scrollLeft;
          const newIndex = Math.round(scrollLeft / (cardWidth + gap));
          setCurrentIndex(newIndex);
        }
      };
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    return(
   <div className='w-full pb-[80px]'>
    <div  className="w-11/12 container mx-auto  pt-[72px] flex flex-col gap-[72px]">
    <div className="lg:text-[50px] text-[25px] font-semibold text-center">
 <h1>Discover Our Popular Properties</h1>
</div>
         <div className="w-full  mx-auto lg:p-6 px-4 relative ">
        <div className="group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-xl hover:scale-105'
            }`}
          >
            <GoArrowLeft />
          </button>
  
          <button
            onClick={() => scroll('right')}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#3D9970] shadow-sm border border-[#3D9970] flex items-center justify-center transition-all duration-200 ${
              currentIndex >= maxIndex 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-xl hover:scale-105'
            }`}
          >
             <GoArrowRight />
          </button>
  
          {/* Cards Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {
                       Discovers.map((discov) =>{
                           return(
                               <div key={discov.id}
                               className="flex-none w-full md:w-[calc(60%-8px)] lg:w-[calc(25%-12px)] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                               >
                                   <DiscoverCard myDiscov = {discov} />
                               </div>
                           )
           
                       })
                     }
          </div>
        </div>
      </div>
    </div>
   </div>
    )
}

