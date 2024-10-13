interface NumberCurrencyDropDownProps {
  numberfieldid?: string;
  numbererror: boolean;
  numbervalue: number;
  numberonChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  currencyfieldid?: string;
  currencyerror: boolean;
  currencyidvalue: string; // currency id
  currencyonChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currencies: { key: string; item: string }[]; // currency list
}

const NumberCurrencyDropDown: React.FC<NumberCurrencyDropDownProps> = (
  props,
) => {
  return (
    <div className="flex">
      <input
        type="number"
        id={props.numberfieldid ? props.numberfieldid : "number-input"}
        className={[
          "block h-10 w-full rounded-s-md border border-e-gray-600 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          props.numbererror
            ? "border-red-600 bg-red-200"
            : "border-gray-600 bg-white",
        ].join(" ")}
        value={props.numbervalue}
        onChange={props.numberonChange}
      />
      <select
        id={props.currencyfieldid ? props.currencyfieldid : "currency-select"}
        className={[
          "block h-10 w-full rounded-e-md border border-s-0 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          props.currencyerror
            ? "border-red-600 bg-red-200"
            : "border-gray-600 bg-white",
        ].join(" ")}
        value={props.currencyidvalue}
        onChange={props.currencyonChange}
      >
        {props.currencies.map((currency) => (
          <option key={currency.key} value={currency.key}>
            {currency.item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NumberCurrencyDropDown;
