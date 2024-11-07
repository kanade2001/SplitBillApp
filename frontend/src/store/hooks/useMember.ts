import { useReducer } from "react";
import { memberReducer } from "../reducers/member";

export function useMember() {
  const [state, dispatch] = useReducer(memberReducer, {
    id: "",
    label: "",
    email: "",
    role: "",
  });

  const setMemberField = (field: "label" | "email" | "role", value: string) => {
    dispatch({ type: "SET_FIELD", payload: { field, value } });
  };

  return {
    member: state,
    setMemberField,
  };
}
