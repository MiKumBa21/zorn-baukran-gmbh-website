import { useEffect, useState } from 'react';
import './carousel.css';


export function ImageCarousel() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const carouselImages = Object.entries(
        import.meta.glob("../../assets/CarouselImages/*.{jpg,jpeg,png,JPG}", {
            eager: true,
            query: "?url",
            import: "default",
        })
    ).map(([path, src], index) => ({
        id: path,
        src: src as string,
        alt: `Kran im Einsatz ${index + 1}`,
    }));

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? carouselImages.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % carouselImages.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 10000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <section>
            <div className="image-container">
                <button className="nav-button left" onClick={handlePreviousClick}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="m15 18-6-6 6-6" />
                    </svg></button>

                {carouselImages.map((image, index) => (
                    <img
                        src={image.src}
                        alt={image.alt}
                        className={currentImageIndex === index ? 'block' : 'hidden'}
                        key={image.id}
                    />
                ))}

                <button className="nav-button right" onClick={handleNextClick}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
