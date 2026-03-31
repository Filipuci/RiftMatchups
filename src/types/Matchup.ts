import type { difficulty } from "../data/difficulty"

export type Matchup = {
  championName: string,
  difficult: difficulty,
  notes: string[],
  toDo: string[],
  notToDo: string[]
}