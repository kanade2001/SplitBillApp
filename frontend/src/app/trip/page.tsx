"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useTrip } from "@/types/trip";

import GalleryView from "@/components/view/gallery";

export default function Page() {
  const { trips } = useTrip();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRoute = (id: string) => {
    if (isClient) {
      console.log(id);
      router.push(`/trip/${id}`);
    }
  };

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
        items={trips.map((trip) => ({
          id: trip.id,
          headerImage: "",
          title: trip.title,
          optionalFields: {
            description: {
              label: "Description",
              value: trip.description,
            },
            updated_at: {
              label: "更新日時",
              value: trip.updated_at,
            },
          },
        }))}
        onClick={(id) => {
          handleRoute(id);
        }}
        onCreate={() => {
          console.log("create");
        }}
      />
    </div>
  );
}
