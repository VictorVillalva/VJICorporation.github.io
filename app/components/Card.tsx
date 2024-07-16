'use client'
import Image from 'next/image'

interface myProps{
    title: string;
    description: string;
    img: string;
}

const card: React.FC<myProps> = ({img, title, description}) => {
    return (
        <>
        <div className="flex w-[329px] h-[300px] rounded-[5px] border border-zinc-100 bg-white hover:bg-pink-950 transition-colors duration-300  group">
            <div className="m-10 flex flex-col justify-start items-start gap-5">
                <svg></svg>
                <Image src={img} alt="" className='group-hover:fill-white transition-colors duration-300'/>
                <div className="flex flex-col justify-start items-start gap-2.5 ">
                    <p className='text-lg font-semibold text-pink-950 pb-[10px] group-hover:text-white transition-colors duration-300'>{title}</p>
                    <p className='text-sm group-hover:text-white transition-colors duration-300'>{description}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default card;