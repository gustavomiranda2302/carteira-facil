import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";
import stock from "../assets/stockMarket.svg"
import pie from "../assets/pieGraph.svg"
import Card from "../components/Card";
import aporte from "../assets/aporte.svg"
import historico from '../assets/historico.svg'
import "../styles/index.css";

function App() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  }


  return (
    <>
      <header className="flex justify-between px-2 py-1 border-2 border-border bg-bg text-text h-[10vh] w-full  items-center overflow-hidden">
        <div className="box-border flex items-center w-1/2 py-3 h-1/1">
          <div className="text-anchor">
            <Wallet size={48} />
          </div>
          <h1 className="text-2xl">Carteira facil</h1>
        </div >
        <div className="flex items-center justify-end w-1/2 gap-2 px-4 h-12/12">
          <a href="#footer">
            <button className="w-32 px-8 py-2 text-center border rounded-lg cursor-pointer bg-transpparent border-border text-md h-14 hover:bg-primary/20">Sobre</button>
          </a>
          <button className="w-32 px-8 py-2 text-center border rounded-lg cursor-pointer bg-primary border-border text-md h-14 hover:bg-accent " onClick={navigateToLogin}>Login</button>
        </div>
      </header>

      <main className="flex flex-col items-center w-full min-h-screen p-4 py-5 bg-card gap-y-4">
        <h1 className="text-5xl text-text">Sua carteira inteligente, do jeito que você merece</h1>
        <h2 className="text-3xl text-text2">Investir na B3 nunca foi tão facil</h2>
        <p className=" text-text2">Investir bem começa por se organizar.
          Visualize sua carteira, acompanhe sua alocação ideal e decida seus próximos passos com mais segurança.</p>
        <div className="flex w-[45%] overflow-hidden  h-[35%]">



          <div className="flex flex-row animate-swipe hover-animate-stop shrink-0 h-[33vh] gap-4">
            <div className="flex gap-4 shrink-0">

              <Card image={stock} title="Mercado em tempo real" text="Acompanhe ações e FIIs com cotações atualizadas direto da B3." />
              <Card image={pie} title="Sua alocação ideal" text="Visualize o quanto cada ativo representa na sua carteira e onde rebalancear." />
              <Card image={aporte} title="Próximo aporte" text=" Saiba exatamente em qual ativo investir no próximo aporte para manter sua estratégia." />
              <Card image={historico} title="Evolução patrimonial" text="Acompanhe o crescimento da sua carteira ao longo do tempo." />



            </div>

            <div className="flex gap-4 shrink-0" aria-hidden="true">
              <Card image={stock} title="Mercado em tempo real" text="Acompanhe ações e FIIs com cotações atualizadas direto da B3." />
              <Card image={pie} title="Sua alocação ideal" text="Visualize o quanto cada ativo representa na sua carteira e onde rebalancear." />
              <Card image={aporte} title="Próximo aporte" text="Saiba exatamente em qual ativo investir no próximo aporte para manter sua estratégia." />
              <Card image={historico} title="Evolução patrimonial" text="Acompanhe o crescimento da sua carteira ao longo do tempo." />

            </div>

          </div>
        </div>
        <button className="p-4 mt-4 text-xl border rounded-lg cursor-pointer bg-cta border-primary text-text hover:bg-accent" onClick={navigateToLogin}>Começar agora</button>




      </main>
      <footer id="footer" className="flex bg-bg min-h-10" ><p>teste</p></footer>

    </>
  )
}

export default App
