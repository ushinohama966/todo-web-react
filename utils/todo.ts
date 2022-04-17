export interface Todo {
  id: string;
  title: string;
  description?: string;
  timeStamp: string;
  updatedAt?: string
}

export const todoMap: Todo[] = [
  {
    id: "01",
    title: "クレカ作成",
    description: "4月までには作りたい",
    timeStamp: "2022-04-10",
  },
  {
    id: "02",
    title: "銀行開設",
    description: "楽天、SBI、あおぞら...",
    updatedAt: "2022-04-05",
    timeStamp: "2022-03-30",
  },
];