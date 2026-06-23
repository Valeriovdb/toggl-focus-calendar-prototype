# Improving Toggl Focus Calendar Review

## 01. Executive Summary

This case study focuses on improving the individual user experience in Toggl Focus for Freelancers and embedded Individual Contributors.

My main finding: Toggl Focus already has the ingredients for individual time intelligence, but the calendar does not yet make the data-quality loop clear enough. Planned activity, actual work, logged time, project/task assignment, and reportable insight can feel disconnected. When that connection is unclear, users may not trust whether Toggl is showing work that was planned, work that was actually tracked, or work that still needs action.

The selected opportunity is a calendar-based day review and time confirmation flow. The calendar becomes the main review surface where users can identify past activities that were not logged, assign them to the right project/task, and confirm them as reportable time. This directly supports Toggl's time intelligence strategy: better time data creates better reporting, planning, capacity awareness, and insight.

I did not choose to redesign reports, mobile capture, onboarding, or the full planning experience. Those are relevant areas, but they are downstream or broader than the highest-leverage problem I found. If time data is incomplete or unassigned, a better report UI cannot fully solve the user's trust problem.

The prototype demonstrates a focused workflow: surface what needs attention, guide the user through review, clarify report readiness in the side panel, and update the calendar state once time is logged or assigned.

