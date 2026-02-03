
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("download-launcher-btn");

    if (!btn) return;

    // Detect OS
    let os = "Windows";
    const platform = navigator.platform.toLowerCase();
    if (platform.includes("mac")) os = "macOS";

    // Map OS to file URL
    const fileUrls = {
        "Windows": "https://yourusername.github.io/game/builds/windows/launcher_windows.exe",
        "macOS": "https://yourusername.github.io/game/builds/macos/launcher_macos.zip"
    };

    btn.href = fileUrls[os];
    btn.setAttribute("download", "Launcher"); // Optional: triggers download

    // Optional: alert which OS was detected
    console.log("OS detected:", os, "Downloading file:", btn.href);




    // Reveal animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Simple sticky header or background change on scroll could go here
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');

            // Animate Links
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
            links.forEach(l => l.style.animation = '');
        });
    });

    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Play Button Logic
    const playBtn = document.getElementById('play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const code = prompt("Enter access code to play:");
            if (code === "lanterns") {
                window.location.href = "dark lanterns.html";
            } else if (code !== null) {
                alert("Incorrect code.");
            }
        });
    }
});
