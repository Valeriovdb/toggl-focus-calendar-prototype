# Toggl Focus Calendar Review Prototype

Frontend-only prototype for the Toggl Focus Senior Product Manager case study.

## Prototype

The prototype is a static HTML/CSS/JavaScript app in `prototype/`.

To run locally:

```bash
cd prototype
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## What It Demonstrates

- Calendar-based day review and time confirmation.
- Clear logged, unlogged, running, and needs-assignment states.
- Project/client color coding.
- Google Calendar imported activity indicators.
- Conservative project autosuggest.
- Guided `Review next` flow for activities that need attention.

## Notes

This is a frontend-only prototype with hardcoded sample data. There is no backend or real Google Calendar integration.
