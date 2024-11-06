import { Trip } from "./trip";
import { MemberState } from "./member";

export interface TripDetail extends Trip {
  members: MemberState[];
  currencies: [];
  loading: boolean;
  error: string | null;
}

export const initialTripDetail: TripDetail = {
  id: "newtrip",
  title: "",
  created_at: new Date(),
  updated_at: new Date(),
  status: "",
  description: "",
  members: [],
  currencies: [],
  loading: false,
  error: null,
};
