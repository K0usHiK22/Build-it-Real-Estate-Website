import React, { useEffect, useState } from "react";
import { Data } from "../assets/assets";
import Projects from "./projects";

const CardSliderLogic = () => {
    const [currentIndex, setCurrentindex] = useState(0);
    const [cardstoShow, setCardstoshow] = useState(1);

    useEffect(() => {
        const CardsToShow = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setCardstoshow(3);
            } else if (width >= 768) {
                setCardstoshow(2);
            } else {
                setCardstoshow(1);
            }
        };

        CardsToShow();
        window.addEventListener("resize", CardsToShow);
        return () => window.removeEventListener("resize", CardsToShow);
    }, []);

    const HandleNext = () => {
        setCurrentindex((prevIndex) =>
            prevIndex + cardstoShow >= Data.length ? 0 : prevIndex + 1
        );
    };
    
    const HandlePrevious = () => {
        setCurrentindex((prevIndex) =>
            prevIndex === 0 ? Data.length - cardstoShow : prevIndex - 1
        );
    };
    

    useEffect(() => {
        const interval = setInterval(() => {
            HandleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [cardstoShow]);

    return (
        <Projects
            currentIndex={currentIndex}
            cardstoShow={cardstoShow}
            HandleNext={HandleNext}
            HandlePrevious={HandlePrevious}
        />
    );
};

export default CardSliderLogic;
