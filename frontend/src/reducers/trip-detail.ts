import { TripDetail } from "@/types/trip-detail";
import { TripDetailAction } from "@/actions/trip-detail";

export function tripDetailReducer(
  state: TripDetail,
  action: TripDetailAction,
): TripDetail {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        ...action.payload.trip,
        loading: false,
        error: null,
      };
    case "SET_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        loading: false,
        error: null,
      };
    case "SERVER_CREATE":
      return {
        ...state,
        ...action.payload.state,
        loading: false,
        error: null,
      };
    case "SERVER_UPDATE":
      return {
        ...state,
        ...action.payload.state,
        loading: false,
        error: null,
      };
    case "SET_LOADING":
    default:
      throw new Error("Unhandled action type");
  }
}
