import { Info } from "@/components/Alert/Alert";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function PaymentList({ items }: { items: string[] }) {
  return (
    <div className="">
      <table className="w-full table-fixed border-collapse border border-gray-400">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="border border-b-4 border-double border-gray-400 p-2">
              Title
            </th>
            <th className="border border-b-4 border-double border-gray-400 p-2">
              Memeber
            </th>
            <th className="w-28 border border-b-4 border-double border-gray-400 p-2">
              Currency
            </th>
            <th className="border border-b-4 border-double border-gray-400 p-2">
              Amount
            </th>
            <th className="border border-b-4 border-double border-gray-400 p-2">
              Date/Time
            </th>
            <th className="w-16 border border-b-4 border-double border-gray-400 p-2">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-400 p-2">{item}</td>
              <td className="border border-gray-400 p-2">Kanade</td>
              <td className="border border-gray-400 p-2 text-center">
                <div className="flex justify-between">
                  <div>
                    <span className="fi fi-jp"></span>
                  </div>
                  <div className="flex-grow">JPY</div>
                </div>
              </td>
              <td className="border border-gray-400 p-2 text-right">2000</td>
              <td className="border border-gray-400 p-2">{item}</td>
              <td className="border border-gray-400">
                <svg
                  className="h-6 w-full text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={6} className="border border-gray-400 bg-gray-800">
              <div className="flex w-full">
                <div className="p-2">
                  <svg
                    className="h-6 w-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                </div>
                <div className="flex-grow p-2 text-left">Add</div>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>

      {items.length === 0 /* 要素がない場合 */ && (
        <div className="">
          <Info title="データがありません" message="データを追加してください" />
        </div>
      )}
    </div>
  );
}
