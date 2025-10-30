// import Image from "next/image";
// import React from "react";

// const HeroSection1 = () => {
//   return (
//     <div className="relative w-full h-[937px]">
//       {/* Full width background image */}
//       <Image
//         src="/hero.png"
//         fill
//         alt="hero image"
//         className="2xl:object-fill object-cover "
//         priority
//       />

//       {/* Content area inside 1840px container */}
//       <div className="absolute inset-0 mt-[120px] h-[876px]">
//         <div className="max-w-[1840px] relative h-full mx-auto px-6 text-black z-10">
//           <div className="absolute bottom-0 h-full w-full">
            // <div className="w-[777px] h-[360px] relative bottom-0">
            //   <h1 className="text-[128px]  font-medium w-fit h-fit text-white m-0 p-0 leading-[95px] font-roboto absolute text-center right-1/2 translate-x-1/2 top-0 z-30">
            //     Buy
            //   </h1>

            //   <Image
            //     src="/img1.png"
            //     alt="img1"
            //     width={777}
            //     height={360}
            //     className="max-h-full z-20 absolute min-h-full object-fill"
            //   />
            // </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection1;

import Image from "next/image";
import React from "react";

const HeroSection1 = () => {
  return (
    <div className="relative w-full h-[937px] overflow-hidden">
      {/* ✅ Background Image */}
      <Image
        src="/hero.png"
        fill
        alt="hero image"
        className="object-cover"
        priority
      />

      {/* ✅ Absolute positioned content container */}
      <div className="absolute inset-0">
        <div className="max-w-[1840px] mx-auto h-full relative">

          {/* Example 1 */}
          <div className="absolute bottom-[130px] left-0 hero-img ">
            <Image
              src="/img1.png"
              alt="img1"
              fill
              className="object-fill rounded-md"
            />
                    <h1 className="text-[128px]  font-medium w-fit h-fit text-white m-0 p-0 leading-[95px] font-roboto absolute text-center right-1/2 translate-x-1/2 top-0 z-30">
                Buy
              </h1>
          </div>

          {/* Example 2 */}
          <div className="absolute top-[120px] 2xl:right-[703px] right-[600px] w-[306px] h-[445px]">
            <Image
              src="/img2.png"
              alt="img2"
              fill
              className="object-fill rounded-md"
            />
            <h1 className="absolute top-1/2 -right-10 -rotate-90  -translate-y-1/2 text-[90px] font-medium text-white  font-roboto leading-[0.9] z-30 text-center">
              Sell
            </h1>
          </div>

          {/* Example 3 */}
          <div className="absolute top-[393px] right-0 hero-img3 h-[365px]">
            <Image
              src="/img3.png"
              alt="img3"
              fill
              className="object-fill rounded-md"
            />
                  <h1 className="text-[128px]  font-medium w-fit h-fit text-white m-0 p-0 leading-[95px] font-roboto absolute text-center right-1/2 translate-x-1/2 top-0 z-30">
                Rent
              </h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
