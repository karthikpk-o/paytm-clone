import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = ()=>{
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"}/>
                    <SubHeading label={"Enter your information to create an account"}/>
                    <InputBox label={"First Name"} placeholder={"John"}/>
                    <InputBox label={"Last Name"} placeholder={"Doe"}/>
                    <InputBox label={"Email"} placeholder={"johndoe@gmail.com"}/>
                    <InputBox label={"Password"} placeholder={"123456"}/>
                    <Button label={"Sign Up"} onClick={()=>{}}/>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
}