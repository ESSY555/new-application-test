import React, { useState } from 'react';
import Bottom from './bottom-button';

const Review = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Handle checkbox click
    const handleCheckboxChange = (index) => {
        // If the same checkbox is clicked, unselect it, otherwise select the new one
        setSelectedIndex(index === selectedIndex ? null : index);
    };

    const rows = [
        { item: 'Oxygen concentrator', variant: 'Blue', p1: '#28373', qty: '100 pieces', price: '$200.00', amount: '$2,000.0', date: '01 Jan 2024', image: '../images/Leading media.png', },
        { item: 'Mechanical ventilator', variant: 'NIL', p2: '#28374', qty: '45 Kg', price: '$350.00', amount: '$2,500.00', date: '05 Jan 2024', image: '../images/Leading media.png', },
        { item: 'Patient Monitor', variant: 'Blue', p3: '#28375', qty: '30 Units', price: '$300.00', amount: '$1,500', date: '10 Jan 2024', image: '../images/Leading media.png', },
        { item: 'Mechanical ventilator', variant: 'Blue', p4: '#28376', qty: '36 Units', price: '$200.00', amount: '$1,500', date: '15 Jan 2024', image: '../images/Leading media.png', },
    ];

    const totalExpenditure = rows.reduce((total, row) => {
        const amount = parseFloat(row.amount.replace('$', '').replace(',', '')); // Convert amount to numeric value
        return total + amount;
    }, 0);

    return (
        <div className=''>
            <div className='rounded-lg border p-7'>
                <div className="flex  justify-between items-center">
                    <div>
                        <p className="font-bold">Request Information</p>
                        <p className="text-[13px]">Provide details about the RFQ</p>
                    </div>
                    <img
                        className='hover:cursor-pointer'
                        src="../images/pen.png"
                        alt="Example"
                        style={{ width: "25px", height: "auto" }}
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center md:gap-[20rem]">
                    <div className="pt-5 whitespace-nowrap">
                        <p className="text-gray-600">RFQ No</p>
                        <p className="text-gray-600">Request</p>
                        <p className="text-gray-600">Department</p>
                        <p className="text-gray-600">Expected delivery date</p>
                    </div>
                    <div className="pt-5">
                        <p className="font-bold">Request for equipment</p>
                        <p className="font-bold">#RQ 01234</p>
                        <div className="flex gap-3">
                            <p className="font-bold rounded-full w-8 h-8 text-center bg-[#FFECE5] flex items-center justify-center">
                                JD
                            </p>
                            <p className="text-[#344054]">Jane Doe</p>
                            <p className="text-[#98A2B3]">*</p>
                            <p className="text-[#98A2B3]">Head Nurse, Paediatrics</p>
                        </div>
                        <p className="font-bold whitespace-nowrap">Expected delivery date</p>
                    </div>
                </div>

            </div>

            <div className='rounded-lg p-7 border mt-8'>
                <div className="overflow-x-auto">
                    <p className="font-bold">Item(s)</p>
                    <table className="min-w-full rounded-lg border-collapse border-r border-l border-b border-spacing-0">
                        <thead>
                            <tr className="border-b border-t">
                                <th className="px-4 py-2 text-left">Select</th> {/* New column header for the checkbox */}
                                <th className="px-4 py-2 text-left">Items</th>
                                <th className="px-4 py-2 text-left">Variants</th>
                                <th className="px-4 py-2 text-left">Quantity</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left">Amount</th>
                                <th className="px-4 py-2 text-left">Expected Delivery Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2 text-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-blue-600"
                                            checked={selectedIndex === index}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                    </td>
                                    <td className="px-4 py-2 flex gap-3 items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={row.image}
                                                alt="Example"
                                                className="w-8 h-8 object-cover"
                                            />
                                        </div>
                                        <div className="text-[14px]">
                                            {row.item}
                                            <p>{row.p1 || row.p2 || row.p3 || row.p4}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">{row.variant}</td>
                                    <td className="px-4 py-2">{row.qty}</td>
                                    <td className="px-4 py-2">{row.price}</td>
                                    <td className="px-4 py-2">{row.amount}</td>
                                    <td className="px-4 py-2">{row.date}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={6} className="px-4 py-2 text-right font-bold">Sub Total:</td>
                                <td className="px-4 py-2 font-bold">${totalExpenditure.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colSpan={6} className="px-4 py-2 text-right font-bold">Total:</td>
                                <td className="px-4 py-2 font-bold">${totalExpenditure.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>






            <div className="relative mt-[3rem] pb-8">
                <select className="block w-full px-4 py-5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    <option value="option1">&#8203;</option>
                    <option value="option2">Option 2</option>

                </select>


                <div className="absolute top-0 left-0 p-2">
                    <div className="flex gap-4">
                        <img
                            src="../images/best.png"
                            alt="Example"
                            style={{ width: '35px', height: 'auto' }}
                        />
                        <div>
                            <p className="font-bold">Terms and Attachments</p>
                            <p className="text-[13px]">Review payment and delivery terms</p>
                        </div>
                    </div>
                </div>
            </div>

            <Bottom />
        </div>

    );
};

export default Review;
