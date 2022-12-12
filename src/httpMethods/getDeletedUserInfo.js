import { endpoint } from "../util/variables";
import axios from "axios";
import { bookingId } from "../test/booking.test";

export function getDeletedUserInfo(headers) {
    return axios
        .get(`${endpoint}/booking/${bookingId}`, headers)
        .then((response) => response)
        .catch((error) => {
            console.error(error);
            return error;
        });
}
