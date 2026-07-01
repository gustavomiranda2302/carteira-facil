import { useNavigate } from "react-router-dom";
import "../styles/index.css";
import "../components/Input";
import Input from "../components/Input";
import { Google, Facebook } from "../assets/icons/index"
export default function Login() {
    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate("/dashboard");
    }

    return (
        <div className=" w-full min-h-screen flex flex-col">
            <div className="w-full h-[10vh] bg-bg ">
            </div>
            <div className="w-full h-[80vh] bg-border flex flex-col justify-center items-center">
                <div className="bg-text w-1/3 h-2/3 flex flex-col items-center pt-4 shadow-lg/20 shadow-primary rounded-2xl gap-y-4" >
                    <h1 className="text-2xl">Bem-vindo de volta!</h1>
                    <Input className="h-1/10 w-2/3" type="email" placeholder={"insira seu e-mail"} />
                    <Input className="h-1/10 w-2/3" type="password" placeholder={"insira sua senha"} />
                    <button className="w-32 px-8 py-2 text-center border rounded-lg cursor-pointer bg-primary border-border text-md h-14 hover:bg-accent " onClick={navigateToDashboard}>Login</button>
                    <p className="text-text2">ou entre com</p>
                    <div className=" flex ">
                        <Google className=" text-primary w-20 h-15 hover:cursor-pointer" />
                        <Facebook className=" text-primary w-20 h-15 hover:cursor-pointer" />
                    </div>
                    <p className="text-text2">Manter Logado</p>
                    <input type="checkbox" name="keepLogin" id="KeepLogin" title='a' placeholder="" className="mt-0" />
                </div>
            </div>
            <div className="bg-bg h-[10vh]">
            </div>

        </div>


    )
}
