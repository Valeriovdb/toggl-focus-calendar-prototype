const days = [
  { key: "mon", label: "Mon 22" },
  { key: "tue", label: "Tue 23", today: true },
  { key: "wed", label: "Wed 24" },
  { key: "thu", label: "Thu 25" },
  { key: "fri", label: "Fri 26" },
];

const projects = [
  { id: "mb-ev", label: "Mercedes Benz / EV Launch Campaign", client: "Mercedes Benz", color: "mercedes" },
  { id: "mb-dealer", label: "Mercedes Benz / Dealer Portal Optimization", client: "Mercedes Benz", color: "mercedes" },
  { id: "mb-auto", label: "Mercedes Benz / Autonomous Services Discovery", client: "Mercedes Benz", color: "mercedes" },
  { id: "asos-checkout", label: "Asos / Checkout Conversion Sprint", client: "Asos", color: "asos" },
  { id: "asos-returns", label: "Asos / Returns Experience Review", client: "Asos", color: "asos" },
  { id: "none", label: "No project assigned", client: "Unassigned", color: "unassigned" },
  { id: "personal", label: "Personal / Non-work", client: "Personal", color: "personal" },
];

let events = [
  {
    id: "e1",
    day: "mon",
    title: "market analysis",
    projectId: "asos-checkout",
    task: "Discovery",
    start: 10.25,
    duration: 1,
    status: "logged",
    source: "Toggl",
  },
  {
    id: "e2",
    day: "mon",
    title: "stakeholders alignment",
    projectId: "mb-dealer",
    task: "Planning",
    start: 15,
    duration: 1,
    status: "unlogged",
    source: "Google Calendar",
  },
  {
    id: "e3",
    day: "tue",
    title: "Mercedes Benz client call",
    projectId: "none",
    task: "",
    start: 9.5,
    duration: 1,
    status: "unlogged",
    source: "Google Calendar",
  },
  {
    id: "e4",
    day: "tue",
    title: "Product audit",
    projectId: "mb-auto",
    task: "Assumption mapping",
    start: 11.25,
    duration: 1.5,
    status: "running",
    source: "Toggl",
  },
  {
    id: "e5",
    day: "wed",
    title: "EV Launch Campaign planning",
    projectId: "mb-ev",
    task: "Campaign timeline planning",
    start: 13.5,
    duration: 1,
    status: "future",
    source: "Toggl",
  },
  {
    id: "e6",
    day: "wed",
    title: "Autonomous Services Discovery",
    projectId: "mb-auto",
    task: "Opportunity sizing",
    start: 15,
    duration: 1,
    status: "future",
    source: "Toggl",
  },
  {
    id: "e7",
    day: "thu",
    title: "ASOS checkout review",
    projectId: "asos-checkout",
    task: "Experiment brief",
    start: 14.25,
    duration: 1,
    status: "future",
    source: "Google Calendar",
  },
  {
    id: "e8",
    day: "fri",
    title: "German class",
    projectId: "none",
    task: "",
    start: 13.75,
    duration: 1.5,
    status: "future",
    source: "Google Calendar",
  },
  {
    id: "e9",
    day: "mon",
    title: "Networking coffee John",
    projectId: "personal",
    task: "Non-work",
    start: 16,
    duration: 1,
    status: "logged",
    source: "Google Calendar",
  },
];

let selectedEventId = null;
let reviewMode = false;

const calendarHeaderHeight = 42;
const hourHeight = 74;
const currentTime = {
  day: "tue",
  hour: 11.58,
};

const calendarDays = document.getElementById("calendarDays");
const detailPanel = document.getElementById("detailPanel");
const reviewNext = document.getElementById("reviewNext");

function getProject(projectId) {
  return projects.find((project) => project.id === projectId) || projects.find((project) => project.id === "none");
}

function isFutureEvent(event) {
  return event.status === "future";
}

function needsAssignment(event) {
  return event.projectId === "none";
}

function needsReview(event) {
  return event.status === "unlogged" || needsAssignment(event);
}

function getSuggestion(event) {
  const title = event.title.toLowerCase();
  if (title.includes("mercedes benz")) {
    return projects.find((project) => project.id === "mb-ev");
  }
  if (title.includes("asos") || title.includes("checkout")) {
    return projects.find((project) => project.id === "asos-checkout");
  }
  return null;
}

function formatDuration(hours) {
  const fullHours = Math.floor(hours);
  const minutes = Math.round((hours - fullHours) * 60);
  if (fullHours && minutes) return `${fullHours}h ${minutes}m`;
  if (fullHours) return `${fullHours}h`;
  return `${minutes}m`;
}

