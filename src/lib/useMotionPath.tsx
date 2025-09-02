import { useCallback, useEffect, useRef } from "react"
import { useLenis } from 'lenis/react'
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type Lenis from "lenis"

// Register the plugins
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

interface UseMotionPathProps {
    trigger?: string
    startOffset?: string
    endOffset?: string
    scrollScrub?: boolean
    markers?: boolean
}

export const useMotionPath = ({
    trigger = ".trigger",
    startOffset = "top+=50px top",
    endOffset = "+=100%",
    scrollScrub = true,
    markers = false
}: UseMotionPathProps = {}) => {
    const divRef = useRef<HTMLDivElement>(null)
    const pathRef = useRef<SVGPathElement>(null)
    const motionTimeline = useRef<gsap.core.Timeline | null>(null)
    const $passedTrigger = useRef(false)
    
    // Function to calculate responsive offsets
    const calculateOffsets = useCallback(() => {
        if (!divRef.current || !pathRef.current) return { offsetX: 550, offsetY: 350 }
        
        const containerRect = divRef.current.getBoundingClientRect()
        const svgContainer = pathRef.current.closest('svg')
        if (!svgContainer) return { offsetX: 550, offsetY: 350 }
        
        const svgParent = svgContainer.parentElement
        if (!svgParent) return { offsetX: 550, offsetY: 350 }
        
        const parentRect = svgParent.getBoundingClientRect()
        
        // Calculate offsets relative to the container
        const offsetX = parentRect.left - containerRect.left
        const offsetY = parentRect.top - containerRect.top
        
        return { offsetX, offsetY }
    }, [])

    // Mouse move handler for mask following
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (divRef.current) {
            const { left, top } = divRef.current.getBoundingClientRect()
            const x = e.clientX - left
            const y = e.clientY - top
            divRef.current.style.setProperty('--mask-x', `${x}px`)
            divRef.current.style.setProperty('--mask-y', `${y}px`)
        }
    }, [])

    // Start motion path animation
    const startMotionPath = useCallback(() => {
        if (divRef.current && pathRef.current) {
            // Stop any existing motion path animation
            if (motionTimeline.current) {
                motionTimeline.current.kill()
            }
            
            // Calculate responsive offsets
            // const { offsetX, offsetY } = calculateOffsets()
            
            // motionTimeline.current = gsap.timeline({
            //     paused: true,
            //     scrollTrigger: {
            //         trigger: trigger,
            //         start: startOffset,
            //         end: endOffset,
            //         scrub: false,
            //         markers: markers,
            //         invalidateOnRefresh: true,
            //         onEnter: () => {
            //             followPath(offsetX, offsetY)
            //         }
            //     }
            // })
            
            // Create a dummy object to animate along the path
          
        }
    }, [trigger, startOffset, endOffset, scrollScrub, markers, calculateOffsets])
    const followPath = useCallback((tl: gsap.core.Timeline,offsetX: number, offsetY: number) => {
        const follower = { x: 0, y: 0 }
        tl.to(follower, {
            ease: "power3.out",
            duration: 2,
            motionPath: {
                path: pathRef.current!,
                offsetX: offsetX,
                offsetY: offsetY-80,
                autoRotate: false,
            },
            onUpdate: function () {
                if (divRef.current) {
                    divRef.current.style.setProperty('--mask-x', `${follower.x}px`)
                    divRef.current.style.setProperty('--mask-y', `${follower.y}px`)
                }
            }
        },"<=0.25")
    }, [])
    // Move to initial position
    const moveToInitialPosition = useCallback(() => {
        if (divRef.current && pathRef.current) {
            window.removeEventListener('mousemove', handleMouseMove)

            // Calculate responsive offsets
            const { offsetX, offsetY } = calculateOffsets()
            
            // Get the initial position of the path (first point + offsets)
            const initialPoint = pathRef.current.getPointAtLength(0)
            const initialX = initialPoint.x + offsetX
            const initialY = initialPoint.y + offsetY

            // Animate mask to initial position
            const tl = gsap.timeline()

            tl.to({}, {
                duration: 1,
                // ease: "power3.out",
                onUpdate: function () {
                    const progress = this.progress()
                    if (divRef.current) {
                        // Get current mask position
                        const currentX = parseFloat(getComputedStyle(divRef.current).getPropertyValue('--mask-x')) || 448
                        const currentY = parseFloat(getComputedStyle(divRef.current).getPropertyValue('--mask-y')) || -50

                        // Interpolate to initial position
                        const x = currentX + (initialX - currentX) * progress
                        const y = currentY + (initialY - currentY) * progress

                        divRef.current.style.setProperty('--mask-x', `${x}px`)
                        divRef.current.style.setProperty('--mask-y', `${y}px`)
                    }
                },
            })
            followPath(tl,offsetX, offsetY)
        }
    }, [handleMouseMove, calculateOffsets])

    // Lenis scroll handler
    const lenisHandler = useCallback((lenis: Lenis) => {
        if (lenis.progress >= 0.001) {
            if (!$passedTrigger.current) {
                $passedTrigger.current = true
                moveToInitialPosition()
            }
        } else {
            $passedTrigger.current = false
            window.addEventListener('mousemove', handleMouseMove)
        }
    }, [handleMouseMove, moveToInitialPosition])

    // Initialize motion path
    const initializeMotionPath = useCallback(() => {
        setTimeout(() => {
            startMotionPath()
        }, 10)
    }, [startMotionPath])

    // Handle window resize to recalculate motion path
    useEffect(() => {
        let resizeTimeout: NodeJS.Timeout
        
        const handleResize = () => {
            // Debounce resize to avoid excessive recalculations
            clearTimeout(resizeTimeout)
            resizeTimeout = setTimeout(() => {
                if (motionTimeline.current && !$passedTrigger.current) {
                    // Only restart if we're in motion path mode
                    startMotionPath()
                }
            }, 100)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('mousemove', handleMouseMove)
        
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
            clearTimeout(resizeTimeout)
        }
    }, [handleMouseMove, startMotionPath])

    // Use Lenis for scroll handling
    useLenis(lenisHandler, [lenisHandler])

    return {
        divRef,
        pathRef,
        initializeMotionPath,
        startMotionPath,
        moveToInitialPosition,
        handleMouseMove
    }
}
