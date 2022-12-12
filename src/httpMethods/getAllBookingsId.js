import { endpoint } from "../util/variables";
import axios from "axios";

export function getAllBookingsId() {
    return axios.get(`${endpoint}/booking`);
}
