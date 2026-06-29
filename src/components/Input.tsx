import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
    placeholder: string
    type: string
}
export default function Input({ placeholder, type, ...props }: InputProps) {
    const [eye, toggleEye] = useState(false);
    const rtype = type === "password"
        ? (eye ? 'text' : "password")
        : type
    return (
        <div className={`relative ${props.className ?? ''}`} >
            <input type={rtype} name="email" id="mail" placeholder={placeholder} className="bg-primary/60 rounded-2xl shadow-md border border-border px-4 overflow-hidden w-full h-full text-clip pr-10" />
            <button className=" absolute right-3 top-1/2  -translate-y-1/2" onClick={() => toggleEye(!eye)}>
                {type === "password" ? (eye ? <EyeOff size={20} /> : <Eye size={20} />) : null}
            </button>
        </div>
    )
}



