import { useReducer, useEffect } from "react";

import { Trip, TripSortableKeys, initialTripList } from "../types/trip";

import { tripListReducer } from "@/store/reducers/trip-list";

export function useTripList() {
  const [state, dispatch] = useReducer(tripListReducer, initialTripList);

  // トリップ一覧を取得
  useEffect(() => {
    const fetchTrips = async () => {
      // TODO: ローディングの表示
      try {
        // DEBUG
        // const response = await fetch("http://localhost:3001/trips");
        // const data = await response.json();
        // デバッグ用の固定値
        const data: Trip[] = [
          {
            id: "1",
            title: "Trip to Tokyo",
            created_at: new Date(),
            updated_at: new Date(),
            status: "planned",
            description: "A trip to Tokyo",
          },
          {
            id: "2",
            title: "Trip to Kyoto",
            created_at: new Date(),
            updated_at: new Date(),
            status: "completed",
            description: "A trip to Kyoto",
          },
        ];
        dispatch({ type: "FETCH", payload: { trips: data } });
      } catch (error) {
        throw new Error(`Error at fetchTrips: ${error}`);
      }
    };
    fetchTrips();
  }, []);

  // ソート
  const sortTrips = (
    sortBy: TripSortableKeys,
    orderBy: "ascending" | "descending",
  ) => {
    dispatch({ type: "SORT", payload: { sortBy, orderBy } });
  };

  return {
    trips: state.trips,
    loading: state.loading,
    error: state.error,
    sortTrips,
  };
}
