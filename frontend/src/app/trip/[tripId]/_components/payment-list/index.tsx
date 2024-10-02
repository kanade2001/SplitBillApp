export default function PaymentList({ items }: { items: string[] }) {
  return (
    <div>
      LIST
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {index}: {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
