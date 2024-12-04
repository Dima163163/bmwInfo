import { CommentCar } from './comments'
import { Status } from './status'

export type Car = {
  id: string,
  brand: string,
  series: string,
  generation: string,
  model: string,
  text: string[],
  startProd: string,
  endProd: string,
  bodyTypes: string[],
  engines: string[],
  images: string[]
  comments: CommentCar[]
}

export type Cars = Car[]


export type SeriesValue = '1' | '2' | '3' | '4' | '5' | '6'| '7' | '8' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'all';

export type SeriesCars = SeriesValue[]

export interface CarsState {
  cars: Cars,
  car: Car | null,
  seriesCars: SeriesCars,
  statusCars: Status,
  statusSeries: Status,
  error: string | null
}