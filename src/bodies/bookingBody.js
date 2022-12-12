import * as variable from "../util/variables";
import * as preRequest from "./preRequest";

export const authBody = {
    username: variable.login,
    password: variable.password,
};

export const createBookingBody = {
    firstname: preRequest.firstName,
    lastname: preRequest.lastName,
    totalprice: preRequest.price,
    depositpaid: true,
    bookingdates: {
        checkin: preRequest.checkinDate,
        checkout: preRequest.checkoutDate,
    },
    additionalneeds: variable.additionalNeeds,
};

export const updateUserBookingBody = {
    firstname: preRequest.firstName,
    lastname: preRequest.lastName,
    totalprice: preRequest.price2,
    depositpaid: true,
    bookingdates: {
        checkin: preRequest.checkinDate,
        checkout: preRequest.checkoutDate2,
    },
    additionalneeds: variable.additionalNeeds,
};

export const updatePartBookingBody = {
    depositpaid: false,
    additionalneeds: variable.additionalNeeds2,
};
