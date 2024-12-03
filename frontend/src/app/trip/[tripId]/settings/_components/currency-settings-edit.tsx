import { FlexColumn } from "@/components/view";
import { GridItemEditField } from "@/layout/grid";

export const CurrencySettingsEdit = () => {
  return (
    <FlexColumn>
      <h3>JPY</h3>
      <GridItemEditField>
        <label>Rate</label>
        <p>100</p>
        <label>Primary Currency</label>
        <p>False</p>
      </GridItemEditField>
    </FlexColumn>
  );
};
