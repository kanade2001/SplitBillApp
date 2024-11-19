import { useReducer, useEffect } from "react";

import { tripReducer } from "@/store/reducers/trip";
import { Trip, TripSettableFields, initialTrip } from "@/store/types/trip";

import { useMemberList } from "./useMemberList";

export function useTrip(id: string) {
  const [state, dispatch] = useReducer(tripReducer, initialTrip);
  const { members, addMember, editMember, deleteMember } = useMemberList();

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        if (id === "newtrip") {
          dispatch({
            type: "FETCH_DETAIL",
            payload: { trip: initialTrip },
          });
        } else {
          // DEBUG
          // const response = await fetch(`http://localhost:3001/trips/${id}`);
          // const data = await response.json();
          // デバッグ用の固定値
          const data: Trip = {
            id: "1",
            title: "Trip to Tokyo",
            created_at: new Date(),
            updated_at: new Date(),
            start_date: "2022-01-01",
            end_date: "2022-01-10",
            status: "planned",
            description: "A trip to Tokyo",
            members: [],
            currencies: [],
          };
          dispatch({ type: "FETCH_DETAIL", payload: { trip: data } });
        }
      } catch (error) {
        throw new Error(`Error at fetchTrip: ${error}`);
      }
    };
    fetchTrip();
  }, [id]);

  const setTripField = (field: TripSettableFields, value: string) => {
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
    state: { ...state, members },
    setTripField,
    createTrip,
    updateTrip,
    deleteTrip,
    addMember,
    editMember,
    deleteMember,
  };
}
