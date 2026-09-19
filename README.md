# Agency Web

A visually immersive, single-page AI agency landing page built with semantic HTML, custom CSS, and vanilla JavaScript. The site presents an ambitious AI-focused brand through animated sections, interactive navigation, scroll-driven visuals, service highlights, testimonials, FAQs, and a strong call to action.

## Preview

Open [`Agency Web.html`](./Agency%20Web.html) in a modern web browser to view the landing page.

## Features

- Responsive AI agency landing-page design
- Interactive navigation button states
- Scroll-triggered entrance animations
- GSAP and ScrollTrigger-powered visual effects
- Animated orbit path with planets controlled by scroll position
- Dynamic profile-image rings around the featured message
- Expandable FAQ and project-detail panels
- AI solution/service showcase sections
- Testimonials and trust-focused content areas
- Image, video, icon, and other media assets included in the repository

## Built With

- **HTML5** — page structure and content
- **CSS3** — layout, responsive styling, visual effects, and animations
- **JavaScript** — interactions and scroll-based behavior
- **GSAP** — timeline animations
- **GSAP ScrollTrigger** — scroll-based animation triggers
- **Font Awesome** — social and interface icons

GSAP and Font Awesome are loaded from CDNs in the HTML file, so an internet connection may be required for all animations and icons to display correctly.

## Project Structure

```text
Agency-Web/
├── Agency Web.html   # Main landing page
├── Agency.css        # Styles and responsive layout rules
├── Agency.js         # Interactions and animations
├── assets/            # Images, video, and other media
└── README.md          # Project documentation
```

## Getting Started

No build tools or package installation are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/Taimoor-Shehzad/Agency-Web.git
   cd Agency-Web
   ```

2. Open `Agency Web.html` directly in your browser.

   Alternatively, serve the project with a local development server:

   ```bash
   python -m http.server 8000
   ```

   Then visit [http://localhost:8000/Agency%20Web.html](http://localhost:8000/Agency%20Web.html).

## Customization

- Update page copy and section content in `Agency Web.html`.
- Adjust colors, spacing, typography, and responsive behavior in `Agency.css`.
- Modify interactions and animation timing in `Agency.js`.
- Replace or add images and videos in the `assets/` directory.
- If you rename files, update every corresponding reference in the HTML and JavaScript files.

## Browser Support

For the best experience, use a current version of Chrome, Edge, Firefox, or Safari with JavaScript enabled. Some animations rely on modern browser APIs such as `IntersectionObserver` and SVG path methods.

## Contributing

Contributions are welcome. To propose an improvement:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/improve-landing-page
   ```

3. Make and test your changes in a modern browser.
4. Commit your work and open a pull request.

## License

No license has been specified for this project yet. Please contact the repository owner before redistributing or using the project commercially.