Prototype: [https://toggl.reachable.city](https://toggl.reachable.city)  
Fallback prototype URL: [https://valeriovdb.github.io/toggl-focus-calendar-prototype/](https://valeriovdb.github.io/toggl-focus-calendar-prototype/)  
Source code: [https://github.com/Valeriovdb/toggl-focus-calendar-prototype](https://github.com/Valeriovdb/toggl-focus-calendar-prototype)

## 02. Assignment Focus and Personas

The assignment asks for one specific area of the individual user experience that could reduce friction, improve usability, and support retention for Freelancers and Individual Contributors.

### 02.a Freelancer

Freelancers juggle multiple clients, projects, rates, and deadlines. They need fast, reliable time tracking, but they also need confidence that billable work has not been missed.

Concrete scenario: before sending invoices on Friday, a freelancer needs to recover missed client calls, assign them to the right project, and understand whether each client was actually profitable.

### 02.b Embedded IC / Independent Contractor

Embedded ICs often work inside client organizations on longer engagements. They need a clear record of what work was done, for whom, and why it mattered.

Concrete scenario: before a renewal, rate discussion, or scope conversation, an IC needs a defensible record of meetings, delivery work, collaboration time, and scope expansion.

For both personas, time tracking is not only administration. It is how they protect boundaries, show value, plan realistically, and make better business decisions.

## 03. Problem Definition

Toggl Focus can only generate useful reporting and time intelligence if the underlying time data is complete and correctly structured.

In reality, individual users do not track perfectly. Work happens across meetings, calendar events, tasks, client tools, messages, documents, and context switches. If past activities are not logged or not linked to the right project/task, reports become incomplete and users lose trust in the product.

The opportunity:

> Help individual users recover from imperfect tracking by turning calendar review into a guided workflow for confirming, assigning, and making time data report-ready.

## 04. Why I Picked Calendar Review

I picked calendar-based day review because it sits at the intersection of user pain, product strategy, and retention.

- It is recurring: users need to recover and confirm time every day or week, not only during setup.
- It affects both personas: Freelancers need billable confidence; embedded ICs need proof of work and boundary protection.
- It improves upstream data quality before reporting: better reports depend on complete, structured time data.
- It connects directly to time intelligence: the flow turns planned activity and messy real work into usable insight.
- It creates a habit loop: review, repair, trust the data, then return because the product helps make sense of the week.

The selected area is not a broad calendar redesign, a replacement for Google Calendar, or a full planning tool. It is a focused improvement to the workflow that connects planned activity, actual work, logged time, and reportable insight.

## 05. Research Inputs

The analysis combined:

- Hands-on exploration of Toggl Focus.
- Public user feedback from reviews, user comments, and community discussions.
- Toggl's public positioning around time intelligence and reporting.
- Competitor and market signals around forgotten timers, automatic capture, calendar workflows, and reporting.

The strongest repeated signal was not that starting a timer is hard. Toggl is already strong at lightweight time tracking. The deeper retention risk is that consistent, accurate time tracking is difficult to sustain. When users forget timers or fail to connect activity to projects/tasks, the value of reporting and planning drops.

### 05.a Hands-On Product Observations

While exploring Toggl Focus, I noticed that the calendar has strong potential as the main workspace for individual planning and time review, but the current experience made several relationships hard to understand:

- The color logic in the calendar was not immediately clear.
- It was not obvious how calendar activities, tasks, time entries, and project information connected.
- The timer appeared to be the primary starting point because it is first in the side navigation, but its relationship to tasks and planned work was unclear.
- The timer shown at the top of the interface could appear disconnected from the calendar state. A user might be in a calendar meeting that appears logged or assigned, while the active timer is running for a different activity.
- I expected the calendar to be the main starting point, since it is usually where individual users plan their day and understand what is happening.
- Clicking a calendar activity opened a modal, while a side panel could also be opened with only slightly more information. This made the interaction model feel unclear.
- The product contained the ingredients for time intelligence, but the workflow did not yet make the data-quality loop obvious: planned work -> actual work -> logged time -> reportable insight.

This creates a risk that users cannot easily tell whether Toggl is showing planned activity, currently tracked activity, already logged time, or a mismatch between them.

Supporting screenshots:

- [As-is calendar view](<screenshots/projects work/Untitled 1.jpg>)
- [As-is calendar activity detail](<screenshots/projects work/Untitled 2.jpg>)

### 05.b Analysis Limitations

This case study is a product discovery and concept validation exercise, not a full usability study.

Reports did not work for me when I tested the flow. Because of this, I could not deeply assess the current usability of Toggl's reporting experience inside the product. To understand the intended reporting direction, I reviewed Toggl's public article on the new Toggl Track Reports: https://toggl.com/blog/new-toggl-track-reports. I treated this as product-direction evidence rather than firsthand usability evidence.

The iOS app also failed to sync completely during my testing, so I could not meaningfully evaluate the mobile experience. For this assignment, I prioritized the desktop/web experience. My assumption is that users may capture or correct time across mobile, desktop, and browser extension, but the higher-value review, repair, reporting, and planning workflows are more likely to happen on a larger screen.

These limitations influenced the prototype scope: instead of redesigning reports or mobile capture, I focused on the upstream calendar review flow that determines whether time data becomes complete, structured, and useful for reporting.

## 06. Prioritization and What I Left Out

I considered five opportunity areas:

| Area | Persona Pain | Time Intelligence Fit | Retention Potential | Usability Impact | Data Quality Impact | Total | Notes |
|---|---:|---:|---:|---:|---:|---:|---|
| Calendar-based day review and time confirmation | 5 | 5 | 5 | 5 | 5 | 25 | Best combination of repeated user pain, upstream data quality, and strategic fit. It helps users recover from imperfect tracking before reports become untrustworthy. |
| Time entry and timer usability | 5 | 3 | 4 | 4 | 4 | 20 | Important because forgotten timers are painful, but Toggl is already relatively strong at lightweight tracking. Improving recovery and review felt more differentiated. |
| Reports and individual insights | 4 | 5 | 4 | 3 | 3 | 19 | Strong strategic fit, but reports depend on complete, structured data. I prioritized fixing the upstream workflow before redesigning the insight layer. |
| Project/client setup | 4 | 3 | 3 | 4 | 4 | 18 | Useful for data quality, especially for Freelancers, but less frequent than daily review and less directly tied to a repeated retention habit. |
| Onboarding personalization | 3 | 3 | 3 | 4 | 2 | 15 | Could improve first-use clarity, but it does not solve the recurring problem of incomplete time data after real work starts. |

The closest alternative was improving timer recovery directly. I deprioritized it because Toggl's timer is already a strong product asset, while the larger gap appeared after imperfect tracking: reconstructing, assigning, and trusting the day.

I also considered redesigning reports because reporting is strategically important. I left that out because reports are downstream. If calendar, task, and project data are incomplete, a better report surface cannot fully solve the user's trust problem.

I left mobile out because my testing had sync limitations and because the workflow I chose is higher-value on desktop/web: review, repair, reporting, and planning need more context than a quick mobile capture moment.

## 07. Proposed Experience

The solution combines three connected workflows:

- Calendar as the surface: users see what was supposed to happen.
- Day review as the core workflow: users confirm what actually happened.
- Project/task linking as the data-quality mechanism: activities become structured, reportable time data.

The calendar should help users understand:

- Which activities have already been logged.
- Which past activities still need to be logged.
- Which activities need project/task assignment.
- Which project/client each activity belongs to.
- What important planning or reporting signals need attention.

The side panel already exists in Toggl Focus, so the recommendation is not to add a new side panel pattern. The improvement is to make the existing panel more useful for time completeness.

### 07.a Key Product Changes Shown in the Prototype

#### 07.a.i Calendar as a Review Surface

As-is, the calendar contains useful activity context, but it is not clear where the user should start or how calendar events, tasks, timers, and reporting connect. In the prototype, the calendar becomes the main review surface for identifying past activities that need confirmation or assignment.

#### 07.a.ii Clearer Activity State and Ownership

As-is, the meaning of calendar colors and activity states is hard to interpret. In the prototype, project/client ownership and time state are separated: muted colors show the project/client, while outlines and compact badges show whether an activity is logged, unlogged, running, or missing assignment.

#### 07.a.iii Planning Intelligence as the Attention Entry Point

As-is, it is not immediately clear which activities need user action before reports can be trusted. In the prototype, the planning intelligence module summarizes what needs attention and gives the user a clear `Review next` entry point.

#### 07.a.iv Side Panel for Time Completeness

As-is, clicking a calendar activity can open a modal and a side panel with overlapping information. In the prototype, the side panel is the main detail surface for the selected activity. It explains whether the activity appears in reports, shows project/task assignment, offers a clear primary action, and surfaces related missing time when relevant.

#### 07.a.v Contextual Manual Timer

As-is, the top timer can feel disconnected from what is visible in the calendar. In the prototype, the active timer is shown as a visible running calendar activity, making it easier to understand what is currently being tracked.

## 08. Solution Details

This section defines the main elements of the proposed calendar-based review flow. The prototype makes these elements tangible, but the solution is described here as product behavior rather than as a screen-by-screen walkthrough.

### 08.a Attention Summary

The planning intelligence module is the single place for "what needs attention." It replaces unclear logged-vs-planned signals and avoids duplicating the same information in a separate review/status strip.

It should summarize, in natural language:

- Past activities not logged.
- Activities needing assignment.
- Upcoming milestones or deadlines.
- Planned vs actual anomalies, if relevant.

Example:

> 3 items need attention today: 2 past activities are not logged, 1 activity needs project assignment, and Mercedes Benz milestone is due in 3 days.

Clicking `Review next` opens the first activity that needs attention, and side-panel arrows let the user move only through review items.

### 08.b Activity Detail and Report Readiness

When selecting an activity, the panel should show:

- Whether the activity will appear in reports.
- Whether it is logged, unlogged, running, or future.
- Project/task assignment.
- Suggested project/task only when there is a clear match.
- Primary action based on state.

Rules:

- Past unlogged activities show `Log activity`.
- Past logged activities show `Edit logged time`.
- Current/running activities show timer-related actions.
- Future activities show `Edit plan` or `Assign project/task`, not `Log activity`.
- Related missing time can be surfaced when other past activities for the same project are unlogged.

### 08.c Project and Task Assignment

Autosuggest is useful, but should be conservative.

It should only appear when the event title clearly matches an existing client/project/task. For example, `Mercedes Benz client call` can suggest `Mercedes Benz / EV Launch Campaign`. If there is no clear match, no suggestion should be shown.

This avoids over-automation and protects user trust, especially because incorrect classification can affect billing, client reporting, and proof of work.

### 08.d Active Timer Context

The redesign does not remove manual time tracking. The timer remains visible because time tracking is still core to Toggl.

The improvement is contextual: the timer should feel connected to the calendar rather than floating separately from it. In the prototype, the top-right timer says `Product audit - 35m 7s`, matching the visible running activity in the calendar.

### 08.e Prototype Scope

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

### 08.f Prototype Limitations

The prototype should not be considered a high-fidelity redesign of Toggl Focus. It is a lightweight, interactive way to share and test the product idea.

Some existing interface elements are intentionally simplified or missing to keep the prototype focused. For example, controls for changing calendar view, calendar settings, deeper filtering, and full navigation behavior are not fully represented. The goal is to communicate the core workflow and product logic, not reproduce every detail of the existing interface.

The prototype is frontend-only. It does not include real calendar sync, reporting data, authentication, persistence, or backend logic. State changes are simulated so the reviewer can understand the intended experience.

## 09. Tradeoffs

### 09.a Scope vs Depth

I focused on one narrow workflow: calendar-based day review and time confirmation.

I did not redesign reports, mobile capture, project setup, onboarding, or the full planning experience. Those areas matter, but the selected workflow sits upstream of them. Going deeper on this workflow made the solution more coherent than improving many surfaces lightly.

### 09.b Speed vs Fidelity

I prioritized making the core product logic testable over reproducing every detail of the existing Toggl Focus interface.

The prototype is intentionally not a production-level redesign. Some controls are simplified or missing, including calendar settings, full filtering, deeper navigation, and complete calendar configuration. The tradeoff was worthwhile because the assignment is about product judgment and communicating the idea clearly.

### 09.c Automation vs User Trust

I kept autosuggest conservative.

The product suggests a project/task only when the activity title clearly matches an existing client, project, or task. I avoided showing suggestions for ambiguous activities because incorrect automation could reduce trust, especially when the data affects billing, reporting, or proof of work.

### 09.d Timer Continuity vs Calendar-Led Review

I did not remove or deprioritize the manual timer.

The timer remains important because active time tracking is core to Toggl. The prototype changes its context: the active timer is linked to a visible calendar activity so the user can better understand what is currently being tracked and how it relates to the day.

### 09.e Individual Focus vs Team Intelligence

I intentionally kept the solution focused on individual users.

Toggl Focus also has team planning, workload, and capacity opportunities, but the brief asked specifically for Freelancers and Individual Contributors. The prototype therefore focuses on individual time completeness rather than team-level planning or resource management.

## 10. Expected User and Business Impact

If successful, this improvement should:

- Reduce friction in reconstructing missed or incomplete time.
- Increase trust in reports by improving upstream data quality.
- Give Freelancers more confidence that billable work has not been missed.
- Help embedded ICs maintain a clearer record of work and value delivered.
- Create a repeated daily or weekly review habit that supports retention.

The business logic is that better data quality should increase the perceived value of Toggl Focus. If users trust that their tracked time becomes useful reporting and planning intelligence, they have a stronger reason to keep returning and a clearer reason to convert from trial to paid.

## 11. Measurement Plan

I would evaluate this at three levels: workflow adoption, data-quality improvement, and business impact.

### 11.a Product Metrics

- Activation: time to first useful insight, first completed review, first project/task assignment from calendar.
- Engagement: weekly active tracking days, edited/reconstructed entries, report views after review.
- Retention: week 2 and week 4 return rate for individual users.
- Data quality: fewer uncategorized entries, fewer missing hours, fewer unassigned activities.
- Business impact: trial-to-paid conversion and freelancer/IC plan retention.

### 11.b Example Instrumentation

- `calendar_review_started`
- `calendar_review_completed`
- `review_next_clicked`
- `calendar_activity_logged`
- `calendar_activity_assigned_to_project`
- `autosuggest_applied`
- `autosuggest_dismissed`
- `report_view_after_review`
- `unassigned_activity_count`
- `uncategorized_time_share`
- `manual_time_edit_duration`

### 11.c Evaluation Questions

- What percentage of users complete their first calendar review within 7 days?
- What percentage of unlogged calendar activities are resolved through review?
- Do users who complete review have lower uncategorized time and higher report engagement?
- Do users who complete review retain better in week 2 and week 4 than users who do not?
- Does conservative autosuggest reduce manual assignment effort without increasing correction or dismissal rates?

## 12. AI Usage

I used AI as a research synthesis, structuring, and prototyping partner, not as the source of the product decision.

I defined the user problem and selected the opportunity area based on my own exploration of Toggl Focus and the assignment goals. I then used AI to help gather and synthesize supporting evidence from public reviews, user comments, community discussions, and competitor signals. I also used AI to check whether I had missed obvious angles, risks, or alternative opportunity areas.

For project management, I used AI to structure the work into separate Markdown files for research, pain-point prioritization, solution definition, prototype brief, Loom planning, and final synthesis. This helped keep the thinking modular while still turning it into one coherent deliverable.

For the prototype, I first defined the product logic and interaction requirements, then used AI-assisted coding to build and iterate on a local frontend prototype. I overrode AI where product judgment mattered: narrowing the scope, keeping autosuggest conservative, avoiding a broad reports redesign, and choosing a workflow that improves upstream data quality rather than adding surface-level intelligence.

## 13. Risks and Open Questions

- Would users prefer this review flow daily, weekly, or only when reports are incomplete?
- Does the planning intelligence module reduce confusion, or does it create another thing to manage?
- How much autosuggest is helpful before it feels untrustworthy?
- Should personal/non-work activities be explicitly excluded from reports, or simply left unassigned?
- How should the flow adapt for mobile once sync issues are resolved?
- Should calendar review become a prompted habit, or should it remain user-initiated to avoid adding pressure?

## 14. Submission Package

- Written case study: this document.
- Loom walkthrough: `[Add public Loom link]`.
- Prototype: [https://toggl.reachable.city](https://toggl.reachable.city).
- Fallback prototype URL: [https://valeriovdb.github.io/toggl-focus-calendar-prototype/](https://valeriovdb.github.io/toggl-focus-calendar-prototype/).
- Source code: [https://github.com/Valeriovdb/toggl-focus-calendar-prototype](https://github.com/Valeriovdb/toggl-focus-calendar-prototype).

To run the prototype locally:

```bash
cd prototype
open index.html
```
