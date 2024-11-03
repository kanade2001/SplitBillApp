import { useReducer, useEffect } from "react";

import { MemberState } from "./member";

export interface Trip {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  members: MemberState[];
  status: string;
  description: string;
}

type Action =
  | { type: "FETCH"; payload: { trips: Trip[] } }
  | { type: "CREATE"; payload: { trip: Trip } }
  | { type: "UPDATE"; payload: { id: string; trip: Trip } }
  | {
      type: "SORT";
      payload: { sortBy: keyof Trip; orderBy: "ascending" | "descending" };
    };

export const initialTrip: Trip = {
  id: "",
  title: "",
  created_at: new Date(),
  updated_at: new Date(),
  members: [],
  status: "",
  description: "",
};

interface TripState {
  trips: Trip[];
  loading: boolean;
  error: string | null;
}

const initialTripState: TripState = {
  trips: [],
  loading: true,
  error: null,
};

function tripReducer(state: TripState, action: Action): TripState {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        trips: action.payload.trips,
        loading: false,
        error: null,
      };
    case "CREATE":
      return {
        ...state,
        trips: [...state.trips, action.payload.trip],
        loading: false,
        error: null,
      };

    case "UPDATE":
      const updatedtrips = state.trips.map((trip) =>
        trip.id === action.payload.trip.id ? action.payload.trip : trip,
      );
      return {
        ...state,
        trips: updatedtrips,
        loading: false,
        error: null,
      };
    case "SORT":
      const sortedtrips = state.trips.sort((a, b) => {
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

export function useTrips() {
  const [state, dispatch] = useReducer(tripReducer, initialTripState);

  useEffect(() => {
    const fetchTrips = async () => {
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
            members: [],
            status: "planned",
            description: "A trip to Tokyo",
          },
          {
            id: "2",
            title: "Trip to Kyoto",
            created_at: new Date(),
            updated_at: new Date(),
            members: [],
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

  const createTrip = async (newTrip: Omit<Trip, "id">) => {
    try {
      // サーバー通信を行って新しいIDを取得
      /* TODO_SERVER
      const response = await fetch("http://localhost:3001/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTrip),
      });
      const createdTrip = await response.json();
      dispatch({ type: "CREATE", payload: { state: createdTrip } });
      */

      // DEBUG
      dispatch({
        type: "CREATE",
        payload: {
          trip: {
            id: `${state.trips.length + 1}`,
            ...newTrip,
            created_at: new Date(),
            updated_at: new Date(),
          },
        },
      });
    } catch (error) {
      console.error(`Error at createTrip: ${error}`);
      throw new Error(`Error at createTrip: ${error}`);
    }
  };

  const updateTrip = async (id: string, updatedTrip: Trip) => {
    try {
      // サーバー通信を行って既存のIDを使用して更新
      /* TODO_SERVER
      await fetch(`http://localhost:3001/trips/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTrip),
      });
      */
      dispatch({ type: "UPDATE", payload: { id, trip: updatedTrip } });
    } catch (error) {
      console.error(`Error at updateTrip: ${error}`);
      throw new Error(`Error at updateTrip: ${error}`);
    }
  };

  const sortTrips = (
    sortBy: keyof Trip,
    orderBy: "ascending" | "descending",
  ) => {
    dispatch({ type: "SORT", payload: { sortBy, orderBy } });
  };

  return {
    trips: state.trips,
    loading: state.loading,
    error: state.error,
    createTrip,
    updateTrip,
    sortTrips,
  };
}
