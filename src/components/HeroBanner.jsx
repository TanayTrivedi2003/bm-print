function HeroBanner() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 py-6">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src="/images/hero-banner.png"
                        alt="BM Print Hero Banner"
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
