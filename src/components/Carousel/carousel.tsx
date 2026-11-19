import { useCallback, useEffect, useState } from "react";
import "./carousel.css";

const INTERVAL_MS = 8000;

const modules = import.meta.glob(
    "../../assets/CarouselImages/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}",
    { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

const carouselImages = Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src], index) => ({
        id: path,
        src,
        alt: `Kran im Einsatz ${index + 1}`,
    }));

export function ImageCarousel() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const count = carouselImages.length;

    const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
    const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

    useEffect(() => {
        if (paused || count < 2) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const timer = setTimeout(next, INTERVAL_MS);
        return () => clearTimeout(timer);
    }, [index, paused, next, count]);

    if (count === 0) return null;

    return (
        <section
            className="carousel-container"
            aria-roledescription="carousel"
            aria-label="Bilder unserer Einsätze"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="image-container">
                <button type="button" className="carousel-btn left" onClick={prev} aria-label="Vorheriges Bild">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
                </button>

                {carouselImages.map((image, i) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        className={i === index ? "carousel-slide active" : "carousel-slide"}
                        loading={i === 0 ? "eager" : "lazy"}
                        aria-hidden={i !== index}
                    />
                ))}

                <button type="button" className="carousel-btn right" onClick={next} aria-label="Nächstes Bild">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
                </button>

                <div className="carousel-dots">
                    {carouselImages.map((image, i) => (
                        <button
                            key={image.id}
                            type="button"
                            className={i === index ? "carousel-dot active" : "carousel-dot"}
                            aria-label={`Bild ${i + 1} von ${count} anzeigen`}
                            aria-current={i === index}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}