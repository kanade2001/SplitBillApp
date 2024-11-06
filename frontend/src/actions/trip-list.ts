import { Trip } from "@/types/trip";

export type TripListAction =
  | { type: "FETCH"; payload: { trips: Trip[] } }
  | {
      type: "SORT";
      payload: { sortBy: keyof Trip; orderBy: "ascending" | "descending" };
    };
