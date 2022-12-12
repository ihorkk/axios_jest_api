import { endpoint } from "../util/variables";
import axios from "axios";

export function authBooking(body, headers) {
    return axios.post(`${endpoint}/auth`, body, headers);
}
