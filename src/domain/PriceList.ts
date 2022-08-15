import { ServiceType, ServiceYear } from "./constants";

type PriceList = { [key in ServiceType]?: { [key in ServiceYear]?: number } };

export const PriceList: PriceList = {
    "Photography": {
        2020: 1700,
        2021: 1800,
        2022: 1900
    },
    "VideoRecording": {
        2020: 1700,
        2021: 1800,
        2022: 1900
    },
    "WeddingSession": {
        0: 600
    },
    "BlurayPackage": {
        0: 300
    },
    "TwoDayEvent": {
        0: 400
    }
}