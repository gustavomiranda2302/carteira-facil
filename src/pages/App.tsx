import "../styles/index.css"
import wallet from "../assets/wallet.svg"
import { useNavigate } from "react-router-dom"
import Card from "../components/Card";

function App() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  }


  return (
    <>
      <header className="flex justify-between px-2 py-1 border-2 border-border bg-bg text-text h-[10vh] w-full  items-center overflow-hidden">
        <div className=" flex items-center   w-1/2 h-1/1 py-3 box-border">
          <img src={wallet} alt="icone-carteira" />
          <h1 className="text-2xl">Carteira facil</h1>
        </div >
        <div className=" flex px-4 w-1/2 h-12/12 justify-end items-center gap-2">
          <a href="#footer">
            <button className="bg-cta cursor-pointer border border-border text-md rounded-lg py-2 px-8 w-32 h-14 text-center ">Sobre</button>
          </a>
          <button className="bg-cta cursor-pointer border border-border text-md rounded-lg py-2 px-8 w-32 h-14 text-center hover:bg-accent " onClick={navigateToLogin}>Login</button>
        </div>
      </header>

      <main className="flex flex-col bg-card min-h-screen py-5 items-center gap-y-4">
        <h1 className="text-5xl text-text">Sua carteira inteligente, do jeito que você merece</h1>
        <h2 className="text-3xl text-text2">Investir na B3 nunca foi tão facil</h2>



        <div className=" flex border-2 border-red-500 min-h-[10%] w-fit overflow-hidden">



          <div className="flex animate-swipe hover-animate-stop shrink-0 flex-row w-max">
            <div className="flex shrink-0 min-w-full">

              <Card image={wallet} title="teste" text="teste texto" />
              <Card image={wallet} title="teste" text="teste texto" />
              <Card image={wallet} title="teste" text="teste texto" />

            </div>
            <div className="flex shrink-0 min-w-full" aria-hidden="true">
              <Card image={wallet} title="teste" text="teste texto" />
              <Card image={wallet} title="teste" text="teste texto" />
              <Card image={wallet} title="teste" text="teste texto" />


            </div>

          </div>


        </div>


      </main>
      <footer id="footer" className=" bg-bg min-h-10 " ><p>teste</p></footer>

    </>
  )
}

export default App
