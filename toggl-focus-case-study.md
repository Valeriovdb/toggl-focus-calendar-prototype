# Toggl Focus Case Study - Senior Product Manager

## Working Goal

Create a focused, evidence-backed improvement to one part of Toggl Focus's individual user experience for Individual Contributors and Freelancers, then communicate the problem, prioritization, tradeoffs, expected impact, AI usage, and prototype clearly.

The assignment rewards product judgment over exhaustive coverage. The output should show that the product was explored for real, the problem was selected deliberately, and the prototype demonstrates a coherent vision.

## File Structure

- [01-pain-point-research-online.md](01-pain-point-research-online.md): online research from Reddit, reviews, Toggl sources, competitor signals, and reporting direction.
- [02-pain-points-and-prioritisation.md](02-pain-points-and-prioritisation.md): hands-on pain points, problem definition, candidate areas, and prioritisation rationale.
- [03-solution-and-prototype.md](03-solution-and-prototype.md): solution definition, prototype principles, v0/Lovable prompt placeholder, measurement plan, and Loom outline.

## Proposed Game Plan

### 1. Align on Success Criteria

Before choosing the problem, define what "great" looks like for this case:

- Grounded in actual Toggl Focus usage, not generic time-tracking opinions.
- Specific enough to prototype in a few hours.
- Directly relevant to Individual Contributors and Freelancers.
- Clearly connected to Toggl's stated direction: time intelligence, better planning, capacity, reporting, and insights.
- Strong prioritization logic: what we improve, what we leave out, and why.
- Prototype demonstrates the core user value, even if frontend-only.
- Loom narrative fits comfortably into 5 minutes.

### 2. Product Exploration

Sign up for Toggl Focus and inspect the individual user journey across:

- Onboarding and setup.
- Time capture and editing.
- Calendar or timeline reconstruction.
- Projects, clients, tasks, and tags.
- Reports and insights.
- Planning, capacity, or workload views if available.
- Cross-product seams from Track / Plan consolidation.

Capture observations as:

- Friction: what slows the user down?
- Uncertainty: where does the user not know what to do next?
- Missed intelligence: where does time data exist but not become a decision?
- Persona relevance: does this matter more to Freelancers, Individual Contributors, or both?

### 3. External Signal Gathering

Use public feedback to avoid relying only on first impressions:

- G2, Capterra, Product Hunt, Reddit, app stores, Chrome extension reviews, community posts, help docs, competitor reviews.
- Competitor patterns from Harvest, Clockify, Timely, RescueTime, Motion, Sunsama, Akiflow, and Calendar-based time trackers.
- Toggl help docs and public materials to understand intended workflows.

Assumption: public feedback may be about Toggl Track rather than the newly consolidated Toggl Focus. We should treat it as directional evidence and label it accordingly.

### 4. Problem Selection

Score candidate areas using a transparent prioritization matrix:

| Criterion | Why It Matters | Weight |
|---|---:|---:|
| Persona pain severity | Solves a meaningful repeated problem for ICs/Freelancers | 30% |
| Time intelligence fit | Turns raw time data into planning, boundaries, or business insight | 25% |
| Retention potential | Increases repeated weekly usage and trust in the product | 20% |
| Prototype feasibility | Can be made credible in frontend within assignment time | 15% |
| Differentiation | Shows a sharper point of view than basic time tracking | 10% |

Potential candidate areas to evaluate:

- Day reconstruction / calendar review: help users fix missed time, categorize meetings, and explain their day.
- Reporting insights for individuals: translate time into client profitability, scope creep, utilization, and boundaries.
- Project/client setup: make it easier to create meaningful structure without over-admin.
- Onboarding: personalize setup around Freelancer vs IC goals and guide users to first value.
- Task / board / planning view: connect tracked work to planned commitments.

### 5. Define the Problem

For the chosen area, write:

- Target persona.
- User situation.
- Current friction.
- Root cause.
- Why now / strategic fit.
- What success would look like.

Template:

> For [persona], when [situation], Toggl Focus currently [observed friction]. This matters because [impact]. The opportunity is to [product direction], so users can [desired outcome].

### 6. Prioritize Improvements

Use a narrow "must / should / later" scope:

- Must: the smallest set of changes needed to solve the selected problem.
- Should: enhancements that strengthen the story if time allows.
- Later: valuable but intentionally excluded to preserve focus.

For each included feature, state:

- User value.
- Business value.
- Confidence level.
- Complexity.
- Tradeoff.
