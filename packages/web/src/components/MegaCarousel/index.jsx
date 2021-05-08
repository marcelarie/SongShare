import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MegaSongCard from '../MegaSongCard';

const MegaCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Carousel
            showDots="true"
            responsive={responsive}
            infinite="true"
            // autoPlay={Carousel.deviceType !== 'mobile' ? 'true' : 'false'}
            // autoPlaySpeed={9000}
            // keyBoardControl="true"
            // customTransition="all .5"
            transitionDuration={1500}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            // deviceType={Carousel.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
        >
            <MegaSongCard />
            <MegaSongCard />
            <MegaSongCard />
            <MegaSongCard />
        </Carousel>
    );
};

export default MegaCarousel;
