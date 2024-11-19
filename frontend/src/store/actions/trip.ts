import { Trip, TripSettableFields } from "@/store/types/trip";

export type TripAction =
  | { type: "FETCH_DETAIL"; payload: { trip: Trip } }
  | {
      type: "SET_FIELD";
      payload: {
        field: TripSettableFields;
        value: string;
      };
    }
  | { type: "SERVER_CREATE"; payload: { state: Trip } }
  | { type: "SERVER_UPDATE"; payload: { state: Trip } };
