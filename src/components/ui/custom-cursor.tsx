"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function CustomCursor() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    // Disable custom cursor strictly for Healthcare pages to maintain "Technical/Professional" feel
    const isHealthcare = pathname?.startsWith("/healthcare");

    const [hoverState, setHoverState] = useState<"default" | "pointer" | "image" | "button">("default");

    // Mouse coordinates
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the cursor movement (10-20ms lag feel)
    const smoothX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
    const smoothY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => document.body.classList.add("cursor-clicking");
        const handleMouseUp = () => document.body.classList.remove("cursor-clicking");

        // Hover detection logic
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for buttons or interactive elements
            if (target.matches("button, button *, .button-hover, [role='button']")) {
                setHoverState("button");
            }
            // Check for links
            else if (target.matches("a, a *")) {
                setHoverState("pointer");
            }
            // Check for images
            else if (target.matches("img, .img-hover")) {
                setHoverState("image");
            }
            else {
                setHoverState("default");
            }
        };

        const handleMouseOut = () => {
            setHoverState("default");
        };

        window.addEventListener("mousemove", updateMouse);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", updateMouse);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, [mouseX, mouseY, isVisible]);

    // Don't render on mobile/touch devices where hover isn't primary
    // simple check: if window width < 768 (md), usually touch. 
    // But hooks run on client. We'll use CSS media query to hide it on touch, or just render it and let it be.
    // The user said "Replace the default cursor", usually implies desktop. 
    // We'll hide it via CSS using 'hidden md:block' on the wrapper to be safe.

    // If we are on healthcare page, return null (but AFTER all hooks have run)
    if (isHealthcare) return null;

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block mix-blend-difference text-white", // mix-blend-difference allows automatic color switching (white on black, black on white)
                !isVisible && "opacity-0"
            )}
            style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            {/* Minimal Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-current rounded-full" />

            {/* Architectural Brackets Container */}
            <motion.div
                className="relative flex items-center justify-center"
                animate={{
                    width: hoverState === "button" ? 60 : hoverState === "pointer" ? 32 : hoverState === "image" ? 20 : 26,
                    height: hoverState === "button" ? 30 : hoverState === "pointer" ? 32 : hoverState === "image" ? 20 : 26,
                    opacity: hoverState === "pointer" ? 0.6 : 1, // Soften on links
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            >
                {/* 
                    Brackets: Minimal L-shapes 
                    Thickness: 1px (border)
                    Length: 6px
                */}

                {/* Top Left */}
                <div className="absolute top-0 left-0 w-[6px] h-[6px] border-t-[1px] border-l-[1px] border-current" />

                {/* Top Right */}
                <div className="absolute top-0 right-0 w-[6px] h-[6px] border-t-[1px] border-r-[1px] border-current" />

                {/* Bottom Left */}
                <div className="absolute bottom-0 left-0 w-[6px] h-[6px] border-b-[1px] border-l-[1px] border-current" />

                {/* Bottom Right */}
                <div className="absolute bottom-0 right-0 w-[6px] h-[6px] border-b-[1px] border-r-[1px] border-current" />

            </motion.div>
        </motion.div>
    );
}
