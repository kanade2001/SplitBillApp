import { Trip } from "@/store/types/trip";
import { TripAction } from "@/store/actions/trip";

export function tripReducer(state: Trip, action: TripAction): Trip {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        ...action.payload.trip,
      };
    case "SET_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "SERVER_CREATE":
      return {
        ...state,
        ...action.payload.state,
      };
    case "SERVER_UPDATE":
      return {
        ...state,
        ...action.payload.state,
      };
    default:
      throw new Error("Unhandled action type");
  }
}
