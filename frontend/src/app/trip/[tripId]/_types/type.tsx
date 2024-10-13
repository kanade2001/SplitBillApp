export interface ItemState {
  id?: string;
  title: string;
  member_id: string;
  currency_id: string;
  amount: number;
  datetime: Date;
}

export const initialStateList: ItemState[] = [];

export type ItemAction =
  | { type: "ADD_ITEM"; payload: { item: ItemState } }
  | { type: "EDIT_ITEM"; payload: { item: ItemState } }
  | { type: "DELETE_ITEM"; payload: { id: string } };

export const ItemReducer = (state: ItemState[], action: ItemAction) => {
  switch (action.type) {
    // 追加
    case "ADD_ITEM":
      // TODO サーバー処理
      const item = { ...action.payload.item, id: "ADD" }; // サーバーから取得した新しいIDをセット
      return [...state, item];
    // 編集
    case "EDIT_ITEM":
      // TODO サーバー処理
      return state.map((item) =>
        item.id === action.payload.item.id
          ? { ...item, ...action.payload.item }
          : item,
      );
    // 削除
    case "DELETE_ITEM":
      // TODO サーバー処理
      return state.filter((item) => item.id !== action.payload.id);
  }
};

export interface FormState {
  title: string;
  memberid: number;
  currencyid: string;
  // TODO セントとかの扱い
  amount: number;
  datetime: Date;
}

export interface ErrorState {
  titleError: boolean;
  memberError: boolean;
  currencyError: boolean;
  amountError: boolean;
  datetimeError: boolean;
}
