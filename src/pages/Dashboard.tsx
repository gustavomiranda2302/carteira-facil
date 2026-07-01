export default function Dashboard() {
    return (
        <div className="bg-bg h-screen w-full flex flex-col">
            <div className="w-full h-[10vh] bg-bg border-2 border-red-500 ">
            </div>
            <div className="flex-1 border-2 border-purple-600">
                <p>teste</p>
            </div>
            <div id="main" className="flex-2 border-2 border-amber-400 flex flex-row">
                <div className="border-2 border-green-500 h-full w-1/2">
                    <p>teste</p>



                </div>
                <div className="border-2 border-orange-700 h-full w-1/2">
                    <p>teste</p>



                </div>
            </div>
            <div id="footer" className="border-2 border-fuchsia-700 w-full h-[10vh]"></div>
        </div>
    )
}
