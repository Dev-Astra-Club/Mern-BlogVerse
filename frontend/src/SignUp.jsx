const SignUp = () => {
    return (
        <div className="bg-gray-100 min-h-screen gap-5 flex flex-col">
            <div className=" flex justify-center pt-5 ">
                <p className="text-4xl font-bold text-blue-600">Join BlogVerse</p>
            </div>
            <div className="flex justify-center">
                <p className="text-xl text-center text-gray-600">Create your account and <br />start your blogging journey today</p>
            </div>
            <div className="flex justify-center">
                <form className="shadow-2xl gap-5 pt-7 pb-5 px-4 mb-5 bg-white w-1/3 flex flex-col justify-center items-center rounded-3xl">
                    <div className=" w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Full Name</p>
                        <input className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500" type="text" placeholder="Enter your full name" />
                    </div>
                    <div className=" w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Email Address</p>
                        <input className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500" type="text" placeholder="Enter your email address" />
                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Password</p>
                        <input className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500" type="text" placeholder="Enter your password" />
                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                        <input className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500" type="text" placeholder="Confirm your password" />
                    </div>
                    <div className="rounded-lg pl-5 items-center border-gray-300 flex border w-[90%] py-3 px-2  bg-gray-100">
                        <input type="checkbox" className="h-5 w-5 " /><p className="pl-3 text-gray-700">I agree to the Terms of Service and Privacy Policy</p>
                    </div>
                    <div className="w-[90%] flex justify-center py-4 bg-purple-600 rounded-xl">
                        <button type="submit" className="text-white">Create Account</button>
                    </div>
                    <div className="border-[0.5px] my-5 w-[90%] text-gray-200 "></div>
                    <div className="flex flex-col items-center gap-3 w-[90%] ">
                        <div>
                            <p className="text-gray-600 ">Already have an account? <span className="text-purple-600 font-semibold">Sign In Here</span> </p>
                        </div>
                        <div className="">
                            <button className="text-gray-600 p-4 hover:bg-gray-200 rounded-lg">Back to Home</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;