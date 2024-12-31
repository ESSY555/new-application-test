import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {

            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };


        document.addEventListener('mousedown', handleClickOutside);


        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className=''>

            <button
                ref={toggleButtonRef}
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Toggle sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>


            <aside
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
                aria-label="Sidebar"
            >
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <div className='flex pb-5 pl-2'>
                            <img
                                src="../images/map.png"
                                alt="Example"
                                style={{ width: '50px', height: 'auto' }}
                            />
                            <p className='text-center'>Medical advanced platform</p>
                        </div>
                        <li>
                            <Link
                                to="/"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="../images/Vector.png"
                                    alt="Example"
                                    style={{ width: '25px', height: 'auto' }}
                                />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <img
                                    src="../images/Inventory.png"
                                    alt="Example"
                                    style={{ width: '25px', height: 'auto' }}
                                />
                                <span class="flex-1 ms-3 whitespace-nowrap">Inventory</span>
                            </a>
                        </li>
                        <li className="relative bg-[#E3EAFB]">
                            <button
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                                onClick={() => {
                                    // Logic to toggle dropdown visibility
                                    const dropdown = document.getElementById('dropdown-procurement');
                                    dropdown.classList.toggle('hidden');
                                }}
                            >
                                <img
                                    src="../images/procurement.png"
                                    alt="Example"
                                    style={{ width: '25px', height: 'auto' }}
                                />
                                <span className="flex-1 -ml-[50px] whitespace-nowrap">Procurement</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 ml-auto text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <ul
                                id="dropdown-procurement"
                                className="absolute hidden bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600 mt-2 w-full z-10"
                            >
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <a href="#" className="text-gray-900 dark:text-white">
                                        Sub-item 1
                                    </a>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <a href="#" className="text-gray-900 dark:text-white">
                                        Sub-item 2
                                    </a>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <a href="#" className="text-gray-900 dark:text-white">
                                        Sub-item 3
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="relative bg-[#E3EAFB]">
                            <Link
                                to="/Information "  
                                className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="text-black ml-[35px]">Quotes</span>
                            </Link>
                            <ul
                                id="dropdown-quotes"
                                className="absolute hidden bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600 mt-2 w-full z-10"
                            >
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <a href="#" className="text-gray-900 dark:text-white">
                                        Sub-item 1
                                    </a>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <a href="#" className="text-gray-900 dark:text-white">
                                        Sub-item 2
                                    </a>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <a href="#" className="text-gray-900 dark:text-white">
                                        Sub-item 3
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <span class="flex-1 pl-6 ms-3 whitespace-nowrap">Orders</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <img
                                    src="../images/Finance.png"
                                    alt="Example"
                                    style={{ width: '25px', height: 'auto' }}
                                />
                                <span class="flex-1 ms-3 whitespace-nowrap">Finance</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <img
                                    src="../images/communication.png"
                                    alt="Example"
                                    style={{ width: '25px', height: 'auto' }}
                                />
                                <span class="flex-1 ms-3 whitespace-nowrap">Communication</span>
                                <span class="inline-flex items-center text-center justify-center px-2 ms-3 text-sm font-medium  bg-[#175CFF] text-white rounded-full">10</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <img
                                    src="../images/calender.png"
                                    alt="Example"
                                    style={{ width: '25px', height: 'auto' }}
                                />
                                <span class="flex-1 ms-3 whitespace-nowrap">Calender</span>
                                <span class="inline-flex items-center text-center justify-center px-2 ms-3 text-sm font-medium  bg-[#175CFF] text-white rounded-full">10</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <img
                                    src="../images/contract.png"
                                    alt="Example"
                                    style={{ width: '25px', height: 'auto' }}
                                />
                                <span class="flex-1 ms-3 whitespace-nowrap">Contracts</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>



        </div>
    )
}

export default Sidebar
