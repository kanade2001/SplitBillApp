import { TripDetail } from "@/types/trip-detail";

export type TripDetailAction =
  | { type: "FETCH_DETAIL"; payload: { trip: TripDetail } }
  | {
      type: "SET_FIELD";
      payload: { field: "title" | "status" | "description"; value: string };
    }
  | { type: "SERVER_CREATE"; payload: { state: TripDetail } }
  | { type: "SERVER_UPDATE"; payload: { state: TripDetail } }
  | { type: "SET_LOADING"; payload: { loading: boolean } };
