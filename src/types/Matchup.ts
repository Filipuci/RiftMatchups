import type { difficulty } from "./difficulty"

export type Matchup = {
  championName: string,
  difficult: difficulty,
  notes: string[],
  toDo: string[],
  notToDo: string[]
}