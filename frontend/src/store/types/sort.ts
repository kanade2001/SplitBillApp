export interface SortProps {
  id: string | null;
  type: "ascending" | "descending" | null;
}

export const initialSort: SortProps = {
  id: null,
  type: null,
};
