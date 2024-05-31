import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"

export const Signin = ()=>{
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign In"}/>
                    <SubHeading label={"Enter your information to login"}/>
                </div>
            </div>
        </div>
    )
}