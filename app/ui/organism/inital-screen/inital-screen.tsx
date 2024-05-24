'use client';
import "./initial-screen.scss";
import { useEffect } from "react"
import { useLoadedStore } from "@/app/lib/store";
export default function InitialScreen() {
    const { isLoaded, setIsLoaded } = useLoadedStore();
    useEffect(() => {
        let introRef = document.querySelector('.intro');
        let logoSpan = document.querySelectorAll('.logo');

        if (!isLoaded) {
            setTimeout(() => {

                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.add('active')
                    }, (idx + 1) * 400);
                })

                setTimeout(() => {
                    logoSpan.forEach((span, idx) => {
                        setTimeout(() => {
                            span.classList.remove('active');
                            span.classList.add('fade');
                        }, (idx + 1) * 50);
                    })
                }, 3000);

                setTimeout(() => {
                    introRef?.classList.add('out');
                    setTimeout(() => {
                        setIsLoaded(true);
                    }, 1000);

                }, 3300);
            }, 0)
        } else {
            setIsLoaded(true);
            introRef?.classList.add('out')
        }

        return () => {

        };
    }, []);

    return (

        <div className="intro">
            <h1 className="logo-header" >
                <span className="logo">ra</span><span className="logo">b2b</span> <span className="logo">Johan</span> <span className="logo">Valbuena</span>
            </h1>
        </div>


    )
}