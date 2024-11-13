interface TextInputProps {
  id: string;
  error: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <input
      type="text"
      id="title-input"
      className={[
        "block w-full rounded-md border bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        props.error ? "border-red-600" : "border-gray-600",
      ].join(" ")}
      placeholder=""
      value={props.value}
      onChange={props.onChange}
      required={props.required}
    />
  );
};

export default TextInput;
