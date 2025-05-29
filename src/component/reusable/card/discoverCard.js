import Image from "next/image"
export default function DiscoverCard({ myDiscov }) {
    return(
        <div className="relative">
             <Image className="w-full"
                            src={myDiscov.image}
                            alt='image'
                            />
                            <div className="absolute bottom-4 left-4 text-white flex flex-col gap-3">
                                <div className="text-[18px] font-semibold flex flex-col gap-2">
                                    <p>{myDiscov.category}</p>
                                    <p>{myDiscov.price}</p>
                                </div>
                                <div className="flex text-[14px] font-normal gap-3">
                                    <p>{myDiscov.Number}</p>
                                    <p className="border-r border-l px-3">{myDiscov.bathroom}</p>
                                    <p>{myDiscov.square}</p>
                                </div>
                                <div className="flex text-[14px] gap-2 font-normal">
                                <Image className=""
                            src={myDiscov.signal}
                            alt='image'
                            />
                            <p>{myDiscov.location}</p>
                                </div>
                            </div>
                            
        </div>
    )
}


