import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
});

function test() {
    return (
        <>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">slide 1</div>
                    <div className="swiper-slide">slide 2</div>
                    <div className="swiper-slide">slide 3</div>
                    <div className="swiper-slide">slide 4</div>
                    <div className="swiper-slide">slide 5</div>
                </div>
                <div className="swiper-button-next">lgiht</div>
                <div className="swiper-button-prev">left</div>
                <div className="swiper-pagination"></div>
            </div>
        </>
    )
}

export default test
