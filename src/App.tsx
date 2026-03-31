import { TableMatchups } from "./components/TableMatchups"

const App = () => {
  return (
    <div className="min-h-dvh bg-zinc-900 flex flex-col items-center justify-center">

      <input
        className="mt-5 outline-none border border-gray-500 rounded-md w-1/2 px-2 py-2"
        type="text"
        placeholder="Procure um campeão..."
      />

      <h1 className="my-5 font-bold text-3xl">Camille matchups</h1>

      <TableMatchups />
    </div>
  )
}

export default App