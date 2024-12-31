import React from 'react'

const Bottom = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-end mt-6 gap-4 mr-8 pb-5 mx-3">
                <button
                    className="px-6 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
                    onClick={() => alert('Cancel clicked')}
                >
                    Cancel
                </button>
                <button
                    className="px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none"
                    onClick={() => alert('Save as Draft clicked')}
                >
                    Save as Draft
                </button>
                <button
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    onClick={() => alert('Continue clicked')}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Bottom
