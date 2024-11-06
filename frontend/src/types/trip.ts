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

// Initial State
export const initialTrip: Trip = {
  id: "",
  title: "",
  created_at: new Date(),
  updated_at: new Date(),
  status: "",
  description: "",
};

export const initialTripState: TripState = {
  trips: [],
  loading: false,
  error: null,
};
