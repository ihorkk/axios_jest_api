import { bookingToken } from "../test/booking.test";

export const endpoint = "https://restful-booker.herokuapp.com";
export const content = {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
};
export const contentGetById = { headers: { Accept: "application/json" } };
export const contentUpdateBooking = () => {
    return {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Cookie: `token=${bookingToken}`,
        },
    };
};
export const contentDeleteBooking = () => {
    return {
        headers: {
            "Content-Type": "application/json",
            Cookie: `token=${bookingToken}`,
        },
    };
};
export const login = "admin";
export const password = "password123";
export const additionalNeeds = "Breakfast";
export const additionalNeeds2 = "Dinner";
