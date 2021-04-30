import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './styles.scss';

function CustomScrollbars({ children }) {
    return (
        <Scrollbars
            onScroll={Scrollbars.handleScroll}
            onScrollFrame={Scrollbars.handleScrollFrame}
            onScrollStart={Scrollbars.handleScrollStart}
            onScrollStop={Scrollbars.handleScrollStop}
            onUpdate={Scrollbars.handleUpdate}
            thumbMinSize={30}
            renderTrackHorizontal={props => (
                <div {...props} className="track-horizontal" />
            )}
            renderTrackVertical={props => (
                <div {...props} className="track-vertical" />
            )}
            renderThumbHorizontal={props => (
                <div {...props} className="thumb-horizontal" />
            )}
            renderThumbVertical={props => (
                <div {...props} className="thumb-vertical" />
            )}
            renderView={props => <div {...props} className="view" />}
            {...Scrollbars.props}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            // autoHeight
            // autoHeightMin={0}
            // autoHeightMax={200}
            // renderView={Scrollbars.renderView}
            // renderTrackHorizontal={Scrollbars.renderTrackHorizontal}
            // renderTrackVertical={Scrollbars.renderTrackVertical}
            // renderThumbHorizontal={Scrollbars.renderThumbHorizontal}
            // renderThumbVertical={Scrollbars.renderThumbVertical}
        >
            {children}
        </Scrollbars>
    );
}

export default CustomScrollbars;
