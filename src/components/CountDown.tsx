"use client"
import React, { useState, useEffect } from "react";

const CountDown = () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10); // Устанавливаем дату на 10 дней вперёд

    const difference: number = futureDate.getTime() - +new Date(); // Преобразуем разницу в миллисекундах к числовому типу

    const [delay, setDelay] = useState<number>(difference);

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const m = Math.floor((difference / 1000 / 60) % 60);
    const s = Math.floor((difference / 1000) % 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setDelay(prevDelay => prevDelay - 1000); // Уменьшаем разницу на 1 секунду
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <span className="font-bold text-5xl text-yellow-300">
            {d}:{h}:{m}:{s}
        </span>
    );
};

export default CountDown;
