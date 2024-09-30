import { PaymentButton } from "./_components/payment-button";
import PaymentList from "./_components/payment-list";

type Props = {
  params: { tripId: string }; // TripID
  searchParams: { key: string | undefined }; // Public Key in params
};

export default function Page({ params, searchParams }: Props) {
  const key = typeof searchParams.key === "string" ? searchParams.key : "";
  return (
    <div>
      <h1>TRIP_ID = {params.tripId}</h1>
      <h2>{key}</h2>
      <PaymentButton />
      <PaymentList />
    </div>
  );
}
