import React, { useState } from "react"
import { FaCamera } from "react-icons/fa6"
const EditUserModal = ({ EditUserModal }) => {
    return (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
            <div
                onClick={EditUserModal}
                className="w-full h-full top-0 left-0 right-0 bottom-0 fixed 
                bg-[rgba(49,49,49,0.8)]"></div>
            <div className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 bg-[#f1f1f1] p-4 max-w-[500px] w-full">
                <div className="flex items-center justify-between">
                    <h2>Edit Details</h2>
                    <button onClick={EditUserModal} className="border rounded text-white bg-projectRed-2 py-1  px-3">
                        close
                    </button>
                </div>
                <input
                    className="block outline-none px-2 py-1 border rounded w-full my-4"
                    placeholder="username"
                    type="text" />
                <input
                    className="block outline-none px-2 py-1 border rounded w-full mb-4"
                    placeholder="email"
                    type="email" />
                <button
                    className="block outline-none p-2 border bg-projectRed-2 text-white rounded w-full mb-4">
                    Submit
                </button>
            </div>
        </div>
    )
}
const EditUserPhotoModal = ({ EditUserPhotoModal }) => {

    return (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
            <div
                onClick={EditUserPhotoModal}
                className="w-full h-full top-0 left-0 right-0 bottom-0 fixed 
                bg-[rgba(49,49,49,0.8)]"></div>
            <div
                className="absolute top-[40%] left-[50%] -translate-x-2/4 -translate-y-2/4 p-4 max-w-[500px] w-full  bg-[#f1f1f1]">
                <div className="flex items-center justify-between">
                    <h2>Edit Profile Pic</h2>
                    <button
                        onClick={EditUserPhotoModal}
                        className="border rounded text-white bg-projectRed-2 py-1  px-3">
                        close
                    </button>
                </div>
                <label
                    className="grid gap-2"
                    htmlFor="">
                    Select Image
                    <div className=" w-fit cursor-pointer border rounded bg-white shadow py-1 border-red-500 flex items-center">
                        <FaCamera className="mx-2" />
                        <input
                            className="file:hidden w-full cursor-pointer"
                            type="file"
                            src=""
                            alt="" accept="image/*" />
                    </div>
                </label>
            </div>
        </div>
    )
}

const LoadingScreen = () => {
    return (
        <section className=' h-full w-full fixed top-0 left-0 flex z-30 justify-center items-center'>
            <div
                className="w-full h-full top-0 left-0 right-0 
                bottom-0 fixed bg-[rgba(49,49,49,0.8)]"></div>
            <div className='absolute top-[50%] left-[50%]
             -translate-x-2/4 -translate-y-2/4 transition-all
             duration-200 ease-out rounded-lg overflow-hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <g transform="rotate(0 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(30 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(60 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(90 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(120 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(150 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(180 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(210 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(240 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(270 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(300 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g><g transform="rotate(330 50 50)">
                        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#EB0029">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" fill="#EB0029"></animate>
                        </rect>
                    </g>
                </svg>
            </div>
        </section>
    )
}

export { EditUserModal, EditUserPhotoModal, LoadingScreen }