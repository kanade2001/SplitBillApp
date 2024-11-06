import { Trip } from "@/types/trip";

export type TripAction =
  | { type: "FETCH_DETAIL"; payload: { trip: Trip } }
  | {
      type: "SET_FIELD";
      payload: { field: "title" | "status" | "description"; value: string };
    }
  | { type: "SERVER_CREATE"; payload: { state: Trip } }
  | { type: "SERVER_UPDATE"; payload: { state: Trip } };
