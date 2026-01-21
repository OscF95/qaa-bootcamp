import Page from "./page";

export class HomePage extends Page {

    public get sliderCarousel () {
        return $('#slider-carousel');
    }
}

export default new HomePage();