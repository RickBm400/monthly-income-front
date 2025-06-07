export type indicator = {
  title: string;
  total: string;
  percentage: string;
  type: "INCOME" | "EXPENSE" | "TRANSACTION";
};

export const indicatorTypeColors = {
  INCOME: "#68AE62",
  EXPENSE: "#C35B5B",
  TRANSACTION: "#3CC3DF",
};
