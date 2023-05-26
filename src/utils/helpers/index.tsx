import { type Event } from "@/types"

export const getFilterEventScores = (event: Event, scoreKeys: string[]) => {
  return Object.entries(event)
  .filter(([key]) => scoreKeys.includes(key))
  .map(([key, value]) => value)
}

export const convertPercentage = (val1: string, val2: string) => {
  const total = Number(val1) + Number(val2)
  const homePercentage = (Number(val1) * 100) / total
  const awayPercentage = 100 - homePercentage

  return { homePercentage, awayPercentage }
}

export const valueWithoutPercentage = (val: string) => {
  return val.split('%')[0].trim()
}

export const chunkPlayerList = () => {

}