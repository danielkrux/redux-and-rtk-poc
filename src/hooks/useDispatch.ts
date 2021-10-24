import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
} from "react-redux";

import type { RootState } from "../store";

const useDispatch: TypedUseSelectorHook<RootState> = useReduxDispatch;

export default useDispatch;
