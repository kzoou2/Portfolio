"use client";
import { useRouter } from "next/navigation";

export default function Modal({  id, children}) {
    const router = useRouter();
    const onClose = () => router.back();

    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/10 backdrop-blur-[6px]  dark:bg-black/40 dark:backdrop-blur-md py-10 px-4 sm:px-6 md:px-10 max-md:py-6 " onClick={onClose} >

            <div className="modal-scroll overflow-y-auto bg-white/100 dark:bg-[#1A1B1E] border border-white/10 shadow-xl relative  mx-auto max-h-[95vh] md:max-h-[96vh]
                w-full h-full max-md:rounded-xl max-md:p-4 sm:max-w-lg
                sm:w-auto sm:h-auto sm:rounded-2xl md:max-w-4xl lg:max-w-4xl p-4 sm:p-6 md:p-8 " onClick={(e) => e.stopPropagation()}>

                <div className="sticky z-10  flex justify-end top-2">
                    <button onClick={onClose} aria-label="Close"
                        className="font-semibold text-xl w-9 h-9 flex items-center justify-center rounded-full text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white
                                    backdrop-blur-sm transition bg-white/60 dark:bg-white/5 border border-gray-300/80 dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:bg-gray-300/70 dark:hover:bg-white/10">
                        ✕
                    </button>
                </div>
                
                <div>
                    {children}
                </div>
            </div>
        </div>
    
    );
};