function formatTime(decimalHour) {
  const hour = Math.floor(decimalHour);
  const minute = Math.round((decimalHour - hour) * 60);
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${String(minute).padStart(2, "0")} ${period}`;
}

function renderCalendar() {
  calendarDays.innerHTML = "";

  days.forEach((day) => {
    const dayColumn = document.createElement("div");
    dayColumn.className = "day";
    dayColumn.innerHTML = `
      <div class="day-header ${day.today ? "today" : ""}">${day.label}</div>
      ${Array.from({ length: 10 }, () => '<div class="grid-line"></div>').join("")}
    `;

    if (day.key === currentTime.day) {
      const line = document.createElement("div");
      line.className = "now-line";
      line.style.top = `${calendarHeaderHeight + (currentTime.hour - 9) * hourHeight}px`;
      dayColumn.appendChild(line);
    }

    events
      .filter((event) => event.day === day.key)
      .forEach((event) => {
        dayColumn.appendChild(createEventElement(event));
      });

    calendarDays.appendChild(dayColumn);
  });
}

function createEventElement(event) {
  const project = getProject(event.projectId);
  const top = calendarHeaderHeight + (event.start - 9) * hourHeight;
  const height = Math.max(event.duration * hourHeight - 8, 46);
  const eventButton = document.createElement("button");
  const statusClass = event.status === "future" ? "" : event.status;
  eventButton.className = `event ${project.color} ${statusClass} ${needsAssignment(event) ? "needs-assignment" : ""} ${selectedEventId === event.id ? "selected" : ""}`;
  eventButton.style.top = `${top}px`;
  eventButton.style.height = `${height}px`;
  eventButton.setAttribute("aria-label", `${event.title}, ${event.status}`);
  eventButton.addEventListener("click", () => selectEvent(event.id));

  eventButton.innerHTML = `
    <span class="event-title">${event.title}</span>
    <span class="event-meta">${project.label}</span>
    <span class="event-footer">
      <span>${formatDuration(event.duration)}</span>
      ${renderTinyBadges(event)}
    </span>
  `;

  return eventButton;
}

function renderTinyBadges(event) {
  const badges = [];
  if (event.source === "Google Calendar") badges.push({ label: "G", className: "source-badge", title: "Imported from Google Calendar" });
  if (event.status === "running") badges.push({ label: "Running", className: "running-badge", title: "Running timer" });
  if (needsAssignment(event)) badges.push({ label: "!", className: "attention-badge", title: "Needs project assignment" });
  return badges
    .map((badge) => `<span class="badge ${badge.className}" title="${badge.title}">${badge.label}</span>`)
    .join("");
}

function selectEvent(eventId, options = {}) {
  selectedEventId = eventId;
  reviewMode = options.reviewMode ?? reviewMode;
  renderCalendar();
  renderPanel();
  detailPanel.classList.add("open");
}

function renderPanel() {
  const event = events.find((item) => item.id === selectedEventId);
  if (!event) return;

  const project = getProject(event.projectId);
  const suggestion = getSuggestion(event);
  const related = events.filter(
    (item) =>
      item.id !== event.id &&
      item.projectId === event.projectId &&
      item.status === "unlogged" &&
      event.projectId !== "none"
  );

  const reportText =
    event.status === "logged"
      ? "This activity appears in reports."
      : event.status === "running"
        ? "This timer is active. It will appear in reports when stopped and saved."
        : isFutureEvent(event)
          ? "Future activities are not reportable until they happen."
          : "This activity is missing from reports until it is logged.";

  detailPanel.innerHTML = `
    <div class="panel-content">
      <div class="panel-header">
        <span class="project-dot" style="background: var(--${project.color})"></span>
        <div>
          <p class="eyebrow">${getDisplayStatus(event)}</p>
          <h2>${event.title}</h2>
        </div>
        <button class="close-panel" id="closePanel" aria-label="Close panel">x</button>
      </div>

      <div class="panel-body">
        <div class="status-card ${event.status === "logged" ? "positive" : "warning"}">
          <strong>${event.status === "logged" ? "Report-ready" : "Needs attention"}</strong>
          <p>${reportText}</p>
        </div>

        <div class="field-list">
          <div class="field-row">
            <label>Date</label>
            <input value="${getDayLabel(event.day)}" disabled />
          </div>
          <div class="field-row">
            <label>Time</label>
            <input value="${formatTime(event.start)} - ${formatTime(event.start + event.duration)}" disabled />
          </div>
          <div class="field-row">
            <label>Project</label>
            <select id="projectSelect">
              ${projects.map((option) => `<option value="${option.id}" ${option.id === event.projectId ? "selected" : ""}>${option.label}</option>`).join("")}
            </select>
          </div>
          <div class="field-row">
            <label>Task</label>
            <input id="taskInput" value="${event.task}" placeholder="Add task" />
          </div>
        </div>

        ${renderSuggestion(event, suggestion)}

        <div class="button-row">
          ${renderPrimaryAction(event)}
          <button class="secondary-button" id="saveEvent">Save changes</button>
        </div>

        ${renderRelated(event, related)}
        ${renderReviewNavigation(event)}
      </div>
    </div>
  `;

  document.getElementById("closePanel").addEventListener("click", closePanel);
  document.getElementById("projectSelect").addEventListener("change", updateProject);
  document.getElementById("taskInput").addEventListener("input", updateTask);
  document.getElementById("saveEvent").addEventListener("click", saveOnly);

  const logButton = document.getElementById("logActivity");
  if (logButton) logButton.addEventListener("click", logSelectedActivity);

  const suggestionButton = document.getElementById("applySuggestion");
  if (suggestionButton && suggestion) suggestionButton.addEventListener("click", () => applySuggestion(suggestion.id));

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", (eventClick) => selectEvent(eventClick.currentTarget.dataset.jump));
  });

  const previousReview = document.getElementById("previousReview");
  const nextReview = document.getElementById("nextReview");
  if (previousReview) previousReview.addEventListener("click", () => moveReview(-1));
  if (nextReview) nextReview.addEventListener("click", () => moveReview(1));
}

function renderSuggestion(event, suggestion) {
  if (!suggestion || event.projectId !== "none") return "";
  return `
    <div class="suggestion">
      <strong>Suggested assignment</strong>
      <p>${suggestion.label} matches the event title.</p>
      <button class="secondary-button" id="applySuggestion">Apply suggestion</button>
    </div>
  `;
}

function renderPrimaryAction(event) {
  if (event.status === "unlogged") {
    return `<button class="primary-button" id="logActivity">Log activity</button>`;
  }
  if (event.status === "logged") {
    return `<button class="secondary-button" type="button">Edit logged time</button>`;
  }
  if (event.status === "running") {
    return `<button class="primary-button" type="button">Stop timer</button>`;
  }
  return `<button class="secondary-button" type="button">Edit plan</button>`;
}

function renderRelated(event, related) {
  if (!related.length) return "";
  return `
    <section>
      <p class="eyebrow">Related missing time</p>
      <div class="related-list">
        ${related
          .map(
            (item) => `
              <div class="related-item">
                <div>
                  <strong>${item.title}</strong>
                  <p>${getDayLabel(item.day)}, ${formatDuration(item.duration)} not logged</p>
                </div>
                <button data-jump="${item.id}">Review</button>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderReviewNavigation(event) {
  if (!reviewMode) return "";
  const reviewItems = getReviewItems();
  const currentIndex = reviewItems.findIndex((item) => item.id === event.id);
  if (currentIndex === -1) return "";
  return `
    <nav class="review-nav" aria-label="Review navigation">
      <button class="secondary-button" id="previousReview" ${currentIndex === 0 ? "disabled" : ""}>← Previous</button>
      <span>${currentIndex + 1} of ${reviewItems.length} to review</span>
      <button class="secondary-button" id="nextReview" ${currentIndex === reviewItems.length - 1 ? "disabled" : ""}>Next →</button>
    </nav>
  `;
}

function getReviewItems() {
  return events.filter((event) => needsReview(event) && !isFutureEvent(event));
}

function getDisplayStatus(event) {
  if (needsAssignment(event)) return event.status === "future" ? "Needs assignment" : `${event.status} - Needs assignment`;
  if (event.status === "future") return "Future activity";
  return event.status;
}

function getDayLabel(dayKey) {
  return days.find((day) => day.key === dayKey)?.label || dayKey;
}

function updateProject(eventChange) {
  events = events.map((event) =>
    event.id === selectedEventId ? { ...event, projectId: eventChange.target.value } : event
  );
  renderCalendar();
  renderPanel();
  updateSummary();
}

function updateTask(eventChange) {
  events = events.map((event) =>
    event.id === selectedEventId ? { ...event, task: eventChange.target.value } : event
  );
}

function applySuggestion(projectId) {
  events = events.map((event) =>
    event.id === selectedEventId ? { ...event, projectId, task: event.task || "Client work" } : event
  );
  renderCalendar();
  renderPanel();
  updateSummary();
}

function logSelectedActivity() {
  events = events.map((event) =>
    event.id === selectedEventId ? { ...event, status: "logged" } : event
  );
  renderCalendar();
  renderPanel();
  updateSummary();
}

function saveOnly() {
  renderCalendar();
  renderPanel();
  updateSummary();
}

function closePanel() {
  selectedEventId = null;
  reviewMode = false;
  detailPanel.classList.remove("open");
  detailPanel.innerHTML = "";
  renderCalendar();
}

function updateSummary() {
  const unlogged = events.filter((event) => event.status === "unlogged").length;
  const unassigned = events.filter((event) => needsAssignment(event)).length;
  const attention = events.filter((event) => needsReview(event)).length;
  document.getElementById("summaryTitle").textContent = `${attention} ${attention === 1 ? "item needs" : "items need"} attention today`;
  document.getElementById("summaryBody").textContent =
    `${unlogged} past ${unlogged === 1 ? "activity is" : "activities are"} not logged, ` +
    `${unassigned} ${unassigned === 1 ? "activity needs" : "activities need"} project assignment, ` +
    "and Mercedes Benz milestone is due in 3 days.";
}

reviewNext.addEventListener("click", () => {
  const next = getReviewItems()[0];
  if (next) selectEvent(next.id, { reviewMode: true });
});

function moveReview(direction) {
  const reviewItems = getReviewItems();
  const currentIndex = reviewItems.findIndex((event) => event.id === selectedEventId);
  const next = reviewItems[currentIndex + direction];
  if (next) selectEvent(next.id, { reviewMode: true });
}

renderCalendar();
updateSummary();
