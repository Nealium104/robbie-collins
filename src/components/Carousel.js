import Image from "next/image"

export default function Carousel () {
    return (
        <div className="flex justify-center">
            <div className="w-full md:w-1/2">        
                <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box items-center">
                    <div className="carousel-item">
                        <div className="relative w-full">
                            <Image 
                            src="/carousel/HBS.jpg"
                            alt="Robbie with HBS"
                            width={400}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="relative w-full">
                            <Image 
                            src="/carousel/chrisMartin.jpg"
                            alt="Robbie with Chris Martin"
                            width={400}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                            />
                        </div>
                    </div> 
                    <div className="carousel-item">
                        <div className="relative w-full">
                            <Image 
                                src="/carousel/baroqueDuet.jpg" 
                                alt="baroque duet"
                                width={400}
                                height={267}
                                layout="responsive"
                                objectFit="cover"
                                />
                        </div>
                    </div>  
                    <div className="carousel-item">
                        <div className="relative w-full">
                            <Image 
                            src="/carousel/orchestra.jpg"
                            alt="Robbie in the UK symphony orchestra"
                            width={400}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                            />
                            </div>   
                    </div> 
                    <div className="carousel-item">
                        <div className="relative w-full">
                            <Image 
                            src="/carousel/quintet.jpg"
                            alt="Robbie with his old brass quintet"
                            width={400}
                            height={307}
                            layout="responsive"
                            objectFit="cover"
                            />
                        </div>                    
                    </div> 
                    <div className="carousel-item">
                        <div className="relative w-full">
                            <Image 
                            src="/carousel/saxon1.jpg"
                            alt="Robbie in his saxon outfit"
                            width={400}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// <div className="w-64 carousel rounded-box">
//   <div className="carousel-item w-full">
//                     <Image 
//                     src="/carousel/baroqueDuet.jpg" 
//                     alt="baroque duet"
//                     width={400}
//                     height={267}
//                     layout="responsive"
//                     objectFit="contain"
//                     />
//   </div> 
//   <div className="carousel-item w-full">
//     <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
//   </div> 
//   <div className="carousel-item w-full">
//     <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
//   </div> 
//   <div className="carousel-item w-full">
//     <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
//   </div> 
//   <div className="carousel-item w-full">
//     <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
//   </div> 
//   <div className="carousel-item w-full">
//     <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
//   </div> 
//   <div className="carousel-item w-full">
//     <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
//   </div>
// </div>
