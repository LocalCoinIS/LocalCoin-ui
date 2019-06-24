import React from "react";
import Translate from "react-translate-component";
import {otcBackground,
        slide1,
        slide2,
        slide2Tooltip,
        slide3,
        slide3Tooltip,
        slide4,
        slide4Tooltip,
        sliderArrow
} from "../../assets/brand-new-layout/img/images";

class OTC extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 1,
            isWheelEnd: true
        };

    }

    componentWillMount() {
        this._scrollReady();
    }

    componentDidMount() {
        this._showSlides(this.state.slideIndex);
    }

    _plusSlides(n) {
        this._showSlides(this.state.slideIndex += n);
    }

    _currentSlide(n) {
        this._showSlides(this.state.slideIndex = n);
    }

    _showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("otc-slider-item");
        let dots = document.getElementsByClassName("otc-slider__dots--dot");
            if (n > slides.length) {
                this.setState({slideIndex: 1});
                n = 1;
            }
            if (n < 1) {
                this.setState({slideIndex: slides.length});
                n = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
                slides[i].className = slides[i].className.replace(" active", "");
            }
            slides[n - 1].style.display = "block";
            slides[n - 1].className += " active";
            dots[n - 1].className += " active";
    }

    _scrollReady() {
        let _this = this;
        let elem = window;
        if (elem.addEventListener) {
            let startY,
                distY;
            elem.addEventListener("touchstart", function(e) {
                e.preventDefault();
                let touchobj = e.changedTouches[0];
                startY = touchobj.pageY;

            });
            elem.addEventListener("touchmove", function(e) {
                e.preventDefault();
            });
            elem.addEventListener("touchend", function(e) {
                e.preventDefault();
                let touchobj = e.changedTouches[0];
                distY = touchobj.pageY - startY;
                if(distY > 50) {
                    _this._plusSlides(-1);
                } else if(distY < -50) {
                    _this._plusSlides(1);
                }
            });
            if ('onwheel' in document) {
                // IE9+, FF17+, Ch31+
                elem.addEventListener("wheel", function(e) {
                    _this._onWheel(e);
                });
            } else if ('onmousewheel' in document) {
                // устаревший вариант события
                elem.addEventListener("mousewheel", function(e) {
                    _this._onWheel(e);
                });
            } else {
                // Firefox < 17
                elem.addEventListener("MozMousePixelScroll", function(e) {
                    _this._onWheel(e);
                });
            }
        } else { // IE8-
            elem.attachEvent("onmousewheel", function(e) {
                _this._onWheel(e);
            });
        }
    }

    _onWheel(e) {
        let _this = this;
        if(_this.state.isWheelEnd) {
            e = e || window.event;
            let delta = e.deltaY;
            if(e.wheelDelta){
                delta = -e.wheelDelta;
            }
            if(delta > 0){
                _this._plusSlides(1);
            } else {
                _this._plusSlides(-1);
            }

            _this.setState({isWheelEnd: false});
            setTimeout(function() {
                _this.setState({isWheelEnd: true});
            }, 500);
        }

    }

    render() {

        return (
            <div className="page-otc" style={{backgroundImage: `url(${otcBackground})`}}>
                <div className="page-otc-container">
                    <div className="otc-slider">
                        <div className="otc-slider-item fade">
                            <img src={slide1}/>
                        </div>
                        <div className="otc-slider-item fade">
                            <img src={slide2}/>
                            <div className={"slide-tooltip"}>
                                <img src={slide2Tooltip}/>
                            </div>
                        </div>
                        <div className="otc-slider-item fade">
                            <img src={slide3}/>
                                <div className={"slide-tooltip"}>
                                    <img src={slide3Tooltip}/>
                                </div>
                        </div>
                        <div className="otc-slider-item fade">
                            <img src={slide4}/>
                                <div className={"slide-tooltip"}>
                                    <img src={slide4Tooltip}/>
                                </div>
                        </div>
                    </div>
                    <div className="otc-slider__navigation">
                        <div className="otc-slider__dots">
                            <div className="otc-slider__dots--dot" onClick={this._currentSlide.bind(this, 1)}>1</div>
                            <div className="otc-slider__dots--dot" onClick={this._currentSlide.bind(this, 2)}>2</div>
                            <div className="otc-slider__dots--dot" onClick={this._currentSlide.bind(this, 3)}>3</div>
                            <div className="otc-slider__dots--dot" onClick={this._currentSlide.bind(this, 4)}>4</div>
                        </div>
                        <div className="otc-slider__tooltip">
                            <div className="tooltip__desc">
                                Scroll down
                            </div>
                            <div className="tooltip__img">
                                <img src={sliderArrow}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OTC;
