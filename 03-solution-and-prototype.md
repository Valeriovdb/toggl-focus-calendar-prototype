# Solution and Prototype

## Proposed Solution

A focused calendar-based day review and time confirmation flow that makes the relationship between calendar activities, logged time, project/task assignment, and planning intelligence clear.

The solution is not a broad calendar redesign, a replacement for Google Calendar, or a full planning tool. The calendar is used as the main review surface because it is where individual users already understand what was supposed to happen during the day. The proposed improvement helps users identify past activities that were not logged, assign them to the right project/task, and confirm them so reporting and time intelligence are based on complete, trustworthy data.

The solution combines three connected workflows:

- Calendar as the surface: users see what was supposed to happen.
- Day review as the core workflow: users confirm what actually happened.
- Project/task linking as the data-quality mechanism: activities become structured, reportable time data.

The calendar should be the main workspace for reviewing daily activity. It should help users understand:

- Which activities have already been logged.
- Which past activities still need to be logged.
- Which activities need project/task assignment.
- Which project/client each activity belongs to.
- What important project planning signals need attention.

The side panel already exists in the current product, so the proposed improvement is not to introduce a new panel pattern. The improvement is to make the panel more useful for time completeness: it should surface whether the selected activity has been logged, whether it contributes to reports, and whether related past activities for the same project still need action.

The redesign does not replace manual time tracking. The timer remains visible because time tracking is still core to Toggl. The improvement is to make the timer feel less disconnected from the calendar by encouraging active timers to be linked to visible activities. In the prototype, the top-right timer is tied to `Product audit`.

## Prototype Implication

- Rather than focusing only on raw time insertion, we can prototype a guided "Review and confirm time" flow.
- The flow can turn past calendar blocks into logged time, explain what will appear in reports, and show immediate insight impact.
- This directly addresses the observed issue while staying aligned with Toggl's strategy.

## Refined Calendar Rules

### Status Model

Do not use `Planned` as an explicit activity status in the prototype. Future calendar activities are already implicitly planned.

Use these main activity states:

- Logged: the activity has been confirmed as actual time worked and will appear in reports.
- Unlogged: the activity happened in the past but has not been logged yet.
- Running: a timer is currently active for this activity.
- Needs assignment: the activity has no project/task assigned.

Rules:

- Future activities cannot be logged.
- Past activities only show `Log activity` if they are unlogged.
- Activities can show more than one issue, for example `Unlogged` and `Needs assignment`.
- Logged status should be recognizable visually, not only through text.
- `Needs assignment` should be treated as an issue or flag, not a full separate status competing with logged, unlogged, running, or future state.
- Future activities are implicitly planned, so they should not show a `Future` tag or a logged/unlogged visual state.

### Color and Visual Logic

- Muted activity fill color should represent the project/client.
- Border or status badge should represent logging state.
- Source icon should indicate imported calendar source, for example Google Calendar.
- A legend should explain the color and border/status system.
- If the current product uses colors for multiple meanings, the redesign should remove that ambiguity.
- Toggl purple should be reserved for system/application emphasis: selected navigation, planning intelligence, today/current time, and running state.
- Google Calendar imported activities should use a neutral grey `G` badge so the source indicator is not confused with project colors.

Recommended visual model:

- Project/client = muted fill color.
- Logged = subtle grey outline, not green.
- Unlogged = dashed or warning border.
- Running = active timer indicator.
- Needs assignment = compact warning badge or icon.
- Future activity = no logged/unlogged outline and no visible `Future` tag.

### Activity Actions

- Past, unlogged activity: show `Log activity`.
- Past, logged activity: show `Edit logged time`.
- Current activity: show `Start timer` or `Stop timer` depending on timer state.
- Future activity: show `Edit plan` or `Assign project/task`; do not show `Log activity`.
- If an activity has no project/task, the user should be able to assign it from the activity detail panel.
- Avoid duplicating `No project assigned` with a full `Needs assignment` text label on the calendar card; use compact visual treatment instead.

### Side Panel Improvements

The side panel should keep the existing role of showing activity/task details, but make time completeness more visible and actionable.

Recommended additions:

- Show a clear state for the selected activity: `Logged`, `Unlogged`, `Running`, or future activity, with `Needs assignment` displayed as an issue where relevant.
- Explain whether the activity will appear in reports.
- For unlogged past activities, show `Log activity` as the primary action.
- For future activities, do not show `Log activity`; show planning or assignment actions instead.
- Show related past activities for the same project/task that appear unlogged.
- Let users log related unlogged activities from the panel, or jump to them in the calendar.
- Show suggested project/task assignment only when there is a clear match.

