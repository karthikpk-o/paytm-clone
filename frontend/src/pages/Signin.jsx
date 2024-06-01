import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { BottomWarning } from "../components/BottomWarning"

export const Signin = ()=>{
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign In"}/>
                    <SubHeading label={"Enter your information to login"}/>
                    <InputBox label={"Email"} placeholder={"johndoe@gmail.com"}/>
                    <InputBox label={"Password"} placeholder={"123456"}/>
                    <Button label={"Sign In"} onClick={()=>{}}/>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/"} />
                </div>
            </div>
        </div>
    )
}