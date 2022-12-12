import * as body from "../bodies/bookingBody";
import * as variable from "../util/variables";
import * as requestData from "../bodies/preRequest";
import { authBooking } from "../httpMethods/auth";
import { getAllBookingsId } from "../httpMethods/getAllBookingsId";
import { createBooking } from "../httpMethods/createBooking";
import { getUserInfoById } from "../httpMethods/getUserInfoById";
import { updateUserBooking } from "../httpMethods/updateUserBooking";
import { updatePartBooking } from "../httpMethods/updateThePartOfInfo";
import { deleteUserBooking } from "../httpMethods/deleteUserBooking";
import { getDeletedUserInfo } from "../httpMethods/getDeletedUserInfo";

export let bookingToken;
export let bookingId;

// Auth
describe("Auth booking", () => {
    let bookingResponse;

    beforeAll(async () => {
        bookingResponse = await authBooking(body.authBody, variable.content);
        console.log("Response is:", bookingResponse.data);
    });

    afterAll(async () => {
        bookingToken = bookingResponse.data.token;
        console.log("Response token is:", bookingToken);
    });
    test("Status code is 200", async () => {
        await expect(bookingResponse.status).toEqual(200);
    });

    test("Status text is OK", async () => {
        await expect(bookingResponse.statusText).toEqual("OK");
    });
});

// Get all booking IDs
describe("Get all booking IDs", () => {
    let bookingResponse;

    beforeAll(async () => {
        bookingResponse = await getAllBookingsId();
        console.log("Response is:", bookingResponse.data);
    });
    test("Status code is 200", async () => {
        await expect(bookingResponse.status).toEqual(200);
    });
    test("Status text is OK", async () => {
        await expect(bookingResponse.statusText).toEqual("OK");
    });
});

// Create booking
describe("Create a booking", () => {
    let bookingResponse;

    beforeAll(async () => {
        bookingResponse = await createBooking(
            body.createBookingBody,
            variable.content
        );
        console.log("Response is:", bookingResponse.data);
    });

    afterAll(async () => {
        bookingId = bookingResponse.data.bookingid;
        console.log("BookingID is:", bookingId);
    });
    test("Status code is 200", async () => {
        await expect(bookingResponse.status).toEqual(200);
    });

    test("Status text is OK", async () => {
        await expect(bookingResponse.statusText).toEqual("OK");
    });

    test("Checkin date is the same as in request", async () => {
        await expect(bookingResponse.data.booking.bookingdates.checkin).toEqual(
            requestData.checkinDate
        );
    });

    test("Checkout date is the same as in request", async () => {
        await expect(
            bookingResponse.data.booking.bookingdates.checkout
        ).toEqual(requestData.checkoutDate);
    });

    test("Price is the same as in request", async () => {
        await expect(bookingResponse.data.booking.totalprice).toEqual(
            requestData.price
        );
    });
});

// Get booking by id
describe("Get booking by id", () => {
    let bookingResponse;

    beforeAll(async () => {
        bookingResponse = await getUserInfoById(variable.contentGetById);
        console.log("Response is:", bookingResponse.data);
    });
    test("Status code is 200", async () => {
        await expect(bookingResponse.status).toEqual(200);
    });
    test("Status text is OK", async () => {
        await expect(bookingResponse.statusText).toEqual("OK");
    });

    test("User firstname is the same as in request", async () => {
        await expect(bookingResponse.data.firstname).toEqual(
            requestData.firstName
        );
    });

    test("User lastname is the same as in request", async () => {
        await expect(bookingResponse.data.lastname).toEqual(
            requestData.lastName
        );
    });

    test("Price is the same as in request", async () => {
        await expect(bookingResponse.data.totalprice).toEqual(
            requestData.price
        );
    });

    test("User depositpaid is the same as in request", async () => {
        await expect(bookingResponse.data.depositpaid).toBe.true;
    });

    test("Checkin date is the same as in request", async () => {
        await expect(bookingResponse.data.bookingdates.checkin).toEqual(
            requestData.checkinDate
        );
    });

    test("Checkout date is the same as in request", async () => {
        await expect(bookingResponse.data.bookingdates.checkout).toEqual(
            requestData.checkoutDate
        );
    });

    test("User additionalneed is the same as in request", async () => {
        await expect(bookingResponse.data.additionalneeds).toEqual(
            variable.additionalNeeds
        );
    });
});

// Update a booking
describe("Update user booking", () => {
    let bookingResponse;

    beforeAll(async () => {
        bookingResponse = await updateUserBooking(
            body.updateUserBookingBody,
            variable.contentUpdateBooking()
        );
        console.log("Response is:", bookingResponse.data);
    });
    test("Status code is 200", async () => {
        await expect(bookingResponse.status).toEqual(200);
    });
    test("Status text is OK", async () => {
        await expect(bookingResponse.statusText).toEqual("OK");
    });
    test("User checkout date is the same as in request", async () => {
        await expect(bookingResponse.data.bookingdates.checkout).toEqual(
            requestData.checkoutDate2
        );
    });
    test("User price is the same as in request", async () => {
        await expect(bookingResponse.data.totalprice).toEqual(
            requestData.price2
        );
    });
});

// Update part of booking info
describe("Update part of booking info", () => {
    let bookingResponse;

    beforeAll(async () => {
        bookingResponse = await updatePartBooking(
            body.updatePartBookingBody,
            variable.contentUpdateBooking()
        );
        console.log("Response is:", bookingResponse.data);
    });
    test("Status code is 200", async () => {
        await expect(bookingResponse.status).toEqual(200);
    });
    test("Status text is OK", async () => {
        await expect(bookingResponse.statusText).toEqual("OK");
    });
    test("User depositpaid is the same as in request", async () => {
        await expect(bookingResponse.data.depositpaid).toBe.false;
    });
    test("User additionalneed is the same as in request", async () => {
        await expect(bookingResponse.data.additionalneeds).toEqual(
            variable.additionalNeeds2
        );
    });
});

// Delete a booking
describe("Delete user booking", () => {
    let bookingResponse;

    beforeAll(async () => {
        bookingResponse = await deleteUserBooking(
            variable.contentDeleteBooking()
        );
        console.log("Response is:", bookingResponse.data);
    });
    test("Status code is 201", async () => {
        await expect(bookingResponse.status).toEqual(201);
    });
    test("Status text is Created", async () => {
        await expect(bookingResponse.statusText).toEqual("Created");
    });
});

// Get deleted user booking info
describe("Get deleted user booking info", () => {
    let bookingResponse;

    beforeAll(async () => {
        bookingResponse = await getDeletedUserInfo(variable.contentGetById);
        console.log("response is:", bookingResponse.response);
    });
    test("Status code is 404", async () => {
        await expect(bookingResponse.response.status).toEqual(404);
    });
    test("Status text is Not Found", async () => {
        await expect(bookingResponse.response.statusText).toEqual("Not Found");
    });
});
