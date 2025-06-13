export interface movementItem {
  title: string;
  owner: string;
  total: string;
  card: string;
  date: string;
  type: "INCOME" | "OUTCOME";
}

// Test data
export const movementList: movementItem[] = [
  {
    title: "Salary Payment",
    owner: "Alice Johnson",
    total: "3500.00",
    card: "Visa",
    date: "2024-06-01",
    type: "INCOME",
  },
  {
    title: "Salary Payment",
    owner: "Alice Johnson",
    total: "3500.00",
    card: "Visa",
    date: "2024-06-01",
    type: "INCOME",
  },
  {
    title: "Salary Payment",
    owner: "Alice Johnson",
    total: "3500.00",
    card: "Visa",
    date: "2024-06-01",
    type: "INCOME",
  },
  {
    title: "Grocery Shopping",
    owner: "Bob Smith",
    total: "120.45",
    card: "Mastercard",
    date: "2024-06-03",
    type: "OUTCOME",
  },
  {
    title: "Grocery Shopping",
    owner: "Bob Smith",
    total: "120.45",
    card: "Mastercard",
    date: "2024-06-03",
    type: "OUTCOME",
  },
  {
    title: "Grocery Shopping",
    owner: "Bob Smith",
    total: "120.45",
    card: "Mastercard",
    date: "2024-06-03",
    type: "OUTCOME",
  },
  {
    title: "Freelance Project",
    owner: "Charlie Lee",
    total: "800.00",
    card: "Visa **** 4321",
    date: "2024-06-05",
    type: "INCOME",
  },
  {
    title: "Car Maintenance",
    owner: "Diana Prince",
    total: "250.00",
    card: "Amex **** 8765",
    date: "2024-06-07",
    type: "OUTCOME",
  },
  {
    title: "Stock Dividend",
    owner: "Edward King",
    total: "150.75",
    card: "Visa **** 2468",
    date: "2024-06-09",
    type: "INCOME",
  },
  {
    title: "Restaurant Dinner",
    owner: "Fiona Green",
    total: "60.30",
    card: "Mastercard **** 1357",
    date: "2024-06-10",
    type: "OUTCOME",
  },
];
