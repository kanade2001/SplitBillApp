interface DropDownProps {
  id: string;
  error: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  items: { key: string; item: string | JSX.Element }[];
}

const DropDown: React.FC<DropDownProps> = (props) => {
  return (
    <select
      id="member"
      className={[
        "block h-10 w-full rounded-md border bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        props.error ? "border-red-600 bg-red-200" : "border-gray-600 bg-white",
      ].join(" ")}
      value={props.value}
      onChange={props.onChange}
    >
      {props.items.map((item) => (
        <option key={item.key} value={item.key}>
          <>{item.item}</>
        </option>
      ))}
    </select>
  );
};

export default DropDown;
