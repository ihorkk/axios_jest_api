import { endpoint } from "../util/variables";
import axios from "axios";
import { bookingId } from "../test/booking.test";

export function deleteUserBooking(headers) {
    return axios.delete(`${endpoint}/booking/${bookingId}`, headers);
}
