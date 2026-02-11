# Amply - Website Design and Development for High-Growth B2B

> Webflow websites that convert and scale for high-growth B2B

## Brand Identity

- **Personality:** Professional, confident, modern B2B agency
- **Primary Font:** Manrope (Google Fonts)
- **Colors:**
  - Dark background: `#070609`
  - Darker background: `#040406`
  - Darkest background: `#060609`
  - Footer background: `#0C0B11`
  - Light sections: `#EFEAF6`
  - Text white: `#FFFFFF`
  - Text dark: `#060609`
  - Text muted: `#808080`
  - Purple accent: `#8A56DC`
  - Pink accent: `#FB9DA5`

## Pages

- **Homepage** (`/`) - Full marketing landing page with hero, logo marquee, testimonials, services, comparison, work portfolio, video testimonials, text testimonials, CTA, and footer

## Sections on Homepage

1. **Announcement Bar** - Purple gradient banner with latest news/offer
2. **Navbar** - Logo, navigation links (Services, Pricing, Work, Use Cases, Resources), "Book a Call" CTA button
3. **Hero** - Dark background with glow effects, headline, subtext, two CTA buttons, and video thumbnail
4. **Logo Marquee** - Scrolling client logos (Dell, Zenhub, Anvilogic, and more)
5. **Trusted by Industry Leaders** - Chris Walker testimonial with headshot and Passetto logo
6. **What We Do (Services)** - 5 service cards: B2B Web Design, Webflow Development, Ongoing Support, Website Strategy, Website Migration
7. **The Amply Difference (Comparison)** - Side-by-side "The Old Way" vs "The Amply Way" on light lavender background
8. **Recent Webflow Projects** - 3 project cards (Awardco, Anvilogic, Zeni) with images and client testimonials
9. **True B2B Experts CTA** - Simple centered heading with "See More Work" button
10. **Video Testimonials** - 3 video testimonial cards (David Nivati, Jordan Wilson, Dave Christison)
11. **Trusted by 100+ B2B** - Second logo marquee
12. **Text Testimonials** - Scrolling testimonial cards from 8 clients
13. **Let's Work Together CTA** - Final call-to-action with "Book a Call" button
14. **Footer** - Logo, description, social links (LinkedIn, Instagram, Facebook), 4 link columns (Services, Pricing, Use Cases, Resources)

## Components

- **LogoMarquee** - Reusable scrolling logo strip with fade edges
- **StarBadge** - Purple-tinted badge with star icon used for section labels (supports dark/light variants)

## Assets

All images are loaded from Amply's CDN (`cdn.prod.website-files.com`). Key assets include:
- Amply logo SVG
- Hero background layers (glow, dots, light beam)
- Video thumbnail
- Client logos (16 unique marquee logos)
- Service card icons and preview images
- Chris Walker headshot
- Comparison icons (checkmark/X)
- Project screenshots (Awardco, Anvilogic, Zeni)
- Video testimonial portraits
- Text testimonial headshots and company logos
- CTA section decorative images
- Social media icon SVGs (inline)

## Recent Changes

- Initial build: Created exact remake of Amply homepage (joinamply.com)
- Updated font from Space Grotesk/DM Sans to Manrope
- Updated color scheme from light theme to Amply's dark theme
- Added marquee animation keyframes and fade mask
- Built all 14 sections with responsive design
- Added StarBadge variant support for light/dark backgrounds

## How to Customize

- **To change colors:** Edit the CSS variables in `app/globals.css` under `:root`
- **To change the font:** Edit `app/layout.tsx` and update the Google Font import
- **To edit section content:** Edit the data arrays at the top of `app/page.tsx` (SERVICES, PROJECTS, TEXT_TESTIMONIALS, etc.)
- **To add a new page:** Create a new folder in `app/` with a `page.tsx` file (e.g., `app/about/page.tsx`)
- **To change the announcement bar text:** Edit the text in the `<nav>` section near the top of the Home component
