import { useReducer, useEffect } from "react";

import { MemberState } from "./member";

export interface Trip {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  status: string;
  description: string;
}

export interface TripDetail extends Trip {
  members: MemberState[];
  currencies: [];
  loading: boolean;
  error: string | null;
}

interface TripState {
  trips: Trip[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: "FETCH"; payload: { trips: Trip[] } }
  | {
      type: "SORT";
      payload: { sortBy: keyof Trip; orderBy: "ascending" | "descending" };
    };

type DetailAction =
  | { type: "FETCH_DETAIL"; payload: { trip: TripDetail } }
  | {
      type: "SET_FIELD";
      payload: { field: "title" | "status" | "description"; value: string };
    };

export const initialTrip: Trip = {
  id: "",
  title: "",
  created_at: new Date(),
  updated_at: new Date(),
  status: "",
  description: "",
};

const initialTripState: TripState = {
  trips: [],
  loading: false,
  error: null,
};

const initialTripDetail: TripDetail = {
  ...initialTrip,
  members: [],
  currencies: [],
  loading: false,
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

function tripDetailReducer(
  state: TripDetail,
  action: DetailAction,
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
    default:
      throw new Error("Unhandled action type");
  }
}

export function useTrip() {
  const [state, dispatch] = useReducer(tripReducer, initialTripState);

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
    sortBy: keyof Trip,
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

export function useTripDetail(id: string) {
  const [state, dispatch] = useReducer(tripDetailReducer, {
    ...initialTrip,
    members: [],
    currencies: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        if (id === "newtrip") {
          dispatch({
            type: "FETCH_DETAIL",
            payload: { trip: initialTripDetail },
          });
        } else {
          // DEBUG
          // const response = await fetch(`http://localhost:3001/trips/${id}`);
          // const data = await response.json();
          // デバッグ用の固定値
          const data: TripDetail = {
            id: "1",
            title: "Trip to Tokyo",
            created_at: new Date(),
            updated_at: new Date(),
            status: "planned",
            description: "A trip to Tokyo",
            members: [],
            currencies: [],
            loading: false,
            error: null,
          };
          dispatch({ type: "FETCH_DETAIL", payload: { trip: data } });
        }
      } catch (error) {
        throw new Error(`Error at fetchTrip: ${error}`);
      }
    };
    fetchTrip();
  }, [id]);

  const setTripField = (
    field: "title" | "status" | "description",
    value: string,
  ) => {
    dispatch({ type: "SET_FIELD", payload: { field, value } });
  };

  const createTrip = async () => {
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
      console.log("Create");
    } catch (error) {
      console.error(`Error at createTrip: ${error}`);
      throw new Error(`Error at createTrip: ${error}`);
    }
  };

  const updateTrip = async () => {
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
      // DEBUG
      console.log("Update");
    } catch (error) {
      console.error(`Error at updateTrip: ${error}`);
      throw new Error(`Error at updateTrip: ${error}`);
    }
  };

  return {
    state,
    setTripField,
    createTrip,
    updateTrip,
  };
}
