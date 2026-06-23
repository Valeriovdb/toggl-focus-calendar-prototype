# Prototype Brief

## Prototype Goal

Demonstrate a redesigned Toggl Focus calendar flow that helps individual users turn calendar activity into complete, project-linked, reportable time data.

The prototype should show how Toggl Focus can reduce friction, improve usability, and support retention by making it easier for Freelancers and embedded ICs to review their day, identify missing time, assign work to projects/tasks, and understand what needs attention.

## Target Personas

### Freelancer

Juggles multiple clients, projects, rates, and deadlines. Needs accurate billable records, realistic planning, and confidence that no client work has been missed.

### Embedded IC / Independent Contractor

Works inside client organizations on longer engagements. Needs a clear record of what work was done, for whom, and why it mattered. Needs to protect boundaries and demonstrate value.

## Core Problem

Toggl Focus can only generate useful reporting and time intelligence if the underlying time data is complete and correctly structured.

In real life, individual users do not track perfectly. Work happens across meetings, calendar events, tasks, and context switches. If past activities are not logged or not linked to the right project/task, reports become incomplete and users lose trust in the product.

## Solution Concept

Create a focused calendar-based day review and time confirmation flow. The calendar is the main review surface, not a replacement for Google Calendar or a full planning tool.

The solution combines three connected workflows:

- Calendar as the surface: users see what was supposed to happen.
- Day review as the core workflow: users confirm what actually happened.
- Project/task linking as the data-quality mechanism: activities become structured, reportable time data.

## Main Workflow to Prototype

1. User opens the calendar view.
2. A planning intelligence summary highlights what needs attention today.
3. Calendar activities are visually clear:
   - project/client color
   - logged vs unlogged state
   - running timer state
   - missing assignment state
4. User sees that some past activities are unlogged or missing project/task assignment.
5. User clicks a past unlogged activity.
6. Existing side-panel pattern opens with improved time completeness information.
7. Panel shows:
   - activity status
   - whether it appears in reports
   - project/task assignment
   - suggested project/task only if there is a clear text match
   - related past unlogged activities for the same project/task
8. User logs the activity.
9. Calendar updates the activity status from unlogged to logged.
10. Top summary updates to show fewer items requiring attention.

## Screen Structure

### Main Calendar View

Must include:

- Toggl-like left navigation.
- Week calendar layout.
- Top planning intelligence summary.
- Manual timer context, showing whether the running timer is linked to the visible calendar activity.
- Legend explaining colors and status indicators.
- Calendar events across at least two clients/projects:
  - Mercedes Benz
  - Asos
- Mix of activity states:
  - logged
  - unlogged
  - running
  - needs assignment
  - future assigned activity, without a visible `Future` badge
  - future unassigned activity, without a visible `Future` badge

### Activity Side Panel

The side panel already exists in Toggl Focus, so the prototype should improve its content and actions rather than introduce a completely new pattern.

Must include:

- Activity title.
- Date and time.
- Project/task assignment.
- State: logged, unlogged, running, or future activity, with needs assignment shown as an issue where relevant.
- Clear explanation of whether the activity will appear in reports.
- Primary action based on activity state.
- Related past unlogged activities for the same project/task, if relevant.

## Calendar Rules

### Statuses

- Logged: activity has been confirmed as actual time worked and will appear in reports.
- Unlogged: activity happened in the past but has not been logged yet.
- Running: timer is currently active for this activity.
- Needs assignment: activity has no project/task assigned. This is an issue/flag, not a full separate status.

Do not use `Planned` as a visible status. Future activities are already implicitly planned.

### Actions

- Past unlogged activity: show `Log activity`.
- Past logged activity: show `Edit logged time`.
- Current activity: show `Start timer` or `Stop timer`, depending on timer state.
- Future activity: show `Edit plan` or `Assign project/task`.
- Future activity must not show `Log activity`.
- If an activity has no project/task, user can assign it from the side panel.
- Avoid duplicating `No project assigned` with a full `Needs assignment` text label on the calendar card; use compact visual treatment instead.

### Visual Logic

- Muted fill color represents project/client.
- Border or badge represents logging state.
- Source icon indicates imported calendar source, for example Google Calendar.
- Legend explains status indicators and project colors separately.
- Toggl purple is reserved for system/application emphasis: selected navigation, planning intelligence, today/current time, and running state.

Recommended:

- Logged: subtle grey outline, not green.
- Unlogged: dashed or warning border.
- Running: active timer indicator.
- Needs assignment: compact warning badge or icon.
- Future activity: no logged/unlogged outline and no visible `Future` tag.
- Imported-source badges should be visually neutral so they are not confused with project colors.

## Planning Intelligence Summary

Replace the unclear logged vs planned module with a natural-language summary.

The planning intelligence module is the single place for "what needs attention." It should not be duplicated by a separate review/status strip.

The summary should rank attention items by urgency:

1. Unlogged or unassigned activities from today/yesterday.
2. Upcoming deadlines and overdue milestones.
3. Planned vs actual anomalies.

Example:

> 3 items need attention today: 2 past activities are not logged, Mercedes Benz milestone is due in 3 days, and Asos Checkout Sprint is tracking 4h over plan this week.

## Review Flow

- Clicking `Review next` opens the first activity that needs review.
- Once the user enters review mode, arrows appear at the bottom of the side panel.
- The arrows let the user move between activities that need review only.
- This supports a guided end-of-day cleanup flow without overwhelming the calendar.

## Manual Timer Decision

The prototype does not remove the manual timer. Time tracking is still core to Toggl, so the timer remains visible.

The improvement is contextual: the timer should feel connected to the calendar rather than floating separately from it. In the prototype, the top-right timer says `Product audit - 35m 7s`, matching the visible running activity in the calendar.

## Autosuggest Logic

Autosuggest is nice to have for the prototype.

Rules:

- Suggest project/task only when the event title clearly matches an existing client/project/task.
- Example: "Mercedes Benz client call" suggests `Mercedes Benz / EV Launch Campaign`.
- Example: "ASOS checkout review" suggests `Asos > Checkout Conversion Sprint`.
- If there is no clear match, show no suggestion.
- Do not over-automate ambiguous activities.

## Sample Data

Clients:

- Mercedes Benz
- Asos

Projects:

- Mercedes Benz / EV Launch Campaign
- Mercedes Benz / Dealer Portal Optimization
- Mercedes Benz / Autonomous Services Discovery
- Asos / Checkout Conversion Sprint
- Asos / Returns Experience Review
- Asos / Personalization Roadmap

Example activities:

- Mercedes Benz client call, past, unlogged, suggested project match.
- ASOS checkout review, future, imported from Google Calendar, no log action.
- Stakeholder alignment, past, unlogged, assigned to Dealer Portal Optimization.
- Product audit, current, running, linked to Autonomous Services Discovery.
- Networking coffee John, past/personal, logged.
- German class, future/personal, needs assignment or marked non-work.
- EV Launch Campaign planning, future, assigned, no log action.
- Untitled work block, past, needs assignment.

## Out of Scope

- Syncing changes back to Google Calendar.
- Logging future activities.
- Project progress module inside the calendar activity detail.
- Full reports redesign.
- Team-level planning or capacity management.
- Real backend or real integrations.
- Mobile prototype.

## Prototype Success Criteria

The prototype is successful if a reviewer can understand:

- Which activities are already logged.
- Which past activities still need action.
- Why some activities are missing from reports.
- How to assign an activity to a project/task.
- How confirming an activity improves data completeness.
- How the calendar flow supports better reporting and time intelligence.

## Lovable / v0 Prompt Placeholder

TBD after validating the local prototype flow.
