import Footer from "./Footer";

function ClassPage() {
    return (
        <div className="class-page">
            <header className="hero">
                <div className="hero-bg"></div>
                <div>
                    <h1>CLASSES</h1>
                </div>
            </header>
            <main className="class-main">
                <section className="class-types">
                    <div>
                        <section className="high-class"></section>
                        <section className="class-info">
                            <h1>HIGH ENERGY TOP HIP HOP HITS</h1>
                            <p>
                                60-min easy-to-follow high energy hip hop dances with the best music. Dances change monthly.
                            </p>
                            <button>book online</button>
                        </section>
                    </div>
                    <div>
                        <section className="contemporary-class"></section>
                        <section className="class-info">
                            <h1>CONTEMPORARY INTERPRETIVE</h1>
                            <p>
                                60-min easy-to-follow high energy hip hop dances with the best music. Dances change monthly.
                            </p>
                            <button>book online</button>
                        </section>
                    </div>

                    <div className="pause">
                        <section className="body-barre"></section>
                        <section className="class-info">
                            <h1>body barre signature</h1>
                            <p>
                                60-min easy-to-follow high energy hip hop dances with the best music. Dances change monthly.
                            </p>
                            <button>book online</button>
                        </section>
                    </div>
                    <div>
                        <section className="jazz-funk"></section>
                        <section className="class-info">
                            <h1>jazz funk hit</h1>
                            <p>
                                60-min easy-to-follow high energy hip hop dances with the best music. Dances change monthly.
                            </p>
                            <button>book online</button>
                        </section>
                    </div>
                    <div>
                        <section className="sculpt-workout"></section>
                        <section className="class-info">
                            <h1>CONTEMPORARY INTERPRETIVE</h1>
                            <p>
                                60-min easy-to-follow high energy hip hop dances with the best music. Dances change monthly.
                            </p>
                            <button>book online</button>
                        </section>
                    </div>
                </section>
                <section className="the-squad">
                    <div>
                        <span>meet </span>
                        <span>the</span>
                        <span>squad</span>
                    </div>
                    <button>more about us</button>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ClassPage;