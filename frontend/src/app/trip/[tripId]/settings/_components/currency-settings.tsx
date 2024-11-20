import TableBodyDots from "@/components/table/body/table-body-dots";
import FooterWide from "@/components/table/footer/footer-wide";
import TableHeader from "@/components/table/header/table-header";
import { BlockHeaderAdd, RoundedBlock } from "@/layout/block";
import { testCurrency1 } from "@/test/currencies";

const CurrencySettings = () => {
  const currencyData = testCurrency1;

  return (
    <RoundedBlock>
      <BlockHeaderAdd title="Currency" handleAdd={() => {}} />
      <table className="w-full table-fixed">
        <TableHeader
          cols={[
            { id: "currency", label: "Currency" },
            { id: "rate", label: "Rate" },
            { id: "action", label: "", className: "w-10" },
          ]}
        />
        <TableBodyDots
          rows={currencyData.map((currency) => ({
            id: currency.id,
            columns: [currency.code, "TODO: Rate"],
            actions: () => {},
          }))}
          centerColumns={[0, 1]}
        />
        <FooterWide colSpan={3} label={currencyData.length + " Items"} />
      </table>
    </RoundedBlock>
  );
};

export default CurrencySettings;
