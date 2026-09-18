
    let navBtns=document.querySelectorAll(".navBtns")

    navBtns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            btn.classList.toggle("navBtnColorChange")
        })
    })

   

    const observerr = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-now');
            }
        });
    }, { threshold: 0.2 });

    const hand1 = document.querySelector(".hand1");
    const hand2 = document.querySelector(".hand2");
    const handCaption = document.querySelector(".handsCaption")
    observerr.observe(hand1);
    observerr.observe(hand2);
    observerr.observe(handCaption);


    const mainSection = document.querySelector('.scrollSection');
    const planets = document.querySelectorAll('.planetContainer');
    const path = document.querySelector('#curve');
    const svg = document.querySelector('#orbit-svg');

    window.addEventListener('scroll', () => {

        const sectionRect = mainSection.getBoundingClientRect();
        const sectionHeight = mainSection.offsetHeight;
        const viewportHeight = window.innerHeight;

        let scrollDistance = -sectionRect.top;
        let scrollMax = sectionHeight - viewportHeight;
        let totalProgress = Math.max(0, Math.min(1, scrollDistance / scrollMax));

        const numPlanets = planets.length;
        let activeIndex = Math.floor(totalProgress * numPlanets);
        if (activeIndex >= numPlanets) activeIndex = numPlanets - 1;

        let planetProgress = (totalProgress * numPlanets) - activeIndex;

        planets.forEach((planet, index) => {
            if (index === activeIndex) {
                planet.style.display = 'block';
                const pathLength = path.getTotalLength();
                let moveDistance;
                
                if (index === 0) {
                    moveDistance = (0.5 - (planetProgress * 0.5)) * pathLength;
                }
                else if (index === numPlanets - 1) {
                    moveDistance = (1.0 - (planetProgress * 0.5)) * pathLength;
                }
                else {
                    moveDistance = (1.0 - planetProgress) * pathLength;
                }

                const point = path.getPointAtLength(moveDistance);
                const svgRect = svg.getBoundingClientRect();
                const pt = svg.createSVGPoint();
                pt.x = point.x;
                pt.y = point.y;

                const screenPoint = pt.matrixTransform(svg.getScreenCTM());
                const finalX = screenPoint.x - svgRect.left;
                const finalY = screenPoint.y - svgRect.top;

                planet.style.transform = `translate(${finalX}px, ${finalY}px) translate(-50%, -50%)`;
            } else {
                planet.style.display = 'none';
            }
        });
    });


    const setupRing = (id, count, radius, startImg) => {

        const ring = document.getElementById(id);

        for (let i = 0; i < count; i++) {

            const icon = document.createElement('div');



            icon.className = 'icon';

            icon.style.backgroundImage = `url('https://i.pravatar.cc/150?u=${startImg + i}')`;
            const angle = (i / count) * Math.PI * 2;

            const x = Math.cos(angle) * radius;

            const y = Math.sin(angle) * radius;



            gsap.set(icon, {
                x: x, y: y, xPercent: -50,

                yPercent: -50
            });

            ring.appendChild(icon);

        }

    };

    gsap.registerPlugin(ScrollTrigger);


    const clamp = (min, val, max) => Math.min(Math.max(val, min), max);

    function getClamp() {

        const rootFontSize = 16;
        const vw = window.innerWidth / 100;

        const fluidValue1 = clamp(15.625 * rootFontSize, (13.1964 * rootFontSize) + (11.4286 * vw), 40.625 * rootFontSize);
        const fluidValue2 = clamp(28.125 * rootFontSize, (23.875 * rootFontSize) + (20 * vw), 71.875 * rootFontSize);

        return {
            first: fluidValue1,
            second: fluidValue2
        };

    }

    function init() {
        const { first, second } = getClamp();
        setupRing('innerRing', 12, first, 100);
        setupRing('outerRing', 18, second, 200);

        ScrollTrigger.refresh();
    }

    init()


    window.addEventListener('resize', init);





    const mainTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".pictureBloom",
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });

    mainTl.set(".ring-container", { scale: 0, opacity: 1, rotation: 0 });

    mainTl.set("#mainText", { opacity: 0, scale: 0.7 });


    mainTl



        .to(".ring-container", {

            duration: 3,

            scale: 4.5,

            ease: "power2.in"

        }, 0)


        .to("#innerRing", {

            rotation: 360,

            duration: 6,

            ease: "none"

        }, 0)



        .to("#outerRing", {

            rotation: -360,

            duration: 6,

            ease: "none"

        }, 0)


        .to("#mainText", {

            opacity: 1,

            scale: 1,

            duration: 2,

            ease: "expo.out"

        }, 1.5)

    document.addEventListener('DOMContentLoaded', () => {

        const btns = document.querySelectorAll(".box-header");

        btns.forEach(btn => {
            btn.addEventListener("click", () => {
                let parent = btn.parentElement;
                parent.classList.toggle("active")
            })
        })


    });
