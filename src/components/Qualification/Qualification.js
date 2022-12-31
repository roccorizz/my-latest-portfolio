import React, { useState } from 'react';
import './Qualification.css'
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experience
                    </div>
                </div>
                <div className="qualification__sections">

                    {/* -------------- Education ----------------- */}

                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Science & Engineering</h3>
                                <span className="qualification__subtitle">National University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2023 - 2016</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Higher Secondary Certificate</h3>
                                <span className="qualification__subtitle">Sreemangal Govt. College</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2014 - 2013</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Secondary School Certificate</h3>
                                <span className="qualification__subtitle">The Buds Residential Model School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> 2012 - 2011</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                    {/* -------------- Experience ---------------- */}

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data2">

                            {/* <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div> */}
                            <div>
                                <h3 className="qualification__title">Ready to get experience</h3>
                                {/* <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;