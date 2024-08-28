import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLenis } from '@studio-freight/react-lenis'
import { useEffect, useLayoutEffect } from 'react'

export default function ScrollTriggerConfig() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.clearScrollMemory('manual')
        ScrollTrigger.defaults({
            markers: false,
        })
    }, [])

    const lenis = useLenis(ScrollTrigger.update)
    useEffect(() => ScrollTrigger.refresh(), [lenis])

    return null
}