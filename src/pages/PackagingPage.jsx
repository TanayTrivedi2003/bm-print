function PackagingPage() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center bg-white">
            <div className="mx-auto max-w-3xl px-4 text-center">

                {/* TITLE */}
                <h1 className="text-3xl font-bold text-gray-900">
                    Custom Packaging Solutions
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-4 text-base text-gray-600">
                    We’re working on premium custom packaging solutions designed to elevate
                    your brand, protect your products, and deliver an exceptional unboxing
                    experience.
                </p>

                {/* COMING SOON BADGE */}
                <div className="mt-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white">
                        🚀 Coming Soon
                    </span>
                </div>

                {/* SUB TEXT */}
                <p className="mt-6 text-sm text-gray-500">
                    Stay tuned — custom boxes, labels, and branded packaging options will
                    be available shortly.
                </p>

            </div>
        </section>
    );
}

export default PackagingPage;
