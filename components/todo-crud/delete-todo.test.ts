jest.mock("axios");
import axios, { AxiosInstance } from "axios";
import { deleteTodo } from "./delete-todo";

const mockRes = { data: { message: "mock message!" } };
const myAxios: jest.Mocked<AxiosInstance> = axios as any
myAxios.post.mockResolvedValue(mockRes)

describe("[todo delete]: should return status code 200", () => {
  it("axios return mock value", async () => {
    const res = await deleteTodo("01")
    expect(res).toBe(mockRes.data)
  })
})
