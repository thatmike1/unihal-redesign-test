---
name: redesign
description: Run the full redesign workflow — analysis, research, design direction, and implementation
---

# Website Redesign Skill

A structured methodology for autonomously redesigning a website — from analysis through implementation.

## When to Use
Invoke with `/redesign` when given a website URL and asked to redesign it.

## Phase 1: Discovery (Parallel)

Run these two agents in parallel using the Task tool:

### Agent 1: Site Analyst (`site-analyst`)
- Analyze the existing website using Playwright
- Extract visual identity, layout, content, UX issues
- Produce a structured site audit

### Agent 2: Industry Researcher (`industry-researcher`)
- Research the business sector, competitors, and design trends
- Identify audience expectations and conversion patterns
- Find 3-5 reference sites for inspiration

## Phase 2: Design Direction

### Agent 3: Design Director (`design-director`)
Using the outputs from Phase 1:
- Synthesize findings into a unified design concept
- Make concrete decisions: colors, typography, layout, components
- Produce a Design Direction Document with Tailwind config

## Phase 3: Implementation

With the Design Direction Document as your guide:

1. **Set up the project** from the starter repo
2. **Configure Tailwind** with the chosen design tokens (colors, fonts, spacing)
3. **Build the page section by section**, top to bottom:
   - Navigation
   - Hero section
   - Core content sections
   - Social proof / testimonials
   - CTA sections
   - Footer
4. **Use the frontend-design skill** for code quality and component patterns
5. **Add responsive behavior** — test at 375px, 768px, 1024px, 1440px
6. **Add micro-interactions** — hover states, scroll reveals, smooth transitions

## Phase 4: Verification

1. **Run the dev server** and take Playwright screenshots at multiple breakpoints
2. **Compare against the design direction** — does it match the intent?
3. **Check the original site** side by side — is this clearly an upgrade?
4. **Iterate** on any sections that don't meet the bar

## Quality Standards

- Every section must have a clear purpose and CTA
- Typography hierarchy must be immediately scannable
- Color usage must be intentional — no random colors
- White space is a design element, not wasted space
- Animations should be subtle and purposeful (200-400ms, ease-out)
- The page should tell a story from top to bottom
- Mobile is not an afterthought — it's designed simultaneously

## Anti-Patterns to Avoid

- Generic SaaS landing page layouts that don't reflect the actual business
- Stock photo aesthetic — use the business's actual content/imagery where possible
- Cookie-cutter hero sections ("Welcome to [Company]" with a gradient background)
- Overdesigning — sophistication comes from restraint, not complexity
- Ignoring the existing brand entirely — evolve, don't erase
