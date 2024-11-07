import { Member } from "./member";

export interface Trip {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  status: string;
  description: string;
  members?: Member[];
  currencies?: [];
}

export interface TripList {
  trips: Trip[];
  loading: boolean;
  error: string | null;
}

export type TripSortableKeys = "title" | "created_at" | "updated_at" | "status";

export const initialTrip: Trip = {
  id: "newtrip",
  title: "",
  created_at: new Date(),
  updated_at: new Date(),
  status: "",
  description: "",
  members: [],
  currencies: [],
};

export const initialTripList: TripList = {
  trips: [],
  loading: false,
  error: null,
};
