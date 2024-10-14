export interface ItemState {
  id: string;
  data: BaseDataState;
}

interface BaseDataState {
  label: string;
}

export interface DataState extends BaseDataState {
  title: string;
  member_id: string;
  currency_id: string;
  amount: number;
  datetime: Date;
}

export interface CurrencyDataState extends BaseDataState {
  name: string;
}

export interface MemberDataState extends BaseDataState {
  name: string;
}

export type ItemAction =
  | { type: "GET" }
  | {
      type: "POST_ITEM";
      payload: { data: BaseDataState };
    }
  | {
      type: "PATCH_ITEM";
      payload: {
        id: string;
        data: BaseDataState;
      };
    }
  | { type: "DELETE_ITEM"; payload: { id: string } };

export const ItemReducer = (state: ItemState[], action: ItemAction) => {
  switch (action.type) {
    // 取得
    case "GET":
      // TODO サーバー処理
      state = [];
      return state;
    // 追加
    case "POST_ITEM":
      // TODO サーバー処理
      return [...state, { id: "ID", data: action.payload.data }];
    // 編集
    case "PATCH_ITEM":
      // TODO サーバー処理
      return state.map((item) =>
        item.id === action.payload.id
          ? { id: action.payload.id, data: action.payload.data }
          : item,
      );
    // 削除
    case "DELETE_ITEM":
      // TODO サーバー処理
      return state.filter((item) => item.id !== action.payload.id);
  }
};

export interface ErrorState {
  titleError: boolean;
  memberError: boolean;
  currencyError: boolean;
  amountError: boolean;
  datetimeError: boolean;
}
