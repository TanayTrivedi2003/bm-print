function AvatarPage() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center bg-white px-4">
            <div className="max-w-xl text-center">
                {/* ICON / IMAGE */}
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                    <span className="text-4xl">🧑‍🎨</span>
                </div>

                {/* HEADING */}
                <h1 className="text-3xl font-bold text-gray-900">
                    Custom Avatars
                </h1>

                {/* SUB TEXT */}
                <p className="mt-3 text-gray-600">
                    We’re working on something exciting!
                    Soon you’ll be able to create personalized avatars for branding,
                    profiles, and creative use.
                </p>

                {/* BADGE */}
                <div className="mt-6 inline-block rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white">
                    🚀 Coming Soon
                </div>

                {/* OPTIONAL CTA */}
                <p className="mt-6 text-sm text-gray-500">
                    Stay tuned — this feature is launching shortly.
                </p>
            </div>
        </section>
    );
}

export default AvatarPage;
