import { Trip, TripSortableKeys } from "@/store/types/trip";

export type TripListAction =
  | { type: "FETCH"; payload: { trips: Trip[] } }
  | {
      type: "SORT";
      payload: {
        sortBy: TripSortableKeys;
        orderBy: "ascending" | "descending";
      };
    };
