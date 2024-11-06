import { useReducer, useEffect } from "react";
import { TripDetail, initialTripDetail } from "../types/trip-detail";
import { tripDetailReducer } from "../reducers/trip-detail";

export function useTripDetail(id: string) {
  const [state, dispatch] = useReducer(tripDetailReducer, initialTripDetail);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        if (id === "newtrip") {
          dispatch({
            type: "FETCH_DETAIL",
            payload: { trip: initialTripDetail },
          });
        } else {
          dispatch({ type: "SET_LOADING", payload: { loading: true } });
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
        dispatch({ type: "SET_LOADING", payload: { loading: false } });
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
      dispatch({ type: "SET_LOADING", payload: { loading: true } });
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
      dispatch({ type: "SERVER_CREATE", payload: { state: createdTrip } });
      */
      // DEBUG
      console.log("Create");
    } catch (error) {
      console.error(`Error at createTrip: ${error}`);
      throw new Error(`Error at createTrip: ${error}`);
    }
  };

  const updateTrip = async () => {
    dispatch({ type: "SET_LOADING", payload: { loading: true } });
    try {
      // サーバー通信を行って既存のIDを使用して更新
      /* TODO_SERVER
      const response = await fetch(`http://localhost:3001/trips/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTrip),
      });
      const data = await response.json();
      dispatch({ type: "SERVER_UPDATE", payload: { state: data } });
      */
      // DEBUG
      console.log("Update");
    } catch (error) {
      console.error(`Error at updateTrip: ${error}`);
      throw new Error(`Error at updateTrip: ${error}`);
    }
  };

  const deleteTrip = async () => {};

  return {
    state,
    setTripField,
    createTrip,
    updateTrip,
    deleteTrip,
  };
}
