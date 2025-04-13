import Footer from "./Footer";

function AboutPage() {
    return (
        <div className="about-page">
            <header className="hero">
                <div className="hero-bg"></div>
                <div>
                    <h1>about us</h1>
                </div>
            </header>
            <main className="about-main">
                <div className="about-fitness">
                <div className="founder-bg"></div>
                    <div className="fitness-info">
                        <h1>fitness for all</h1>
                        <p>
                            Rotate Studio is a dance and fitness studio for BODIES of all abilities, genders, races, shapes, and sizes located in the heart of HOUSTON, TEXAS.
                            <br /><br />
                            Our mission is to build community, acceptance and culture through dance. ROTATE STUDIO offers beautifully-designed spaces to move, build, and socialize. We embrace diversity and body-positivity: all athletes are always welcome here.
                        </p>
                    </div>
                </div>
                <h6>INSPIRING STRENGTH and BUILDING community through judgment-free dance</h6>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage;