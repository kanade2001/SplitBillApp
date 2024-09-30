type Props = {
  params: { tripId: string }; // TripID
  searchParams: { key: string | undefined }; // Public Key in params
};

export default function Page({ params, searchParams }: Props) {
  const key = typeof searchParams.key === "string" ? searchParams.key : "";
  return (
    <div>
      <h1>TRIP_ID</h1>
      {params.tripId}
      <br />
      {key}
    </div>
  );
}
