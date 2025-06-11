export interface todoCard {
  description: string;
  title: string;
  done: boolean;
  icon: string;
}

export const todoListArray: Array<todoCard> = [
  {
    description: "Compra mensual",
    title: "Compra mensual",
    done: false,
    icon: "mdi-shop-card",
  },
];
