interface Todo {
  id: string;
  title: string;
  description?: string;
  timeStamp: string;
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
    timeStamp: "2022-03-30",
  },
];
