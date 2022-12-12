import { endpoint } from "../util/variables";
import axios from "axios";
import { bookingId } from "../test/booking.test";

export function updatePartBooking(body, headers) {
    return axios.patch(`${endpoint}/booking/${bookingId}`, body, headers);
}
