function SchedulePage(params) {
    return (
        <div className="schedule-page">
            <main className="schedule-main">
                <h6>schedule</h6>
                <section className="about-schedules">
                    <div className="schedule-bg"></div>
                    <div className="schedule-info">
                        <h1>fitness for all</h1>
                        <div className="appointment-box">
                        <ul className="sign">
                            <li>sign up</li>
                            <li>login</li>
                        </ul>
                            <h2>select appointment</h2>
                           <div className="available-appts">
                           <div className="appointment">
                                <section>
                                <h3>Body Barre Signature</h3>
                                <p>1 hour 30 minutes @ $30.00</p>
                                </section>
                                <button>book</button>
                            </div>
                            <hr />
                           <div className="appointment">
                                <section>
                                <h3>High Energy Hip Hop Hits</h3>
                                <p>1 hour @ $25.00</p>
                                </section>
                                <button>book</button>
                            </div>
                            <hr />
                           <div className="appointment">
                                <section>
                                <h3>20 Minute Sculpt Workout</h3>
                                <p>20 minutes @ $10.00</p>
                                </section>
                                <button>book</button>
                            </div>
                            <hr />
                           <div className="appointment">
                                <section>
                                <h3>Contemporary Interpretive</h3>
                                <p>1 hour @ $25.00</p>
                                </section>
                                <button>book</button>
                            </div>
                            <hr />
                           <div className="appointment">
                                <section>
                                <h3>Jazz Funk HIIT</h3>
                                <p>1 hour @ $25.00</p>
                                </section>
                                <button>book</button>
                            </div>
                           </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SchedulePage;