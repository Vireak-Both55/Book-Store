import React, { useState, useEffect } from 'react';

const images = [
  'https://th.bing.com/th/id/OIP.IjH6_IRzhnRct-57huZkPAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain',
  'https://assets.teenvogue.com/photos/55830a7dc3f29bdf1f2b3b1b/master/w_1600/entertainment-books-2014-07-harrypotter-00.jpg',
  'https://i.etsystatic.com/47720526/r/il/ffd41a/5439956552/il_fullxfull.5439956552_tkgn.jpg',
  'https://th.bing.com/th/id/R.1a5b0d2d808d6b9d319dcbe0452c8c97?rik=sIFzpfrflHDnZA&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.b8af53376f5f526f3b6700065977ccb8?rik=lNfHOk7D%2btIUXw&pid=ImgRaw&r=0',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 5000); // change slide every 3 seconds

    return () => clearInterval(timer);
  }, [length]);

  return (
    <div  className="">
    <div className="relative h-[200px] sm:h-[400px]  w-full overflow-hidden ">
      {/* Slides */}
      <div className="flex transition-transform object-cover duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full h-full flex-shrink-0" />
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2   transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${current === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
