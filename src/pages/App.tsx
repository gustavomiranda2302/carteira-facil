import "../styles/index.css"
import wallet from "../assets/wallet.svg"
function App() {


  return (
    <>
      <header className="flex justify-between px-2 py-1 border-2 border-border bg-bg text-text h-[10vh] w-full  items-center overflow-hidden">
        <div className=" flex items-center  border border-amber-400 w-1/2 h-1/1 py-3 box-border">
          <img src={wallet} alt="icone-carteira" />
          <h1 className="text-2xl">Carteira facil</h1>
        </div >
        <div className=" flex px-4 border border-red-500 w-1/2 h-12/12 justify-end items-center gap-2">
          <a href="#footer">
            <button className="bg-cta cursor-pointer border border-border text-md rounded-lg py-2 px-8 w-32 h-14 text-center ">Sobre</button>
          </a>
          <button className="bg-cta cursor-pointer border border-border text-md rounded-lg py-2 px-8 w-32 h-14 text-center hover:bg-accent">Login</button>

        </div>

      </header>
      <main className="bg-card min-h-screen"></main>
      <footer id="footer" className=" bg-bg min-h-10 text-text" ><p>teste</p></footer>

    </>
  )
}

export default App
