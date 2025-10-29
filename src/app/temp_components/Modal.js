import React from "react";

const Modal = ({ children, onClose}) => {

    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50  py-10 px-10 max-md:px-4 max-md:py-4" onClick={onClose} >
            <div className="bg-white rounded-2xl max-w-4xl w-full p-5 relative" onClick={(e) => e.stopPropagation()}>  
                {children}



                {/* <div className="absolute top-8 -right-16 -translate-y-1/2 flex flex-col gap-3 items-center">
                    <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:text-black text-lg" >
                        ✕
                    </button>

                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:text-black text-lg">
                        🐙
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:text-black text-lg">
                        🌐
                    </a>
                </div> */}

            </div>
        </div>
    
    );
};

export default Modal;
