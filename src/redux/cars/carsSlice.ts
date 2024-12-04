import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car, Cars, CarsState, SeriesCars } from '../../types/cars';
import { Status } from '../../types/status';
import { getCars } from './getCars';
import { RootState } from '../store';
import { getCar } from './getCar';
import { getCarsBySeries } from './getCarsBySeries';
import { getSeriesCars } from './getSeriesCars';

const initialState: CarsState = {
  cars: [],
  car: null,
  seriesCars: [],
  statusCars: Status.IDLE,
  statusSeries: Status.IDLE,
  error: null
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  selectors: {
    selectCar: (state) => state.car,
    selectCars: (state) => state.cars,
    selectSecriesCars: (state) => state.seriesCars,
    selectCarsStatus: (state) => state.statusCars,
    selectSeriesStatus: (state) => state.statusSeries,
  },
  extraReducers: ({ addCase }) => {
    addCase(getCars.pending, (state) => {
      state.statusCars = Status.PENDING;
      state.error = null;
    });
    addCase(getCars.fulfilled, (state, { payload }: PayloadAction<Cars>) => {
      state.statusCars = Status.FULFILLED;
      state.cars = payload;
    });
    addCase(
      getCars.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.statusCars = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
      }
    );

    addCase(getCar.pending, (state) => {
      state.statusCars = Status.PENDING;
      state.error = null;
    });
    addCase(getCar.fulfilled, (state, { payload }: PayloadAction<Car>) => {
      state.statusCars = Status.FULFILLED;
      state.car = payload;
    });
    addCase(
      getCar.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.statusCars = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
      }
    );

    addCase(getSeriesCars.pending, (state) => {
      state.statusSeries = Status.PENDING;
      state.error = null;
    });
    addCase(
      getSeriesCars.fulfilled,
      (state, { payload }: PayloadAction<SeriesCars>) => {
        state.statusSeries = Status.FULFILLED;
        state.seriesCars = payload;
      }
    );
    addCase(
      getSeriesCars.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.statusSeries = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
      }
    );

    addCase(getCarsBySeries.pending, (state) => {
      state.statusCars = Status.PENDING;
      state.error = null;
    });
    addCase(
      getCarsBySeries.fulfilled,
      (state, { payload }: PayloadAction<Cars>) => {
        state.statusCars = Status.FULFILLED;
        state.cars = payload;
      }
    );
    addCase(
      getCarsBySeries.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.statusCars = Status.REJECTED;
        if (payload) {
          state.error = payload;
        }
      }
    );
  }
});

export const { selectCar, selectCarsStatus, selectCars, selectSecriesCars, selectSeriesStatus } = carsSlice.selectors;
export default carsSlice.reducer;
