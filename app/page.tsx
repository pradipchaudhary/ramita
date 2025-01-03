import Header from "@/components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <section
                id="hero"
                className="bg-bannerImg bg-repeat bg-cover bg-bottom w-full h-screen"
            >
                <div className="w-full h-screen bg-blackOverlay">
                    <h1>Hero section </h1>
                </div>
            </section>
        </>
    );
}
