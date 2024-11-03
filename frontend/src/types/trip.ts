import { useReducer, useEffect } from "react";

import { MemberState } from "./member";

export interface TripState {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  members: MemberState[];
  status: string;
  description: string;
}

type Action =
  | { type: "FETCH"; payload: { states: TripState[] } }
  | { type: "CREATE"; payload: { state: TripState } }
  | { type: "UPDATE"; payload: { id: string; state: TripState } }
  | {
      type: "SORT";
      payload: { sortBy: keyof TripState; orderBy: "ascending" | "descending" };
    };

export const initialTripState: TripState = {
  id: "",
  title: "",
  created_at: new Date(),
  updated_at: new Date(),
  members: [],
  status: "",
  description: "",
};

interface TripStates {
  states: TripState[];
  loading: boolean;
  error: string | null;
}

const initialTripStates: TripStates = {
  states: [],
  loading: true,
  error: null,
};

export function tripReducer(state: TripStates, action: Action): TripStates {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        states: action.payload.states,
        loading: false,
        error: null,
      };
    case "CREATE":
      return {
        ...state,
        states: [...state.states, action.payload.state],
        loading: false,
        error: null,
      };

    case "UPDATE":
      const updatedStates = state.states.map((trip) =>
        trip.id === action.payload.state.id ? action.payload.state : trip,
      );
      return {
        ...state,
        states: updatedStates,
        loading: false,
        error: null,
      };
    case "SORT":
      const sortedStates = state.states.sort((a, b) => {
        if (action.payload.orderBy === "ascending") {
          return a[action.payload.sortBy] > b[action.payload.sortBy] ? 1 : -1;
        } else {
          return a[action.payload.sortBy] < b[action.payload.sortBy] ? 1 : -1;
        }
      });
      return {
        ...state,
        states: sortedStates,
        loading: false,
        error: null,
      };
    default:
      throw new Error("Unhandled action type");
  }
}

export function useTrips() {
  const [state, dispatch] = useReducer(tripReducer, initialTripStates);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        // DEBUG
        // const response = await fetch("http://localhost:3001/trips");
        // const data = await response.json();

        // デバッグ用の固定値
        const data: TripState[] = [
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
        dispatch({ type: "FETCH", payload: { states: data } });
      } catch (error) {
        throw new Error(`Error at fetchTrips: ${error}`);
      }
    };
    fetchTrips();
  }, []);

  const createTrip = async (newTrip: Omit<TripState, "id">) => {
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
          state: {
            id: `${state.states.length + 1}`,
            ...newTrip,
            created_at: new Date(),
            updated_at: new Date(),
          },
        },
      });
    } catch (error) {
      throw new Error(`Error at createTrip: ${error}`);
    }
  };

  const updateTrip = async (id: string, updatedTrip: TripState) => {
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
      dispatch({ type: "UPDATE", payload: { id, state: updatedTrip } });
    } catch (error) {
      throw new Error(`Error at updateTrip: ${error}`);
    }
  };

  const sortTrips = (
    sortBy: keyof TripState,
    orderBy: "ascending" | "descending",
  ) => {
    dispatch({ type: "SORT", payload: { sortBy, orderBy } });
  };

  return {
    trips: state.states,
    loading: state.loading,
    createTrip,
    updateTrip,
    sortTrips,
  };
}
