import { collectionData } from "./collection";

export const reducer = (state, action) => {
  if (action.type === "ALL") {
    return collectionData;
  }

  if (action.type === "CARS") {
    const filtered = collectionData.filter((item) => item.kind === "Cars");
    return [...filtered];
  }
  if (action.type === "VIEWS") {
    const filtered = collectionData.filter((item) => item.kind === "Views");
    return [...filtered];
  }
};
