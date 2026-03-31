import { useEffect, useState } from "react"
import type { difficulty } from "../data/difficulty"
import { matchupsData } from "../data/matchupsData"

export const TableMatchups = () => {
  const difficultyBorder: Record<difficulty, string> = {
    easy: 'border-green-300',
    even: 'border-yellow-200',
    hard: 'border-orange-300',
    'very hard': 'border-red-400'
  }

  const [version, setVersion] = useState('')

  useEffect(() => {
    const fetchVersion = async () => {
      const res = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
      const versions = await res.json()
      setVersion(versions[0])
    }

    fetchVersion()

  }, [])

  const getChampionIcon = (version: string, champion: string) => {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`
  }

  return (
    <table className="w-3/4">
      <thead>
        <tr className="w-full bg-green-800">
          <th>Campeão</th>
          <th>Informações</th>
        </tr>
      </thead>

      <tbody>
        {matchupsData.map(champion => (
          <tr className="border-b border-gray-500" key={champion.championName}>
            <td>
              {version &&
                <img
                  src={getChampionIcon(version, champion.championName)}
                  alt={champion.championName}
                  className={`w-20 block mx-auto my-5 border-4 ${difficultyBorder[champion.difficult]}`}
                />
              }
            </td>

            <td className="flex gap-10 ml-20">
              <div className="my-3">
                <p className="font-bold">Notas:</p>
                <ul>
                  {champion.notes.map((note, index) => (
                    <li className="list-disc" key={index}>{note}</li>
                  ))}
                </ul>
              </div>

              <div className="my-3">
                <p className="font-bold">O que fazer:</p>
                <ul>
                  {champion.toDo.map((item, index) => (
                    <li className="list-disc" key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="my-3">
                <p className="font-bold">O que não fazer:</p>
                <ul>
                  {champion.notToDo.map((item, index) => (
                    <li className="list-disc" key={index}>{item}</li>
                  ))}
                </ul>
              </div>

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}