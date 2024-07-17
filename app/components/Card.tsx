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
        <div className="flex w-[329px] h-[300px] rounded-[5px] border border-zinc-100 bg-white hover:shadow-md transition-colors duration-300 ">
            <div className="m-10 flex flex-col justify-start items-start gap-5">
                <Image src={img} alt="" className='group-hover:fill-white transition-colors duration-300'/>
                <div className="flex flex-col justify-start items-start gap-2.5 ">
                    <p className='text-lg font-semibold text-pink-950 pb-[10px]'>{title}</p>
                    <p className='text-sm '>{description}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default card;