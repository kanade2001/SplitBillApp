import { getCurrentDateISO } from "@/utils/date-utils";

import { Member } from "./member";

export interface Trip {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  start_date: string; // ISO 8601
  end_date: string; // ISO 8601
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

export type TripSortableKeys =
  | "title"
  | "status"
  | "created_at"
  | "updated_at"
  | "status";

export type TripSettableFields =
  | "title"
  | "start_date"
  | "end_date"
  | "description";

export const initialTrip: Trip = {
  id: "newtrip",
  title: "",
  created_at: new Date(),
  updated_at: new Date(),
  start_date: getCurrentDateISO(),
  end_date: getCurrentDateISO(),
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
