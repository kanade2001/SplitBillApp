export interface Trip {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  status: string;
  description: string;
}

export interface TripList {
  trips: Trip[];
  loading: boolean;
  error: string | null;
}

export const initialTripList: TripList = {
  trips: [],
  loading: false,
  error: null,
};
