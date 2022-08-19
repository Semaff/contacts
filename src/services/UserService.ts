import axios, { AxiosResponse } from "axios";
import { TUser } from "../types/TUser";

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<TUser[]>> {
        return axios.get<TUser[]>("./users.json");
    }
}