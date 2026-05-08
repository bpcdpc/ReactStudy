import { useSelector } from "react-redux";

import type { RootState } from "./store";

export default function UserName() {
  const name = useSelector((state: RootState) => state.user.name);
  return <h1>{name}</h1>;
}
