import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.jpeg'

const images = [
    'https://images.unsplash.com/photo-1712178435871-48d630f15969?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHB1cnBsZSUyMGNvbG9yfGVufDB8fDB8fHww',
    'https://t4.ftcdn.net/jpg/08/11/83/31/360_F_811833149_6MO2TGZ02dt9amBMVcWSpN1hD7Il2b8C.jpg',
    'https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg',
    'https://images.unsplash.com/photo-1664037170371-045dee5604a3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHB1cnBsZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D',
    'https://i.pinimg.com/736x/76/a1/23/76a123291f4050e45ddee332ad613f5d.jpg',
    'https://e0.pxfuel.com/wallpapers/708/45/desktop-wallpaper-purple-jpg-blue-purple-colors-neon.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD58yT90_Nuvm2cVcUjcegpmaxpB6NlPnibQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-x-fOl6m4jhZfWLWpg0EZuw5yWLoCBk3zbA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDOdA9MAV3hCdrL9aZWEiR276Yy9UE_f8ICtsxA--BQJ8iKOPAFFIKuO92_aS4l8ApgI&usqp=CAU',
    'https://c4.wallpaperflare.com/wallpaper/750/649/236/the-sky-girl-space-night-wallpaper-preview.jpg',
    'https://static.vecteezy.com/system/resources/previews/039/363/857/non_2x/ai-generated-floral-purple-flower-background-ai-generated-photo.jpg',
];

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [imageOrder, setImageOrder] = useState([0, 1, 2]);

    const shuffleImages = () => {
        const randomIndices = [];
        while (randomIndices.length < 3) {
            const randomIndex = Math.floor(Math.random() * images.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }
        setImageOrder(randomIndices);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            shuffleImages();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-300 text-white">
            <header className="p-6 text-center pt-28 ">
                <img
                    src={logo}
                    alt="Website Logo"
                    className="mx-auto mb-24 h-96 w-1/2 rounded-lg opacity-50"
                />
                <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-900  to-blue-900 bg-clip-text text-transparent">About Us</h1>
            </header>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/400x250?text=Card+Image"
                            alt="Card Image"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p>
                                We are dedicated to providing top-quality services to help you
                                achieve your goals. Our mission is to build lasting relationships
                                with our clients through trust, innovation, and excellence.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/400x250?text=Card+Image+2"
                            alt="Card Image"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                            <p>
                                Our vision is to be a global leader in our industry, providing
                                innovative solutions that exceed customer expectations. We aim
                                to revolutionize the way our industry operates.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://via.placeholder.com/400x250?text=Card+Image+3"
                            alt="Card Image"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                            <p>
                                Integrity, innovation, and excellence are at the core of what we
                                do. We believe in building a strong foundation of trust and
                                always putting our customers first.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Random Image Secting */}
                <div className="container mx-auto px-4 py-12 text-center">
                    <h2 className="text-7xl font-bold my-12 font-bold text-purple-950">Our Team</h2>

                    <div className="flex justify-center gap-4">
                        {/* Image Slot 1 */}
                        <div className="relative w-1/3">
                            <img
                                src={images[imageOrder[0]]}
                                alt="Random Image 1"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25 rounded-lg"></div>
                        </div>

                        {/* Image Slot 2 */}
                        <div className="relative w-1/3">
                            <img
                                src={images[imageOrder[1]]}
                                alt="Random Image 2"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25 rounded-lg"></div>
                        </div>

                        {/* Image Slot 3 */}
                        <div className="relative w-1/3">
                            <img
                                src={images[imageOrder[2]]}
                                alt="Random Image 3"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25 rounded-lg"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
