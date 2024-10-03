export default function PaymentList({ items }: { items: string[] }) {
  return (
    <div>
      LIST
      {/* TODO 要素がない場合の処理*/}
      <div className="mx-10 border bor-der-gray-100">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-5 items-center text-center bg-${
              index % 2 === 0 ? "gray-600" : "gray-500"
            }  py-4 `}
          >
            <div>{item}</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        ))}
      </div>
    </div>
  );
}
