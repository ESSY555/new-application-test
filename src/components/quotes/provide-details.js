import React, { useState } from 'react';
import Bottom from './bottom-button';

const Details = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [dateValue, setDateValue] = useState('');
    const [departmentValue, setDepartmentValue] = useState('');


    const clearDepartmentInput = () => {
        setDepartmentValue('');
    };


    const formatDateInput = (value) => {

        let formattedValue = value.replace(/[^0-9/-]/g, '');


        if (formattedValue.length > 10) {
            formattedValue = formattedValue.slice(0, 10);
        }


        if (formattedValue.length > 4 && formattedValue[4] !== '-' && formattedValue[4] !== '/') {
            formattedValue = `${formattedValue.slice(0, 4)}-${formattedValue.slice(4)}`;
        }
        if (formattedValue.length > 7 && formattedValue[7] !== '-' && formattedValue[7] !== '/') {
            formattedValue = `${formattedValue.slice(0, 7)}-${formattedValue.slice(7)}`;
        }

        return formattedValue;
    };

    const dropdownOptions = [
        { id: 'dropdown1', options: ['Blue', 'Option 2', 'Option 3'] },
        { id: 'dropdown2', options: ['Blue', 'Option 2', 'Option 3'] },
        { id: 'dropdown3', options: ['Blue', 'Option 2', 'Option 3'] },
        { id: 'dropdown4', options: ['Blue', 'Option 2', 'Option 3'] },
    ];

    const inputData = [
        { id: 1, value: '100', label: 'Pack' },
        { id: 2, value: '100', label: 'Pack' },
        { id: 3, value: '100', label: 'Pack' },
        { id: 4, value: '100', label: 'Pack' },
    ];

    const dateFields = [
        { id: 1, placeholderDate: "2024-12-02", description: "Calculated based on lead time and issue date" },
        { id: 2, placeholderDate: "2024-12-15", description: "Estimated delivery from the shipping date" },
        { id: 3, placeholderDate: "2024-12-20", description: "Delivery expected within the given timeframe" },
        { id: 4, placeholderDate: "2024-12-25", description: "Final estimated delivery date" },
    ];
    const inputs = [
        '$ 12.2',
        '$ 12.2',
        '$ 12.2',
        '$ 12.2',
    ];
    return (
        <div className='rounded-lg p-7 border'>
            <div className="pb-5">
                <p className="font-bold">Request for Quote</p>
                <p className="text-[13px]">Fill out these details to send the RFQ</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-5">

                <div className="flex flex-col">
                    <label htmlFor="input1" className="text-sm pb-2 font-medium">
                        RFQ No
                    </label>
                    <input
                        type="text"
                        id="input1"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="RFQ-10234"
                    />
                </div>


                <div className="flex flex-col">
                    <label htmlFor="input2" className="text-sm pb-2 font-medium">
                        Title
                    </label>
                    <input
                        type="text"
                        id="input2"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Request for Equipments"
                    />
                </div>


                <div className="flex flex-col">
                    <label htmlFor="input3" className="text-sm pb-2 font-medium">
                        Department
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="input3"
                            value={departmentValue}
                            onChange={(e) => setDepartmentValue(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Maternity"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                            onClick={clearDepartmentInput}
                        >
                            ✖
                        </button>
                    </div>
                </div>


                <div className="flex flex-col">
                    <div>
                        <label htmlFor="date" className="text-sm pb-4 font-medium">
                            Expected delivery date
                        </label>
                        <div className="relative flex pt-2 items-center">

                            <div className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                                <img
                                    src="../images/date.png"
                                    alt="Example"
                                    style={{ width: '25px', height: 'auto' }}
                                />
                            </div>


                            {!isFocused && !dateValue && (
                                <span className="absolute inset-y-0 left-12 flex items-center text-gray-700 text-sm">
                                    2024-12-02
                                </span>
                            )}


                            <input
                                type="text"
                                id="date"
                                className="border border-gray-300 rounded-lg p-2 pl-32 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={dateValue}
                                onChange={(e) => setDateValue(formatDateInput(e.target.value))}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                placeholder=""
                                inputMode="numeric" 
                            />

                        </div>
                        <p className='text-gray-600 pt-2'>Calculated based on lead time and issue date</p>
                    </div>
                </div>
            </div>


            <div className='relative'>
                <div className="overflow-x-auto">
                    <p className='font-bold pt-6 pb-2'>Add Items</p>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 text-left">Items</th>
                                <th className="px-4 py-2 text-left">Variant</th>
                                <th className="px-4 py-2 text-left">Quantity</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left text-nowrap">Expected Delivery Day</th>
                                <th className="px-4 py-2 text-left">Amount</th>
                                <th className="px-4 py-2 text-left">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">
                                    <div className='flex-1'>

                                        <div className="flex flex-col pb-3">
                                            <select id="dropdown1" className="border bg-[#F0F2F5] border-gray-400 rounded-lg py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="option1">Oxygen concentrator</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col pb-3">
                                            <select id="dropdown1" className="border bg-[#F0F2F5] border-gray-400 rounded-lg py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="option1">Mechanical Ventilator</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col pb-3">
                                            <select id="dropdown1" className="border bg-[#F0F2F5] border-gray-400 rounded-lg py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="option1">Patient Monitor</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col">
                                            <select id="dropdown1" className="border bg-[#F0F2F5] border-gray-400 rounded-lg py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option value="option1">Mechanical Ventilator</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className='flex-1'>
                                        {dropdownOptions.map((dropdown, index) => (
                                            <div className="flex flex-col pb-3" key={index}>
                                                <select
                                                    id={dropdown.id}
                                                    className="border border-gray-300 rounded-lg py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                    {dropdown.options.map((option, optionIndex) => (
                                                        <option value={`option${optionIndex + 1}`} key={optionIndex}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className=''>
                                        {inputData.map((data) => (
                                            <div key={data.id} className="relative w-full max-w-xs p-2 ">
                                                <input
                                                    type="text"
                                                    className="border border-gray-300 rounded-lg p-2 pl-12 pr-12 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder=""
                                                />

                                                <div className="absolute top-5 left-0 right-0 flex justify-between px-4">
                                                    <p className="text-gray-600">
                                                        {data.value}
                                                    </p>

                                                    <p className="bg-gray-100 text-center px-2 rounded-full">
                                                        {data.label}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex flex-col gap-2 my-2">
                                        {inputs.map((placeholder, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                className="p-3 rounded-lg border"
                                                placeholder={placeholder}
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td className="px-4 py-2">
                                    <div className="flex flex-col space-y-[18px]">
                                        {dateFields.map((field) => (
                                            <div key={field.id} className="flex flex-col">
                                                <div>

                                                    <div className="relative flex items-center">
                                                        <div className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                                                            <img
                                                                src="../images/date.png"
                                                                alt="Example"
                                                                style={{ width: "25px", height: "auto" }}
                                                            />
                                                        </div>

                                                        {!isFocused && !dateValue && (
                                                            <span className="absolute inset-y-0 left-12 flex items-center text-gray-700 text-sm">
                                                                {field.placeholderDate}
                                                            </span>
                                                        )}

                                                        <input
                                                            type="text"
                                                            id={`date-${field.id}`}
                                                            className="border border-gray-300 rounded-lg p-2 pl-32 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            value={dateValue}
                                                            onChange={(e) => setDateValue(formatDateInput(e.target.value))}
                                                            onFocus={() => setIsFocused(true)}
                                                            onBlur={() => setIsFocused(false)}
                                                            placeholder=""
                                                            inputMode="numeric"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </td>
                                {/* 
                                <div className="flex-shrink-0">
                                            <img
                                                src={row.image}
                                                alt="Example"
                                                className="w-8 h-8 object-cover"
                                            />
                                        </div> */}
                                <td className="px-4 py-2 ">
                                    <div>
                                        <p className='font-bold pb-10'>12000.00</p>
                                        <p className='font-bold pb-10'>12000.00</p>
                                        <p className='font-bold pb-10'>12000.00</p>
                                        <p className='font-bold'>12000.00</p>
                                    </div>
                                </td>

                                <td className="px-4 py-2">
                                    <div className='flex-shrink-0'>
                                        <div className='flex-shrink-0'>
                                            <img
                                                className='pb-14 '
                                                src="../images/delet.png"
                                                alt="Example"
                                                style={{
                                                    width: '80px',
                                                    height: 'auto',
                                                }}
                                            /></div>
                                        <div className='flex-shrink-0'>
                                            <img
                                                className='pb-10 -mt-5'
                                                src="../images/delet.png"
                                                alt="Example"
                                                style={{
                                                    width: '80px',
                                                    height: 'auto',
                                                }}
                                            />
                                        </div>

                                        <div className='flex-shrink-0'>
                                            <img
                                                className='pb-10'
                                                src="../images/delet.png"
                                                alt="Example"
                                                style={{
                                                    width: '30px',
                                                    height: 'auto',
                                                }}
                                            />
                                        </div>

                                        <div className='flex-shrink-0'>
                                            <img
                                                className=''
                                                src="../images/delet.png"
                                                alt="Example"
                                                style={{
                                                    width: '30px',
                                                    height: 'auto',
                                                }}
                                            />
                                        </div>

                                    </div>
                                </td>
                            </tr>

                            <tr className='border-t mt-5'>
                                <td colSpan={5} className='text-right pr-4 pt-3'>Sub Total</td>
                                <td colSpan={5} className='pl-5 pt-3'>$1200.00</td>

                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>


            <div className='inline-block mt-20'>
                <div>
                    <label className='font-bold block'>Note</label>
                    <input type='text' className='pb-8 pt-2 px-12 rounded border' placeholder='enter Note here' /></div>
                <p className='float-right'>0/200</p>
            </div>

            <Bottom />
        </div>
    );
};

export default Details;
