
export enum Weather {
  Rain = 'rain',
  Cloudy = 'cloudy',
  Sunny = 'sunny',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: visibility
  comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type newDiaryEntry = Omit<DiaryEntry, 'id'>
