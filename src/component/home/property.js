
'use client'
import { useState } from "react";
import { AllProperties } from "@/db";
import PropertyCard from "../reusable/card/propertyCard";
import { BsSliders } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// import { RiArrowDropDownLine } from "react-icons/ri";

export default function Property({ myProps }) {
  // Debug: Log the received myProps
  console.log("myProps received:", myProps, typeof myProps);

  // State to track sort order
  const [sortOrder, setSortOrder] = useState("default");

  // Function to handle sort change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Function to toggle sort order for navigation buttons
  const handleSort = () => {
    setSortOrder((prevOrder) =>
      prevOrder === "default" ? "price-asc" : prevOrder === "price-asc" ? "price-desc" : "default"
    );
  };

  // Use myProps if it's an array, otherwise fall back to AllProperties
  const propsArray = Array.isArray(myProps) ? myProps : AllProperties;

  // Sort the properties based on price (using the 'years' field)
  const sortedProps = [...propsArray].sort((a, b) => {
    const priceA = parseInt(a.years.replace(/[^0-9]/g, "")); // Extract numeric value from 'years'
    const priceB = parseInt(b.years.replace(/[^0-9]/g, ""));
    if (sortOrder === "price-asc") return priceA - priceB;
    if (sortOrder === "price-desc") return priceB - priceA;
    return 0; // Default (no sorting)
  });


  return (
    <div className="w-full">
      <div className="w-11/12 container mx-auto pt-[72px]">
        <div className="flex justify-between items-center pb-[20px]">
          <div className="flex w items-center gap-8 text-[21px]">
            <div className="flex gap-3 items-center">
              <BsSliders />
              <p>More Filter</p>
            </div>
            <div>
              <p className="text-[21px] hidden lg:block">
                Showing 1 - 10 of 15 results
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[21px]">
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="border rounded px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm w-full sm:w-auto"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            {/* <RiArrowDropDownLine /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {sortedProps.map((props) => (
            <div key={props?.id}>
              <PropertyCard myProps={props} />
            </div>
          ))}
        </div>
        <div className="flex justify-center text-[25px] items-center font-medium gap-[24px] pt-[64px]">
          <GrFormPrevious
            className="hover:bg-[#3D9970] hover:text-white text-[42px] cursor-pointer"
            onClick={handleSort}
          />
          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">
            1
          </p>
          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">
            2
          </p>
          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">
            3
          </p>
          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">
            4
          </p>
          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">
            5
          </p>
          <MdOutlineNavigateNext
            className="hover:bg-[#3D9970] hover:text-white text-[42px] cursor-pointer"
            onClick={handleSort}
          />
        </div>
      </div>
    </div>
  );
}

// 'use client'
// import { useState } from "react";
// import { AllProperties } from "@/db";
// import PropertyCard from "../reusable/card/propertyCard";
// import { BsSliders } from "react-icons/bs";
// import { MdOutlineNavigateNext } from "react-icons/md";
// import { GrFormPrevious } from "react-icons/gr";
// import { RiArrowDropDownLine } from "react-icons/ri";

// export default function Property({ myProps }) {
//   // Debug: Log the received myProps
//   console.log("myProps received:", myProps, typeof myProps);

//   // State to track sort order
//   const [sortOrder, setSortOrder] = useState("default");

//   // Function to toggle sort order
//   const handleSort = () => {
//     setSortOrder((prevOrder) =>
//       prevOrder === "default" || prevOrder === "desc" ? "asc" : "desc"
//     );
//   };

//   // Use myProps if it's an array, otherwise fall back to AllProperties
//   const propsArray = Array.isArray(myProps) ? myProps : AllProperties;

//   // Sort the properties based on price (using the 'years' field)
//   const sortedProps = [...propsArray].sort((a, b) => {
//     const priceA = parseInt(a.years.replace(/[^0-9]/g, "")); // Extract numeric value from 'years'
//     const priceB = parseInt(b.years.replace(/[^0-9]/g, ""));
//     if (sortOrder === "asc") return priceA - priceB;
//     if (sortOrder === "desc") return priceB - priceA;
//     return 0; // Default (no sorting)
//   });

//   return (
//     <div className="w-full">
//       <div className="w-11/12 container mx-auto pt-[72px]">
//         <div className="flex justify-between items-center pb-[20px]">
//             <div className="flex w items-center gap-8 text-[21px]">
//             <div className="flex gap-3 items-center">
//             <BsSliders />
//             <p>More Filter</p>
//             </div>
//             <div>
//             <p className="text-[21px] hidden lg:block">Showing 1 - 10 of 15 results</p>
//             </div>
//             </div>
//             <div className="flex items-center gap-2 text-[21px]">
//               <p>Sort by: Default</p>
//               <RiArrowDropDownLine />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
//           {sortedProps.map((props) => (
//             <div key={props?.id}>
//               <PropertyCard myProps={props} />
//             </div>
//           ))}
//         </div>
//        <div className="flex justify-center text-[25px] items-center font-medium gap-[24px] pt-[64px]">
//         <GrFormPrevious className="hover:bg-[#3D9970] hover:text-white text-[42px] cursor-pointer"
//         onClick={handleSort}
//          />
//          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">1 </p>
//          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">2 </p>
//          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">3 </p>
//          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">4 </p>
//          <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed"> 5</p>
//           <MdOutlineNavigateNext
//                 className="hover:bg-[#3D9970] hover:text-white text-[42px] cursor-pointer"
//                 onClick={handleSort}
//               />
//        </div>
//       </div>
//     </div>
//   );
// }





// 'use client'
// import { AllProperties } from "@/db"
// import PropertyCard from "../reusable/card/propertyCard"
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { BsSliders } from "react-icons/bs";
// import { MdOutlineNavigateNext } from "react-icons/md";
// import { GrFormPrevious } from "react-icons/gr";


// export default function Property() {
//     return(
//         <div className="w-full">
//      <div className="w-11/12 container mx-auto  pt-[72px]">
//      <div className="flex justify-between items-center pb-[20px]">
//         <div className="flex gap-[29px] ">
//             <div className="flex w items-center gap-2 text-[21px]">
//             <BsSliders />
//             <p>More Filter</p>
//             </div>
//             <p className="text-[21px] hidden lg:block">Showing 1 – 10 of 15 results</p>
//         </div>
//       <div className="flex items-center gap-2 text-[21px]">
//       <p>Sort by: Default</p>
//       <RiArrowDropDownLine />
//       </div>
//      </div>
//      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] ">
//         {AllProperties.map((props) => (
//           <div key={props?.id}>
//             <PropertyCard myProps={props}/>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center text-[25px] items-center font-medium gap-[24px] pt-[64px]">
//       <GrFormPrevious className="hover:bg-[#3D9970] hover:text-white text-[42px] cursor-not-allowed" />
//         <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">1 </p>
//         <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed">2 </p>
//         <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed"> 3</p>
//         <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed"> 4 </p>
//         <p className="hover:bg-[#3D9970] hover:text-white p-2 cursor-not-allowed"> 5</p>
//         <MdOutlineNavigateNext className="hover:bg-[#3D9970] hover:text-white text-[42px] cursor-not-allowed" />
//       </div>
//      </div>
//         </div>
//     )
// }