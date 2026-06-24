import "../styles/index.css"

function App() {


  return (
    <>
      <header className="flex justify-between px-2 py-1 border-2 border-border bg-bg text-text h-[10vh] w-full box-border items-center">
        <h1 className="text-2xl">Carteira facil</h1>
        <button className="bg-cta cursor-pointer border-2 border-border text-xl rounded-md py-2 px-8 ">Login</button>
      </header>
      <main className="bg-card min-h-screen"></main>

    </>
  )
}

export default App
