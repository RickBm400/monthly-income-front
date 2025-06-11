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

export const indicatorsArray: Array<indicator> = [
  {
    title: "Ingresos Generales",
    total: "$205.409.90",
    percentage: "30% esta semana",
    type: "INCOME",
  },
  {
    title: "Ingresos Generales",
    total: "$205.409.90",
    percentage: "30% esta semana",
    type: "EXPENSE",
  },
  {
    title: "Ingresos Generales",
    total: "$205.409.90",
    percentage: "30% esta semana",
    type: "TRANSACTION",
  },
];
