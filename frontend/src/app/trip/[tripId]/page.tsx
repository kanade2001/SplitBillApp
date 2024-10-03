"use client";
import { useState } from "react";

import AddButton from "./_components/add-button";
import EditButton from "./_components/edit-button";
import CompleteButton from "./_components/complete-button";
import PaymentList from "./_components/payment-list";

type Props = {
  params: { tripId: string }; // TripID
  searchParams: { key: string | undefined }; // Public Key in params
};

export default function Page({ params, searchParams }: Props) {
  const key = typeof searchParams.key === "string" ? searchParams.key : "";

  const [items, setItems] = useState<string[]>([]);

  const handleSetItem = (item: string) => {
    setItems([...items, item]);
  };

  const [isEditable, setIsEditable] = useState<boolean>(false);

  return (
    <div>
      <h1>TRIP_ID = {params.tripId}</h1>
      <h2>{key}</h2>
      <AddButton onClick={handleSetItem} item="ITEM" />
      <PaymentList items={items} />
      <div className="flex">
        <EditButton onClick={setIsEditable} isEditable={isEditable} />
        <CompleteButton item={items} />
      </div>
    </div>
  );
}
