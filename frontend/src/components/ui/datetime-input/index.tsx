interface DateTimeInputProps {
  id?: string;
  error: boolean;
  value: Date;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const DateTimeInput: React.FC<DateTimeInputProps> = (props) => {
  return (
    <>
      <input
        type="datetime-local"
        id={props.id ? props.id : "datetime-input"}
        className={[
          "block h-10 w-full rounded-md border bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          props.error ? "border-red-600" : "border-gray-600",
        ].join(" ")}
        value={props.value.toISOString().slice(0, 16)}
        onChange={props.onChange}
      />
    </>
  );
};

export default DateTimeInput;
