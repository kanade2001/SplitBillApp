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
