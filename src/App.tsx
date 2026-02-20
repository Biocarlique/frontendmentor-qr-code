// import { useState } from "react";

function App() {
    return (
        <>
            <div className="bg-fm-slate-300 w-screen h-screen flex justify-center items-center">
                <div className="bg-white h-125 w-[320px] rounded-[1.2rem] p-4 flex-col text-center shadow-xl">
                    <img
                        src="/images/image-qr-code.png"
                        alt="qr-code"
                        className="rounded-[0.6rem]"
                    />
                    <h1 className="text-fm-slate-900 font-fm-outfit text-[1.375rem] font-bold mt-6 leading-6.5">
                        Improve your front-end skills by building projects
                    </h1>
                    <p className="font-fm-outfit text-fm-slate-500 text-[0.969rem] leading-[1.3rem] p-4">
                        Scan the QR code to visit Frontend Mentor and take your
                        coding skills to the next level
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
