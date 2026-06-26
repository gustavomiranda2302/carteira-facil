import { useNavigate } from "react-router-dom";
import google from "../assets/google-svgrepo-com.svg"
import facebook from "../assets/facebook-svgrepo-com.svg"
import "../styles/index.css";
export default function Login() {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/dashboards");
    }

    return (
        <div className=" w-full min-h-screen flex flex-col">
            <div className="w-full h-[10vh] bg-bg ">
                <p className="text-white">a</p>
            </div>
            <div className="w-full h-[80vh] bg-border flex flex-col justify-center items-center">
                <div className="bg-text w-1/3 h-2/3 flex flex-col items-center pt-4 shadow-lg/20 shadow-primary rounded-2xl gap-y-4" >
                    <h1 className="text-2xl">Bem-vindo de volta!</h1>
                    <input type="email" name="email" id="mail" placeholder="insira seu e-mail" className="bg-primary/60 rounded-2xl shadow-md border border-border px-4 overflow-hidden w-2/3 h-1/10 text-clip" />
                    <input type="password" name="email" id="senha" placeholder="insira sua senha" className="bg-primary/60 rounded-2xl shadow-md border border-border px-4 overflow-hidden w-2/3 h-1/10 text-clip" />
                    <button className="w-32 px-8 py-2 text-center border rounded-lg cursor-pointer bg-primary border-border text-md h-14 hover:bg-accent " onClick={navigateToLogin}>Login</button>
                    <p className="text-text2">ou entre com</p>
                    <div className=" flex ">
                        <img src={google} alt="google" className=" w-20 h-15 hover:cursor-pointer" />
                        <img src={facebook} alt="facebook" className=" w-20 h-15 hover:cursor-pointer" />
                    </div>
                    <p className="text-text2">Manter Logado</p>
                    <input type="checkbox" name="keepLogin" id="KeepLogin" title='a' placeholder="" className="mt-0" />
                </div>
            </div>
            <div className="bg-bg">
                <p className="text-white w-full h-[10vh]">a</p>
            </div>
        </div>


    )
}