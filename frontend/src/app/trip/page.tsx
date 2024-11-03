"use client";

import { useTrip } from "@/types/trip";

import GalleryView from "@/components/view/gallery";

export default function Page() {
  const { trips } = useTrip();
  return (
    <div>
      <h1>TRIP</h1>
      <h2>User = User</h2>
      <h2>Items</h2>
      <button>Filter</button>
      <button>Sort</button>
      <button>Search</button>
      <p>Display Item in Card</p>
      <p>
        {trips.map((trip) => (
          <div key={trip.id}>
            <p>{trip.title}</p>
            <p>{trip.description}</p>
          </div>
        ))}
      </p>
      <GalleryView
        items={[
          {
            title: "Title",
            optionalFields: {
              description: {
                label: "Description",
                value:
                  "ここは詳細を入力するフィールドです。ここは詳細を入力するフィールドです。ここは詳細を入力するフィールドです。",
              },
              date: { label: "Date", value: new Date() },
            },
          },
        ]}
      />
    </div>
  );
}
