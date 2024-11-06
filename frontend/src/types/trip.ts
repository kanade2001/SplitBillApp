export interface Trip {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  status: string;
  description: string;
}

export interface TripState {
  trips: Trip[];
  loading: boolean;
  error: string | null;
}

export const initialTripState: TripState = {
  trips: [],
  loading: false,
  error: null,
};
