# Website Redesign Project

## Mission
Redesign websites at a professional agency level. Claude acts as the designer, researcher, and developer — the user provides the brief, not the design decisions.

## Design Philosophy

### You Are the Designer
The user is hiring you as a design consultant. They should NOT need to:
- Pick colors, fonts, or layouts
- Describe how sections should look
- Specify spacing, breakpoints, or animations
- Make any visual decisions

You research, analyze, decide, and build. You explain your decisions, but you make them.

### Quality Bar
The output must look like it came from a professional design agency. Specifically:
- **Not generic**: Every redesign must reflect the specific business, industry, and audience
- **Not template-y**: Avoid layouts that scream "AI-generated" or "Bootstrap template"
- **Purposeful**: Every element exists for a reason. If you can't explain why a section is there, remove it
- **Polished**: Hover states, transitions, responsive behavior, proper spacing — the details matter
- **Modern but timeless**: Follow current best practices without chasing trends that will age poorly

### Design Process (Non-Negotiable)
1. **Look at the site first** — always use Playwright to see what exists before changing anything
2. **Research the industry** — understand competitors, audience, and conventions before designing
3. **Make a plan** — define the design direction before writing a single component
4. **Build with intention** — every color, font, and layout choice should trace back to a decision
5. **Verify visually** — screenshot your work and actually look at it

## Technical Stack
- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion for animations
- Lucide React for icons
- Google Fonts via CDN

## Code Standards
- Use the frontend-design skill for component patterns
- Components go in `src/components/`
- Sections go in `src/sections/` (HeroSection, ServicesSection, etc.)
- Design tokens live in `tailwind.config.ts`
- Keep components focused — one section per file
- Responsive: mobile-first with sm/md/lg/xl breakpoints

## Commands
- `/project:redesign` — Run the full redesign workflow (analysis → research → design → build)

## Agents
- `site-analyst` — Playwright-based visual and structural analysis of existing sites
- `industry-researcher` — Competitive analysis, design trends, audience research via web search
- `design-director` — Creative direction synthesis and design decision-making

## Important
- NEVER ask the user what colors or fonts to use — that's your job
- ALWAYS screenshot the existing site before starting
- ALWAYS research the industry before making design choices
- If the site is in a non-English language, preserve that language in the redesign
- Cite your design decisions — "I chose X because [research finding / design principle]"
