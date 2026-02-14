'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useRef } from "react"
import { Card, CardContent } from "./ui/card"

export function CarouselSize() {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    return (
        <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[plugin.current]}
            className="w-[60vw]"
        >
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-full">
                        <div className="p-1">
                            <Image
                                src={'/phone-mockup-' + (index + 1) + '.png'}
                                alt={'carousel image ' + (index + 1)}
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-lg object-cover"
                                unoptimized
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}