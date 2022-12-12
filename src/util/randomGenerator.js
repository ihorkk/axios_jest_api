import moment from "moment/moment";
import Chance from "chance";
const chance = new Chance();

export function randomFirstName() {
    return chance.first({ nationality: "it" });
}

export function randomLastName() {
    return chance.last({ nationality: "it" });
}

export function randomPrice() {
    return Math.floor(Math.random() * 81) + 20;
}

export function randomCheckinDate() {
    return moment().format("YYYY-MM-DD");
}

export function randomCheckoutDate() {
    return moment()
        .add(Math.floor(Math.random() * 3) + 2, "days")
        .format("YYYY-MM-DD");
}

export function randomPrice2() {
    return Math.floor(Math.random() * 401) + 100;
}

export function randomCheckoutDate2() {
    return moment()
        .add(Math.floor(Math.random() * 4) + 5, "days")
        .format("YYYY-MM-DD");
}
