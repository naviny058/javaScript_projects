let t1 = gsap.timeline()
t1.from('.logo h2, ul li , .btn', {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5
})

t1.from('.img img', {
    x: -50,
    duration: 0.4,
    opacity: 0,
    blur: 1,
    // scale: 0.8
})
t1.from('.content h2, .content h3', {
    y: 50,
    duration: 0.5,
    opacity: 0,
    stagger: 0.5
})
t1.from('.bottom-content', {
    x: 100,
    duration: 0.8,
    opacity: 0,
    stagger: 0.5,
})
t1.from('.specification', {
    y: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3
})