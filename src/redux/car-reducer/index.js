const carStateDefault = "/images/cars/red-car.jpg";

export function carReducer(state = carStateDefault, action) {
  switch (action.type) {
    case "change-img": {
      // payload: color
      // state = `/images/cars/${action.payload}-car.jpg`;

      state = action.payload;

      return state;
    }
    default:
      return state;
  }
}
