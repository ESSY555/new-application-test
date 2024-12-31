import React from 'react'

function Headers() {
    return (
        <div className='mt-8 mb-8'>


            <div className="flex px-4  gap-2  items-center float-right pr-5">
                <div className="relative flex items-center w-full max-w-xs sm:max-w-md lg:max-w-lg">
                    <input
                        type="text"
                        className="hover:cursor-pointer border border-gray-300 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search..."
                    />

                    <div className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                            />
                        </svg>
                    </div>
                </div>




                <img
                    src="../images/bell.png"
                    alt="Example"
                    style={{ width: '30px', height: 'auto' }}
                />

                <img
                    src="../images/contact.png"
                    alt="Example"
                    style={{ width: '30px', height: 'auto' }}
                />

                <img
                    src="../images/lady.png"
                    alt="Example"
                    style={{
                        width: '30px',
                        height: 'auto',
                    }}
                />
                <div
                    style={{
                        display: 'inline-block',
                        transform: 'rotate(90deg)',
                        fontSize: '15px',
                        marginLeft: '2px',
                    }}
                >
                    &gt;
                </div>


            </div>
        </div>
    );
}
export default Headers;

