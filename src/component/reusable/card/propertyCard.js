import Image from "next/image"
export default function PropertyCard({ myProps }) {
    return(
        <div>
            <div  className="relative ">
            <Image className="w-full"
                src={myProps.image}
                alt='image'
                />
                <div className="absolute top-5 flex gap-[109px] lg:gap-[58px] xl:gap-[180px] 2xl:gap-[245px] px-[17px] text-white text-[13px] font-medium">
                    <p className="bg-[#3D9970] px-[22px] py-[9px] rounded-sm">{myProps.feature}</p>
                    <p className="bg-[#D3D3D3B2] px-[22px] py-[9px] rounded-sm">{myProps.categories}</p>
                </div>
                <div className="flex absolute bottom-5 right-5 gap-[20px]">
                <Image className="w-full"
                src={myProps.gallery}
                alt='image'
                />
                <Image className="w-full"
                src={myProps.link}
                alt='image'
                />
                <Image className="w-full"
                src={myProps.camera}
                alt='image'
                />
                </div>
            </div>
            <div className="w-full border-l border-r border-b rounded-b-xl  border-[#DDD8D8] shadow">
               <div className="p-[22px] flex flex-col gap-[20px]">
               <div className=" flex flex-col">
                    <h2 className="pb-[9px]">{myProps.type}</h2>
                   <div className="flex gap-2">
                   <Image className=""
                src={myProps.signal}
                alt='icon'
                />
                <p>{myProps.location}</p>
                   </div>
                </div>
               <div className="flex xl:gap-[84px] gap-2 items-center border-b border-[#DDD8D8] pb-[32px]">
               <div className="flex gap-2">
                <Image className=""
                src={myProps.bedroom}
                alt='icon'
                />
                <p>{myProps.Number}</p>
                </div>
                <div className="flex gap-2">
                <Image className=""
                src={myProps.toilet}
                alt='icon'
                />
                <p>{myProps.count}</p>
                </div>
               </div>
               <div className="flex  justify-between pb-[21px] pt-[36px]">
               <div>
                 <h1>{myProps.years}</h1>
               </div>
              <div className="flex items-center xl:gap-[25px] gap-3">
              <Image className=""
                src={myProps.arrow}
                alt='icon'
                />
                 <Image className=""
                src={myProps.filter}
                alt='icon'
                />
                 <Image className=""
                src={myProps.fave}
                alt='icon'
                />
              </div>
               </div>
               </div>
            </div>
            
        </div>
    )
}