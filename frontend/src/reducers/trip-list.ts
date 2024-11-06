import { TripList } from "@/types/trip";
import { TripListAction } from "@/actions/trip-list";

export function tripListReducer(
  state: TripList,
  action: TripListAction,
): TripList {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        trips: action.payload.trips,
        loading: false,
        error: null,
      };
    case "SORT":
      const sortedtrips = [...state.trips].sort((a, b) => {
        if (action.payload.orderBy === "ascending") {
          return a[action.payload.sortBy] > b[action.payload.sortBy] ? 1 : -1;
        } else {
          return a[action.payload.sortBy] < b[action.payload.sortBy] ? 1 : -1;
        }
      });
      return {
        ...state,
        trips: sortedtrips,
        loading: false,
        error: null,
      };
    default:
      throw new Error("Unhandled action type");
  }
}