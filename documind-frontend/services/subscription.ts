import { plans } from "../data/plans";

export function getPlan(name: string) {

    switch (name.toLowerCase()) {

        case "free":
            return plans.free;

        case "starter":
            return plans.starter;

        case "business":
            return plans.business;

        case "enterprise":
            return plans.enterprise;

        default:
            return plans.free;

    }

}