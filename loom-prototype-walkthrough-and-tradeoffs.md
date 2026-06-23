# Loom Prototype Walkthrough and Tradeoffs

This file is for the self-recorded video. It does not need to be part of the main written deliverable unless requested.

## Prototype Walkthrough

The prototype walkthrough can stay simple and focused:

1. Open the calendar view and point to the planning intelligence summary.
2. Explain that the calendar is the review surface for making time data complete, not a Google Calendar replacement.
3. Show that activities have different states: logged, unlogged, running, and needs assignment.
4. Click `Review next` to open the first activity that needs attention.
5. In the side panel, explain whether the activity will appear in reports.
6. For a clear match, apply the suggested project/task assignment, such as `Mercedes Benz / EV Launch Campaign`.
7. Click `Log activity` for a past unlogged activity.
8. Show that the calendar state and planning intelligence summary update.
9. Use the side-panel arrows to move between activities that need review only.
10. Close by connecting the flow back to the user value: fewer missing hours, more trustworthy reports, and less end-of-week reconstruction.

## Tradeoffs To Mention

### Speed vs. Polish

I prioritized making the core product logic testable over reproducing every detail of the existing Toggl Focus interface.

This means the prototype is intentionally not high fidelity. Some interface controls are simplified or missing, such as calendar view settings, full filtering, deeper navigation, and full calendar configuration. The tradeoff was worthwhile because the assignment is about product judgment and communicating the idea clearly, not producing a production-ready UI.

### Scope vs. Depth

I focused on one narrow workflow: calendar-based day review and time confirmation.

I did not redesign reports, mobile capture, project setup, or the full planning experience. Those areas are relevant, but the selected workflow sits upstream of them. If time data is incomplete or unassigned, reports and planning intelligence become less trustworthy. Going deeper on this workflow made the solution more coherent than trying to improve many surfaces lightly.

### Ideal vs. Feasible

The ideal version would include real calendar sync, real reporting data, persistent changes, more robust project/task matching, and validation across desktop and mobile.

For the prototype, I simulated state changes in a frontend-only experience. This was enough to demonstrate the main product behavior: identify missing time, assign it to the right project/task, log it, and show that the system now has more complete data for reporting.

### Automation vs. User Trust

I kept autosuggest conservative.

The product suggests a project/task only when the activity title clearly matches an existing client, project, or task. I avoided showing suggestions for ambiguous activities because incorrect automation could reduce trust, especially when the data affects billing, reporting, or proof of work.

### Adding Intelligence vs. Adding Complexity

The goal was to make Toggl Focus feel more intelligent without making it feel heavier.

That is why the planning intelligence module is the single attention surface, instead of adding another review/status strip. The prototype uses one clear summary and one guided `Review next` action to help the user move through the cleanup flow.

### Timer Continuity vs. Calendar-Led Review

I did not remove or deprioritize the manual timer.

The timer remains important because active time tracking is core to Toggl. The prototype changes its context: the active timer is linked to a visible calendar activity so the user can better understand what is currently being tracked and how it relates to the day.

## AI Usage

I used AI as a research and synthesis partner, not as the source of the product decision.

I defined the user problem and selected the opportunity area myself based on my exploration of Toggl Focus and the assignment goals. I then used AI to help gather and synthesize supporting evidence from public reviews, user comments, community discussions, and competitor signals. I also used AI to check whether I had missed obvious angles or risks.

For project management, I used Codex to structure the work into separate Markdown files for research, pain-point prioritization, solution definition, prototype brief, and final synthesis. This helped me keep the thinking modular while still turning it into one coherent deliverable.

I used the same approach for the prototype: first defining the product logic and interaction requirements, then using AI-assisted coding to build and iterate on a local frontend prototype. Final product decisions, prioritization, tradeoffs, and narrative framing remained my responsibility.
