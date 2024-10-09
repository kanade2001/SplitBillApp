import { Info } from "@/components/Alert/Alert";

export default function PaymentList({ items }: { items: string[] }) {
  return (
    <div className="">
      {items.length === 0 ? (
        /* 要素がない場合 */
        <div className="">
          <Info title="データがありません" message="データを追加してください" />
        </div>
      ) : (
        <div className="bor-der-gray-100 border">
          {items.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-5 items-center text-center bg-${
                index % 2 === 0 ? "gray-600" : "gray-500"
              } py-4`}
            >
              <div>{item}</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
