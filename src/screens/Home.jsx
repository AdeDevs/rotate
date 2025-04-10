function HomeScreen() {
    return (
        <div className="home-page">
            <header className="hero">
                <div className="hero-bg"></div>
                <div>
                    <h1>Rotate</h1>
                </div>
            </header>
            <main className="home-main">
                <section className="we-are">
                    <div>
                        <h1>we're rotate studio. let's dance!</h1>
                        <p>
                            Our mission is to build community through dance. Rotate Studio offers beautifully-designed spaces to move, build, and socialize. We embrace diversity and body-positivity: all athletes are always welcome here.
                        </p>
                        <button>view schedule</button>
                    </div>
                    <div className="right-box"></div>
                    <div></div>
                </section>
                <h6>We’re a woman-owned company that believes in STRENGTH through MOVEMENT</h6>
                <section className="explore-classes">
                    <div>
                        <span>explore </span>
                        <span>classes</span>
                    </div>
                    <button>view classes</button>
                </section>
                <section className="class-types">
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
                </section>
            </main>
        </div>
    )
}

export default HomeScreen;