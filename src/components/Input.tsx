import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Login from "../pages/Login";
interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
    placeholder: string
    type?: string
}
export function InputPassword({ placeholder, ...props }: InputProps) {
    const [eye, toggleEye] = useState(false);
    return (
        <div className={`relative ${props.className ?? ''}`} >
            <input type={eye ? 'text' : 'password'} name="email" id="mail" placeholder={placeholder} className="bg-primary/60 rounded-2xl shadow-md border border-border px-4 overflow-hidden w-full h-full text-clip pr-10" />
            <button className=" absolute right-3 top-1/2  -translate-y-1/2" onClick={() => toggleEye(!eye)}>
                {eye ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
    )

}