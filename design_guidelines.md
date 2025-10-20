# GlobalPath Agency - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from professional service platforms (LinkedIn, Indeed) combined with journey-focused design elements (Airbnb's welcoming aesthetic). The design should communicate trust, professionalism, and the exciting opportunity of international career advancement.

**Key Design Principles:**
- Trust through professionalism: Clean, sophisticated layouts that inspire confidence
- Journey visualization: Clear pathway from application to opportunity
- Cultural bridge: Design elements that subtly connect Indian heritage with German opportunity
- Mobile-first consideration: Many users will browse on smartphones

## Core Design Elements

### A. Color Palette

**Primary Brand Color:**
- Main: #3F362D (25 20% 20%) - sophisticated dark brown, professional and grounded
- Used for: Headers, primary buttons, key text elements

**Supporting Colors:**
**Dark Mode:**
- Background: 25 15% 12%
- Surface: 25 12% 18%
- Text Primary: 30 5% 95%
- Text Secondary: 30 5% 70%
- Accent: 210 70% 55% (professional blue for CTAs and links - trust signal)
- Success: 145 60% 45% (for approval/success states)

**Light Mode:**
- Background: 30 15% 98%
- Surface: 0 0% 100%
- Text Primary: 25 20% 15%
- Text Secondary: 25 15% 40%
- Border: 25 10% 85%

### B. Typography

**Font Families:**
- Primary (Headings): 'Inter' - clean, professional, excellent readability
- Secondary (Body): 'Inter' - maintaining consistency
- Accent (Optional highlights): 'Playfair Display' for hero headline only

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headings: text-3xl md:text-4xl, font-semibold
- Subsection Headings: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg, font-normal
- Small Text: text-sm, font-normal

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 consistently
- Section padding: py-16 md:py-24
- Component spacing: space-y-8 md:space-y-12
- Card padding: p-6 md:p-8
- Container: max-w-7xl mx-auto px-4 md:px-6

### D. Component Library

**Hero Section:**
- Full-width background image (Indian professional in modern German office setting or aerial view of German city)
- Overlay: gradient from dark (60% opacity) to transparent
- Centered content with max-w-4xl
- Primary CTA button (vibrant blue accent) + Secondary outline button with backdrop-blur
- Tagline showcasing credibility: "500+ successful placements" as subtext

**Navigation:**
- Sticky header with backdrop-blur-md
- Logo left, nav links center/right on desktop
- Mobile: Hamburger menu
- Subtle border-bottom on scroll

**About Us Section:**
- Two-column layout (md:grid-cols-2)
- Left: Mission statement and key values
- Right: Statistics cards in grid (2x2) showing: Years of Experience, Successful Placements, Partner Companies, Success Rate
- Each stat card: large number (text-4xl), label, subtle border

**How to Apply Section:**
- Three-step process visualization
- Timeline/pathway design connecting steps
- Each step: numbered badge, title, description, icon
- Desktop: horizontal flow (grid-cols-3)
- Mobile: vertical stack with connecting line

**Contact Form:**
- Single column, max-w-2xl centered
- Form fields with proper spacing (space-y-6)
- Input styling: border-2, rounded-lg, focus:ring-2 focus:ring-accent
- Textarea for comments (min-h-32)
- Submit button: full-width on mobile, auto on desktop
- Form context above: "Start Your Journey" heading + brief encouraging text

**Footer:**
- Three-column layout (md:grid-cols-3): Company Info, Quick Links, Contact Details
- Social media icons (LinkedIn, Facebook, Instagram)
- Copyright and compliance text
- Subtle top border

### E. Imagery Strategy

**Required Images:**

1. **Hero Image (Critical):**
   - Professional Indian candidate in modern German office or factory setting
   - Alternatively: Iconic German architecture (Brandenburg Gate) with diverse professionals
   - High-quality, aspirational, showing successful integration
   - Placement: Full-width hero background with gradient overlay

2. **About Section:**
   - Collage or single image of team/office (optional but recommended)
   - Placement: Right side of about grid or as background element

3. **How to Apply Icons:**
   - Simple line icons for each step (document, checkmark, plane/handshake)
   - Source: Heroicons

4. **Testimonial Photos (if included):**
   - Authentic candidate photos with German landmarks
   - Circular crops (rounded-full)

**No animations** - maintain professional, stable aesthetic. Subtle hover states only (scale-105, opacity transitions).

### F. Responsive Breakpoints
- Mobile: base (< 768px) - single column, stacked layouts
- Tablet: md (768px+) - two columns where appropriate
- Desktop: lg (1024px+) - full multi-column layouts, max content width

**Critical Mobile Considerations:**
- Touch-friendly button sizes (min-h-12)
- Adequate spacing between interactive elements
- Readable font sizes without zooming (min 16px)
- Form inputs with proper input types for mobile keyboards