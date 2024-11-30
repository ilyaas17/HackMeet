import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className="bg-gray-100 py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Platform</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Welcome to the future of hackathons! Our virtual platform is designed to bring together
                    innovators, coders, and creators from around the world. Collaborate, build, and innovate
                    from anywhere, at any time. Join a community of problem-solvers and turn your ideas into
                    reality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Global Collaboration</h3>
                        <p className="text-gray-600">
                            Connect with participants across the globe and work together to tackle challenges
                            with diverse perspectives.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Innovative Challenges</h3>
                        <p className="text-gray-600">
                            Take on exciting problem statements provided by leading organizations and compete for
                            amazing rewards.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Seamless Experience</h3>
                        <p className="text-gray-600">
                            Participate effortlessly with our user-friendly platform, tailored to streamline the
                            hackathon process.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

