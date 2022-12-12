import { endpoint } from "../util/variables";
import axios from "axios";
import { bookingId } from "../test/booking.test";

export function updateUserBooking(body, headers) {
    return axios.put(`${endpoint}/booking/${bookingId}`, body, headers);
}
