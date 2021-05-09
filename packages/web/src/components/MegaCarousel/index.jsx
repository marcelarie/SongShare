import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import MegaSongCard from '../MegaSongCard';

const MegaCarousel = ({ ids, type }) => {
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
    const ByID = useSelector(store => store[type].byID);
    return (
        <Carousel
            className="noselect"
            showDots="true"
            responsive={responsive}
            infinite="true"
            autoPlay={Carousel.deviceType !== 'mobile' ? 'true' : 'false'}
            autoPlaySpeed={9000}
            keyBoardControl="true"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            deviceType={Carousel.deviceType}

            // CUSTOM
            // customLeftArrow={<CustomLeftArrow />}
            // customRightArrow={<CustomRightArrow />}
            //   customDot={<CustomDot />}
        >
                {ids.map(id => {
                    const item = ByID[id];
                    return <MegaSongCard song={item} key={item._id} />;
                })}
        </Carousel>
    );
};

export default MegaCarousel;