Example:

> 2 past activities for EV Launch Campaign are not logged yet. Log them to keep project reporting complete.

This supports the broader goal of ensuring all activities for a project are captured before the user relies on reports or planning insights.

### Project / Task Assignment

- Each activity should be linkable to an existing project/task or a new project/task.
- Autosuggest is nice to have, not required for the first prototype.
- If included, autosuggest should only appear when there is a clear match between event title and project/client name.
- Example: "Mercedes Benz call" can suggest client/project `Mercedes Benz`.
- If there is no clear match, no suggestion should be provided.

## Planning Intelligence Module

The current logged vs planned module should be reframed as a plain-language planning intelligence summary. This module should be the single place for "what needs attention" instead of duplicating the same information in a separate review/status strip.

Instead of only showing abstract bars, the module should scan planned projects with dates, active projects, milestones, deadlines, and logged time. It should summarize what needs attention in natural language.

Potential insight categories:

- Upcoming deadlines: projects or milestones due soon.
- Overdue work: projects or milestones past their due date.
- Planned vs actual mismatch: projects where logged time is ahead of or behind the expected pace.
- Unassigned calendar work: activities that cannot contribute to reports because they are not linked to a project/task.
- Unlogged past work: calendar activities that happened but have not been logged.

Example output:

> 3 items need attention today: 2 past activities are not logged, Mercedes Benz milestone is due in 3 days, and Asos Checkout Sprint is tracking 4h over plan this week.

In the prototype, clicking `Review next` opens the first activity that needs review. Once the user enters review mode, arrows appear at the bottom of the side panel so they can move between activities that need review only. This supports a guided end-of-day cleanup flow without overwhelming the calendar.

## Prototype Scope

Included:

- Weekly calendar view.
- Toggl-like left navigation.
- Planning intelligence module.
- Project colors.
- Status outlines and badges.
- Google Calendar source badge.
- Current-time line.
- Running timer state.
- Activity side panel.
- Log activity flow.
- Project/task assignment.
- Conservative autosuggest.
- Review-next guided flow.

Out of scope:

- Syncing changes back to Google Calendar.
- Logging future activities.
- Full reports redesign.
- Full project progress module in the calendar.
- Team capacity planning.
- Mobile prototype.
- Real backend or integrations.

## Prototype Principles

- Build the actual workflow, not a landing page.
- Prioritize clarity, interaction, and decision-making over visual decoration.
- Use polished but pragmatic UI.
- Include enough state changes to show the vision.

## Prototype Limitations

The prototype should not be read as a high-fidelity redesign of Toggl Focus. It is a lightweight, interactive way to communicate and test the product idea: a calendar-based review flow that helps users understand which activities are logged, unlogged, running, or missing assignment.

Some existing interface elements are intentionally simplified or missing to keep the prototype focused. For example, controls for changing calendar view, calendar settings, deeper filtering, and full navigation behavior are not fully represented. The goal is to make the core workflow and product logic understandable, not to reproduce every detail of the existing interface.

The prototype is also frontend-only. It does not include real calendar sync, reporting data, authentication, persistence, or backend logic. State changes are simulated so the reviewer can understand the intended experience.

## Prototype Requirements

- Realistic sample data for both Freelancers and Individual Contributors.
- Clickable flows for the most important actions.
- Clear before/after logic in the experience itself.
- No backend required, but interactions should feel real enough for a walkthrough.

## v0 / Lovable Prompt

TBD

## Measurement Plan

- Activation: time to first useful insight, first completed week, first client/project setup.
- Engagement: weekly active tracking days, edited/reconstructed entries, report views.
- Retention: week 2 / week 4 return rate for individual users.
- Quality: fewer uncategorized entries, fewer missing hours, more billable confidence.
- Business: trial-to-paid conversion, freelancer/IC plan retention, expansion to team workflows.

## Loom Narrative

5-minute structure:

1. Problem and persona, 45 seconds.
2. Evidence and why this area, 60 seconds.
3. Prioritization and tradeoffs, 60 seconds.
4. Prototype walkthrough, 90 seconds.
5. Impact, measurement, and AI usage, 45 seconds.

## Final Deliverable Outline

### Executive Summary

TBD

### Problem Definition

TBD

### Evidence

TBD

### Prioritization

TBD

### Proposed Solution

TBD

### Prototype

TBD

### Tradeoffs

TBD

### Expected Impact and Metrics

TBD

### AI Usage

TBD

### Loom Talking Points

TBD
