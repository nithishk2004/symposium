gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".hero p", { duration: 1.2, y: -30, opacity: 0, delay: 0.5 });
gsap.from(".btn", { duration: 1.5, scale: 0, opacity: 0, delay: 1 });
gsap.from(".section", { duration: 1, opacity: 0, y: 50, stagger: 0.3 });