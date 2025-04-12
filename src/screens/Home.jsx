import Footer from "./Footer";

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
            <section className="mid-point">

                <div class="marquee">
                    <div className="left"></div>
                    <div class="marquee-content">
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="the-founder">
                    <div className="founder-info">
                        <h1>meet the founder</h1>
                        <p>
                            Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do.
                        </p>
                    </div>
                    <div className="founder-bg"></div>
                </div>
                <div class="marquee">
                    <div className="left"></div>
                    <div class="marquee-content">
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                        <span>POP, LOCK, & DANCE&nbsp;</span>
                    </div>
                    <div className="right"></div>
                </div>
                <h6>INSPIRING STRENGTH and BUILDING community through judgment-free dance</h6>
            </section>
            <Footer />
        </div>
    )
}

export default HomeScreen;