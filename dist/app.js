const workspaces = [
  {
    id: "bgdl",
    label: "BGDL Control Centre",
    short: "Control Centre",
    icon: "layout-dashboard",
    tone: "blue",
    audience: "Portfolio leadership",
    pages: [
      {
        path: "executive-overview",
        title: "Executive Overview",
        desc: "A portfolio-wide pulse across schools, learning and operations.",
        kind: "executive",
      },
      {
        path: "schools-directory",
        title: "Schools Directory",
        desc: "Every institution, deployment stage and headline metric.",
        kind: "schools",
      },
      {
        path: "school-profile",
        title: "School Profile",
        desc: "A complete snapshot of one illustrative school.",
        kind: "profile",
      },
      {
        path: "users-roles",
        title: "Users & Roles",
        desc: "Role distribution and access visibility across the platform.",
        kind: "users",
      },
      {
        path: "cross-school-analytics",
        title: "Cross-School Analytics",
        desc: "Compare enrolment, attendance and outcomes.",
        kind: "analytics",
      },
      {
        path: "attendance-intelligence",
        title: "Attendance Intelligence",
        desc: "Surface patterns and support opportunities early.",
        kind: "attendance",
      },
      {
        path: "devices-connectivity",
        title: "Devices & Connectivity",
        desc: "Readiness, allocation and illustrative sync states.",
        kind: "devices",
      },
      {
        path: "ai-management-insights",
        title: "AI Management Insights",
        desc: "Scripted signals for faster leadership decisions.",
        kind: "insights",
      },
      {
        path: "content-distribution",
        title: "Content Distribution",
        desc: "Approved curriculum resources across the school network.",
        kind: "content",
      },
      {
        path: "support-integrations",
        title: "Support & Integrations",
        desc: "A clear view of service requests and planned connections.",
        kind: "support",
      },
      {
        path: "platform-settings",
        title: "Platform Settings",
        desc: "Tenant policy, licensing and audit preview.",
        kind: "settings",
      },
    ],
  },
  {
    id: "school",
    label: "School Management",
    short: "School Office",
    icon: "school",
    tone: "cyan",
    audience: "Headteacher & operations",
    pages: [
      {
        path: "school-overview",
        title: "School Overview",
        desc: "Today’s operational picture, ready at a glance.",
        kind: "schooldash",
      },
      {
        path: "admissions",
        title: "Admissions",
        desc: "Follow the illustrative intake journey from enquiry to enrolment.",
        kind: "pipeline",
      },
      {
        path: "student-directory",
        title: "Student Directory",
        desc: "A role-appropriate view of learner records.",
        kind: "students",
      },
      {
        path: "staff-directory",
        title: "Staff Directory",
        desc: "Teaching assignments, availability and staffing mix.",
        kind: "staff",
      },
      {
        path: "classes-subjects",
        title: "Classes & Subjects",
        desc: "Class structures and subject coverage for the selected school.",
        kind: "classes",
      },
      {
        path: "academic-calendar",
        title: "Academic Calendar",
        desc: "Term milestones, school events and assessment windows.",
        kind: "calendar",
      },
      {
        path: "timetable",
        title: "Timetable",
        desc: "A weekly preview of rooms, classes and teachers.",
        kind: "timetable",
      },
      {
        path: "examinations-results",
        title: "Examinations & Results",
        desc: "Assessment readiness, grading progress and outcomes.",
        kind: "exams",
      },
      {
        path: "attendance",
        title: "Attendance",
        desc: "Daily attendance across learners and staff.",
        kind: "attendance",
      },
      {
        path: "assets-maintenance",
        title: "Assets & Maintenance",
        desc: "Classrooms, equipment and service requests.",
        kind: "assets",
      },
      {
        path: "communication-centre",
        title: "Communication Centre",
        desc: "School notices and audience-specific message previews.",
        kind: "messages",
      },
      {
        path: "school-reports",
        title: "School Reports",
        desc: "A catalogue of management-ready report previews.",
        kind: "reports",
      },
    ],
  },
  {
    id: "teacher",
    label: "Teacher Studio",
    short: "Teacher Studio",
    icon: "presentation",
    tone: "violet",
    audience: "Teacher productivity",
    pages: [
      {
        path: "teacher-dashboard",
        title: "Teacher Dashboard",
        desc: "Today’s classes, priorities and teaching rhythm.",
        kind: "teacherdash",
      },
      {
        path: "my-classes",
        title: "My Classes",
        desc: "Roster, participation and curriculum progress.",
        kind: "classes",
      },
      {
        path: "lesson-planner",
        title: "Lesson Planner",
        desc: "A focused lesson structure ready for teacher judgement.",
        kind: "lessonplan",
      },
      {
        path: "scheme-of-work",
        title: "Scheme of Work",
        desc: "Term topics and curriculum coverage in one place.",
        kind: "scheme",
      },
      {
        path: "learning-resources",
        title: "Learning Resources",
        desc: "Curated files, videos and classroom materials.",
        kind: "content",
      },
      {
        path: "assignments",
        title: "Assignments",
        desc: "Set work, marking load and learner completion.",
        kind: "assignments",
      },
      {
        path: "tests-question-bank",
        title: "Tests & Question Bank",
        desc: "Reusable questions and assessment planning previews.",
        kind: "questions",
      },
      {
        path: "attendance-register",
        title: "Attendance Register",
        desc: "A calm, class-focused register preview.",
        kind: "register",
      },
      {
        path: "gradebook",
        title: "Gradebook",
        desc: "Continuous assessment and examination performance.",
        kind: "gradebook",
      },
      {
        path: "ai-teaching-assistant",
        title: "AI Teaching Assistant",
        desc: "A scripted example of planning support with teacher control.",
        kind: "ai",
      },
      {
        path: "messages",
        title: "Messages",
        desc: "School and family conversations, organised by context.",
        kind: "messages",
      },
    ],
  },
  {
    id: "student",
    label: "Student Learning",
    short: "Learning",
    icon: "graduation-cap",
    tone: "coral",
    audience: "Primary & secondary learners",
    pages: [
      {
        path: "learning-home",
        title: "Learning Home",
        desc: "See what you can learn and enjoy today.",
        kind: "studentdash",
      },
      {
        path: "my-subjects",
        title: "My Subjects",
        desc: "Choose a subject and continue where you stopped.",
        kind: "subjects",
      },
      {
        path: "lesson-viewer",
        title: "Lesson Viewer",
        desc: "Learn one small step at a time.",
        kind: "lesson",
      },
      {
        path: "assignments",
        title: "Assignments",
        desc: "See what to do next and what you have finished.",
        kind: "assignments",
      },
      {
        path: "tests-exams",
        title: "Tests & Exams",
        desc: "Know what is coming and practise before the day.",
        kind: "studenttests",
      },
      {
        path: "results-progress",
        title: "Results & Progress",
        desc: "Celebrate your progress and see what to practise next.",
        kind: "progress",
      },
      {
        path: "learning-library",
        title: "Learning Library",
        desc: "Find stories, videos and activities you will enjoy.",
        kind: "library",
      },
      {
        path: "ai-learning-buddy",
        title: "AI Learning Buddy",
        desc: "Get a simple explanation when a lesson feels hard.",
        kind: "studentai",
      },
      {
        path: "achievements",
        title: "Achievements",
        desc: "See the badges you earned by learning and trying.",
        kind: "achievements",
      },
      {
        path: "timetable",
        title: "Timetable",
        desc: "See your lessons for today and the rest of the week.",
        kind: "studenttime",
      },
      {
        path: "offline-downloads",
        title: "Offline Downloads",
        desc: "Keep learning when there is no internet.",
        kind: "offline",
      },
    ],
  },
  {
    id: "parent",
    label: "Parent Connect",
    short: "Parent Connect",
    icon: "users",
    tone: "gold",
    audience: "Families",
    pages: [
      {
        path: "family-overview",
        title: "Family Overview",
        desc: "Both children’s learning, attendance and school updates.",
        kind: "parentdash",
      },
      {
        path: "my-children",
        title: "My Children",
        desc: "Linked learner profiles and their current school journey.",
        kind: "children",
      },
      {
        path: "academic-progress",
        title: "Academic Progress",
        desc: "Results, feedback and helpful next steps.",
        kind: "progress",
      },
      {
        path: "attendance",
        title: "Attendance",
        desc: "Term attendance and recent absence indicators.",
        kind: "attendance",
      },
      {
        path: "messages",
        title: "Messages",
        desc: "Teacher and school message previews.",
        kind: "messages",
      },
      {
        path: "school-calendar",
        title: "School Calendar",
        desc: "Important family dates and term milestones.",
        kind: "calendar",
      },
      {
        path: "announcements",
        title: "Announcements",
        desc: "Notices and priority updates from the school.",
        kind: "announcements",
      },
    ],
  },
  {
    id: "stakeholder",
    label: "Stakeholder Intelligence",
    short: "Intelligence",
    icon: "chart",
    tone: "teal",
    audience: "Authorised oversight",
    pages: [
      {
        path: "oversight-overview",
        title: "Oversight Overview",
        desc: "Aggregate educational signals without private pupil detail.",
        kind: "oversight",
      },
      {
        path: "schools",
        title: "Schools",
        desc: "Authorised institutions and programme status.",
        kind: "schools",
      },
      {
        path: "enrolment-analytics",
        title: "Enrolment Analytics",
        desc: "Participation trends across school and class level.",
        kind: "enrolment",
      },
      {
        path: "learning-outcomes",
        title: "Learning Outcomes",
        desc: "Aggregate performance, growth and comparison.",
        kind: "outcomes",
      },
      {
        path: "attendance-trends",
        title: "Attendance Trends",
        desc: "School-level participation and emerging patterns.",
        kind: "attendance",
      },
      {
        path: "infrastructure-status",
        title: "Infrastructure Status",
        desc: "Device, connectivity and maintenance readiness.",
        kind: "devices",
      },
      {
        path: "executive-reports",
        title: "Executive Reports",
        desc: "Static previews of briefing-ready reports.",
        kind: "reports",
      },
    ],
  },
];

const schools = [
  {
    id: "ubakala",
    name: "Ubakala Smart School",
    type: "Illustrative primary",
    students: 486,
    teachers: 24,
    attendance: 94,
    devices: 128,
    performance: 78,
  },
  {
    id: "umuomaikwu",
    name: "Umuomaikwu Smart School",
    type: "Illustrative primary",
    students: 372,
    teachers: 19,
    attendance: 91,
    devices: 96,
    performance: 74,
  },
  {
    id: "secondary",
    name: "BlueLMS Secondary Demo School",
    type: "Fictional secondary",
    students: 624,
    teachers: 38,
    attendance: 89,
    devices: 180,
    performance: 71,
  },
];
const state = {
  school: "ubakala",
  mode: "primary",
  role: "principal",
  bgdlRole: "super",
  sidebar: false,
  presentationSlide: 0,
  touchStartX: 0,
};
const $ = (s, el = document) => el.querySelector(s);
const currentSchool = () => schools.find((s) => s.id === state.school);
const total = (key) => schools.reduce((n, s) => n + s[key], 0);
const fmt = (n) => new Intl.NumberFormat("en-NG").format(n);
const iconPaths = {
  "layout-dashboard":
    '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  school:
    '<path d="m3 10 9-6 9 6"/><path d="M5 9v10h14V9M9 19v-6h6v6M3 21h18"/>',
  presentation: '<path d="M2 3h20M4 3v13h16V3M8 21l4-5 4 5M8 9l2 2 4-4 2 2"/>',
  "graduation-cap":
    '<path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  home: '<path d="m3 11 9-8 9 8v10h-6v-6H9v6H3Z"/>',
  switch: '<path d="m7 7-4 4 4 4M3 11h14M17 17l4-4-4-4M21 13H7"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  alert:
    '<path d="M12 9v4M12 17h.01"/><path d="m10.3 3.7-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.3l-8-14a2 2 0 0 0-3.4 0Z"/>',
  tablet:
    '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  spark:
    '<path d="m12 3-1.6 4.4L6 9l4.4 1.6L12 15l1.6-4.4L18 9l-4.4-1.6L12 3ZM5 15l-.8 2.2L2 18l2.2.8L5 21l.8-2.2L8 18l-2.2-.8L5 15Z"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/>',
  play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4Z"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',
  award:
    '<circle cx="12" cy="8" r="5"/><path d="M8.5 12 7 22l5-3 5 3-1.5-10"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5Z"/><path d="M4 6.5v13"/>',
  calculator:
    '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  flask:
    '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8.5 15h7"/>',
  palette:
    '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2a10 10 0 0 0 0 20c1 0 2-.5 2-1.5 0-.4-.2-.8-.4-1.1-.3-.4-.5-.8-.5-1.4a2 2 0 0 1 2-2h2a5 5 0 0 0 5-5c0-5-4.5-9-10.1-9Z"/>',
  monitor:
    '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
};
function icon(name, size = 18) {
  const aliases = {
    "layout-dashboard": "squares-four",
    school: "buildings",
    presentation: "presentation-chart",
    "graduation-cap": "student",
    users: "users-three",
    chart: "chart-line-up",
    trend: "trend-up",
    search: "magnifying-glass",
    bell: "bell",
    menu: "list",
    home: "house",
    switch: "arrows-left-right",
    chevron: "caret-right",
    left: "caret-left",
    close: "x",
    arrow: "arrow-right",
    more: "dots-three",
    check: "check-circle",
    alert: "warning",
    tablet: "device-tablet",
    spark: "sparkle",
    file: "file-text",
    link: "link",
    play: "play-circle",
    download: "download-simple",
    refresh: "arrows-clockwise",
    award: "medal",
    book: "book-open-text",
    calculator: "calculator",
    flask: "flask",
    palette: "palette",
    monitor: "monitor",
  };
  const glyph = aliases[name] || name || "circle";
  return `<i class="ph ph-${glyph}" style="font-size:${size}px" aria-hidden="true"></i>`;
}
function brandLogo(cls = "") {
  return `<span class="bgdl-logo-frame ${cls}"><img class="bgdl-logo" src="assets/bgdl-logo.png" alt="Blue Giraffe Development Limited"/></span>`;
}

function route() {
  const raw = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (!raw.length) return { presentation: true, slide: 0 };
  if (raw[0] === "presentation")
    return {
      presentation: true,
      slide: Math.max(0, Math.min(5, (Number(raw[1]) || 1) - 1)),
    };
  if (raw[0] === "demo") return { welcome: true };
  const ws = workspaces.find((w) => w.id === raw[0]) || workspaces[0];
  const page = ws.pages.find((p) => p.path === raw[1]) || ws.pages[0];
  return { ws, page };
}
function miniChart(values, color = "var(--accent)") {
  const max = Math.max(...values),
    min = Math.min(...values),
    points = values
      .map(
        (v, i) =>
          `${(i / (values.length - 1)) * 100},${42 - ((v - min) / (max - min || 1)) * 35}`,
      )
      .join(" ");
  return `<svg class="spark" viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true"><polyline points="${points}" fill="none" stroke="${color}" stroke-width="2.6" vector-effect="non-scaling-stroke"/></svg>`;
}
function donut(value, label, color = "var(--accent)") {
  const dash = Math.round(value * 2.64);
  return `<div class="donut"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42"/><circle class="value" cx="50" cy="50" r="42" style="stroke:${color};stroke-dasharray:${dash} 264"/></svg><div><strong>${value}%</strong><span>${label}</span></div></div>`;
}
function metricIcon(label) {
  const x = label.toLowerCase();
  if (x.includes("school")) return "school";
  if (x.includes("learner") || x.includes("student")) return "graduation-cap";
  if (x.includes("teacher") || x.includes("staff")) return "presentation";
  if (x.includes("device")) return "tablet";
  if (x.includes("attendance")) return "check";
  if (x.includes("resource") || x.includes("lesson")) return "book";
  return "chart";
}
function navIcon(label) {
  return (
    {
      "Executive Overview": "gauge",
      "Schools Directory": "buildings",
      "School Profile": "identification-card",
      "Users & Roles": "user-gear",
      "Cross-School Analytics": "chart-scatter",
      "Attendance Intelligence": "pulse",
      "Devices & Connectivity": "devices",
      "AI Management Insights": "brain",
      "Content Distribution": "cloud-arrow-down",
      "Support & Integrations": "plugs-connected",
      "Platform Settings": "sliders-horizontal",
      "School Overview": "house-line",
      Admissions: "user-plus",
      "Student Directory": "address-book",
      "Staff Directory": "users-four",
      "Classes & Subjects": "chalkboard-teacher",
      "Academic Calendar": "calendar-dots",
      Timetable: "clock-countdown",
      "Examinations & Results": "exam",
      Attendance: "calendar-check",
      "Assets & Maintenance": "toolbox",
      "Communication Centre": "chats-circle",
      "School Reports": "files",
      "Teacher Dashboard": "chalkboard",
      "My Classes": "users-three",
      "Lesson Planner": "notebook",
      "Scheme of Work": "list-checks",
      "Learning Resources": "books",
      Assignments: "clipboard-text",
      "Tests & Question Bank": "question",
      "Attendance Register": "check-square-offset",
      Gradebook: "notepad",
      "AI Teaching Assistant": "magic-wand",
      Messages: "chat-teardrop-text",
      "Learning Home": "rocket-launch",
      "My Subjects": "book-bookmark",
      "Lesson Viewer": "play-circle",
      "Tests & Exams": "pencil-line",
      "Results & Progress": "chart-line-up",
      "Learning Library": "books",
      "AI Learning Buddy": "robot",
      Achievements: "trophy",
      "Offline Downloads": "cloud-arrow-down",
      "Family Overview": "heart",
      "My Children": "users",
      "Academic Progress": "trend-up",
      "School Calendar": "calendar-heart",
      Announcements: "megaphone",
      "Oversight Overview": "binoculars",
      Schools: "map-pin-area",
      "Enrolment Analytics": "chart-donut",
      "Learning Outcomes": "target",
      "Attendance Trends": "chart-line",
      "Infrastructure Status": "hard-drives",
      "Executive Reports": "presentation-chart",
    }[label.trim()] || "circle"
  );
}
function stat(label, value, delta) {
  return `<article class="stat-card"><div class="metric-icon">${icon(metricIcon(label), 20)}</div><div class="stat-top"><span>${label}</span><i>${icon("trend", 14)} ${delta}</i></div><strong>${value}</strong></article>`;
}
function demoTag(text = "Demo data") {
  return `<span class="demo-tag"><i></i>${text}</span>`;
}
function button(label, primary = false) {
  return `<button class="preview-btn ${primary ? "primary" : ""}" data-preview="true">${label}<small>Demo preview</small></button>`;
}
function progress(label, val, detail = "") {
  return `<div class="progress-row"><div><span>${label}</span><b>${detail || val + "%"}</b></div><div class="bar"><i style="width:${val}%"></i></div></div>`;
}
function table(headers, rows) {
  return `<div class="table-wrap"><table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td>${i === 0 ? `<b>${c}</b>` : c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function panel(title, eyebrow, body, cls = "") {
  return `<section class="panel ${cls}"><div class="panel-head"><div><span>${eyebrow}</span><h2>${title}</h2></div><button class="kebab" aria-label="Panel options" data-preview="true">${icon("more", 18)}</button></div>${body}</section>`;
}
const illustrations = {
  ecosystem: `<svg viewBox="0 0 560 440"><rect class="ill-surface" x="48" y="70" width="464" height="300" rx="36"/><circle class="ill-pale" cx="280" cy="216" r="108"/><path class="ill-line dash" d="M280 107v-38M280 362v-36M171 216H92M468 216h-79"/><rect class="ill-white" x="198" y="130" width="164" height="172" rx="24"/><rect class="ill-blue" x="218" y="151" width="124" height="70" rx="15"/><path class="ill-white-stroke" d="M238 193l24-21 20 16 23-25 17 18"/><rect class="ill-soft" x="218" y="238" width="54" height="42" rx="11"/><rect class="ill-soft" x="288" y="238" width="54" height="42" rx="11"/><g class="ill-node"><rect x="51" y="121" width="116" height="58" rx="16"/><path d="M73 151h28M87 137v28"/><circle cx="133" cy="150" r="11"/></g><g class="ill-node"><rect x="393" y="121" width="116" height="58" rx="16"/><path d="M418 161v-24h28v24M412 161h40"/><circle cx="476" cy="150" r="11"/></g><g class="ill-node"><rect x="51" y="257" width="116" height="58" rx="16"/><path d="M73 280h29v18H73zM79 276h17"/><circle cx="133" cy="286" r="11"/></g><g class="ill-node"><rect x="393" y="257" width="116" height="58" rx="16"/><path d="M415 294l14-23 14 23M420 286h18"/><circle cx="476" cy="286" r="11"/></g><circle class="ill-mint" cx="454" cy="83" r="15"/><path class="ill-navy-stroke" d="m448 83 4 4 8-9"/></svg>`,
  school: `<svg viewBox="0 0 320 220"><circle class="ill-pale" cx="160" cy="111" r="96"/><path class="ill-navy" d="M54 103 160 39l106 64v81H54z"/><rect class="ill-white" x="73" y="96" width="174" height="88" rx="8"/><rect class="ill-blue" x="139" y="124" width="42" height="60" rx="7"/><rect class="ill-soft" x="91" y="117" width="29" height="30" rx="5"/><rect class="ill-soft" x="200" y="117" width="29" height="30" rx="5"/><path class="ill-line" d="M44 184h232M160 39V18M160 18l36 14-36 13"/><circle class="ill-mint" cx="263" cy="62" r="18"/><path class="ill-navy-stroke" d="m255 62 6 6 11-13"/></svg>`,
  planning: `<svg viewBox="0 0 320 220"><rect class="ill-pale" x="36" y="27" width="248" height="168" rx="24"/><rect class="ill-white" x="67" y="43" width="140" height="154" rx="13"/><rect class="ill-blue" x="87" y="67" width="70" height="12" rx="6"/><path class="ill-line" d="M87 101h99M87 124h82M87 147h92"/><circle class="ill-soft" cx="87" cy="101" r="7"/><circle class="ill-soft" cx="87" cy="124" r="7"/><circle class="ill-mint" cx="87" cy="147" r="7"/><rect class="ill-navy" x="203" y="83" width="70" height="78" rx="16"/><path class="ill-white-stroke" d="m222 123 12 12 23-29"/><path class="ill-blue-stroke" d="m221 61 17-27 17 27M238 34v48"/></svg>`,
  ai: `<svg viewBox="0 0 320 220"><circle class="ill-pale" cx="161" cy="112" r="98"/><rect class="ill-white" x="57" y="57" width="206" height="126" rx="25"/><rect class="ill-navy" x="85" y="83" width="150" height="73" rx="19"/><circle class="ill-white" cx="126" cy="119" r="9"/><circle class="ill-white" cx="196" cy="119" r="9"/><path class="ill-white-stroke" d="M137 137c14 10 34 10 48 0"/><path class="ill-blue-stroke" d="M161 58V34M145 34h32"/><circle class="ill-mint" cx="244" cy="54" r="20"/><path class="ill-navy-stroke" d="m244 41 3 10 10 3-10 4-3 10-4-10-10-4 10-3z"/><path class="ill-blue-stroke" d="M78 35 66 22M256 179l16 16"/></svg>`,
  achievement: `<svg viewBox="0 0 320 220"><circle class="ill-pale" cx="160" cy="110" r="96"/><path class="ill-blue" d="m160 34 23 20 30-3 6 30 23 20-17 25 6 30-29 9-17 25-25-16-25 16-17-25-29-9 6-30-17-25 23-20 6-30 30 3z"/><circle class="ill-white" cx="160" cy="112" r="52"/><path class="ill-navy" d="m160 76 10 22 25 3-18 17 5 25-22-12-22 12 5-25-18-17 25-3z"/><circle class="ill-mint" cx="247" cy="53" r="13"/><circle class="ill-blue" cx="70" cy="167" r="9"/></svg>`,
  offline: `<svg viewBox="0 0 360 230"><circle class="ill-pale" cx="180" cy="114" r="103"/><rect class="ill-navy" x="72" y="45" width="105" height="154" rx="19"/><rect class="ill-white" x="83" y="61" width="83" height="112" rx="9"/><circle class="ill-mint" cx="124" cy="185" r="7"/><rect class="ill-blue" x="185" y="72" width="110" height="75" rx="18"/><path class="ill-white-stroke" d="M240 91v34M225 111l15 15 15-15M219 136h42"/><path class="ill-blue-stroke dash" d="M176 165c43 37 100 9 111-13M286 152l3 18-18-3"/><circle class="ill-white" cx="298" cy="65" r="18"/><path class="ill-navy-stroke" d="m290 65 6 6 11-13"/></svg>`,
  family: `<svg viewBox="0 0 350 220"><circle class="ill-pale" cx="175" cy="111" r="99"/><path class="ill-navy" d="m70 105 105-67 105 67v81H70z"/><rect class="ill-white" x="91" y="98" width="168" height="88" rx="11"/><circle class="ill-blue" cx="139" cy="118" r="19"/><path class="ill-blue" d="M106 171c2-26 16-40 33-40s31 14 33 40z"/><circle class="ill-mint" cx="203" cy="119" r="17"/><path class="ill-mint" d="M175 171c2-24 14-37 28-37s27 13 29 37z"/><path class="ill-line" d="M83 186h184"/><circle class="ill-blue" cx="275" cy="62" r="16"/><path class="ill-white-stroke" d="M268 62h14M275 55v14"/></svg>`,
};
function illustration(name, label, cls = "") {
  return `<div class="illustration ${cls}" role="img" aria-label="${label}" data-illustration="${name}">${illustrations[name]}</div>`;
}
const peopleRows = [
  ["Amara Okafor", "Basic 5A", "Chidi Okafor", "Active"],
  ["Somto Nwosu", "Basic 5A", "Adaeze Nwosu", "Active"],
  ["Timi Balogun", "Basic 4B", "Funmi Balogun", "Active"],
  ["Zainab Musa", "Basic 6A", "Hauwa Musa", "Support"],
  ["David Eze", "Basic 3A", "Grace Eze", "Active"],
];

function dashboardSupplement(kind) {
  const supplements = {
    executive: `<section class="command-grid"><article class="viz-panel grouped-panel"><header><span>CROSS-SCHOOL COMPARISON</span><h2>Performance and attendance</h2></header><div class="grouped-bars">${schools.map((s) => `<div><span>${s.name.replace(" Smart School", "")}</span><i style="--performance:${s.performance}%;--attendance:${s.attendance}%"><b></b><em></em></i><small>${s.performance}% learning · ${s.attendance}% attendance</small></div>`).join("")}</div></article><article class="viz-panel area-panel"><header><span>ENROLMENT MOMENTUM</span><h2>Five-term growth</h2></header><svg viewBox="0 0 520 210" role="img" aria-label="Enrolment area chart rising across five terms"><path class="area-fill" d="M20 178 L20 154 L135 130 L250 114 L365 75 L500 36 L500 178 Z"/><path class="area-line" d="M20 154 L135 130 L250 114 L365 75 L500 36"/><g>${[
      [20, 154],
      [135, 130],
      [250, 114],
      [365, 75],
      [500, 36],
    ]
      .map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="5"/>`)
      .join(
        "",
      )}</g></svg><div class="chart-axis"><span>2025 T1</span><span>2026 T1</span></div></article><article class="viz-panel connectivity-panel"><header><span>DEVICE CONNECTIVITY</span><h2>Fleet status</h2></header><div class="connectivity-layout">${donut(92, "online")}<div><p><i class="ready"></i><b>368</b> ready</p><p><i class="queue"></i><b>17</b> queued</p><p><i class="service"></i><b>12</b> service checks</p></div></div></article><article class="viz-panel ranking-panel"><header><span>SCHOOL PERFORMANCE RANKING</span><h2>Current term</h2></header>${[
      ...schools,
    ]
      .sort((a, b) => b.performance - a.performance)
      .map(
        (s, i) =>
          `<p><b>0${i + 1}</b><span>${s.name}<small>${s.attendance}% attendance</small></span><strong>${s.performance}</strong></p>`,
      )
      .join("")}</article></section>`,
    schooldash: `<section class="operations-grid"><article class="viz-panel attendance-radial"><span>DAILY ATTENDANCE</span>${donut(94, "present")}<p><b>457 learners</b><small>29 absent · 6 follow-ups</small></p></article><article class="viz-panel class-population"><header><span>CLASS POPULATION</span><h2>Capacity today</h2></header>${[
      ["Basic 1", 84],
      ["Basic 2", 76],
      ["Basic 3", 91],
      ["Basic 4", 68],
      ["Basic 5", 82],
    ]
      .map((x) => progress(x[0], x[1], `${Math.round(x[1] * 0.42)} learners`))
      .join(
        "",
      )}</article><article class="viz-panel heat-panel"><header><span>WEEKLY ATTENDANCE</span><h2>Participation heatmap</h2></header><div class="heatmap">${["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => `<b>${d}</b>${[1, 2, 3, 4, 5].map((_, j) => `<i class="heat-${((i + j) % 4) + 1}" title="${86 + ((i + j) % 9)}%"></i>`).join("")}`).join("")}</div></article><article class="viz-panel readiness-list"><header><span>SCHOOL OPERATIONS</span><h2>Readiness checks</h2></header><p><i>${icon("check", 18)}</i><span><b>Teachers available</b>23 of 24 on site</span></p><p><i>${icon("file", 18)}</i><span><b>Examinations</b>7 classes ready · 3 reviewing</span></p><p><i>${icon("alert", 18)}</i><span><b>Maintenance</b>3 priority requests</span></p></article></section>`,
    teacherdash: `<section class="teacher-command"><article class="viz-panel assessment-distribution"><header><span>CLASS ASSESSMENT</span><h2>Performance distribution</h2></header><div class="distribution">${[
      ["80–100", 28],
      ["70–79", 34],
      ["60–69", 22],
      ["50–59", 11],
      ["<50", 5],
    ]
      .map(
        (x) =>
          `<span><i style="height:${x[1] * 2.2}px"></i><b>${x[0]}</b><small>${x[1]}%</small></span>`,
      )
      .join(
        "",
      )}</div></article><article class="viz-panel completion-stack"><header><span>ASSIGNMENT COMPLETION</span><h2>My classes</h2></header>${[
      ["Basic 5", 72, 18],
      ["Basic 6", 84, 9],
      ["Basic 4", 91, 5],
    ]
      .map(
        (x) =>
          `<div><p><b>${x[0]}</b><span>${x[1]}% submitted</span></p><i><b style="width:${x[1]}%"></b><em style="width:${x[2]}%"></em></i></div>`,
      )
      .join(
        "",
      )}</article><article class="support-strip"><div>${icon("alert", 22)}</div><span><b>5 learners need additional support</b>Two in fractions, three in multi-step reasoning.</span><button data-preview="true">Review support list</button></article><article class="ai-brief"><i>${icon("spark", 24)}</i><span><b>AI Teaching Assistant</b>Draft tomorrow’s fraction recap from recent class results.</span><a href="#/teacher/ai-teaching-assistant">Open assistant ${icon("arrow", 15)}</a></article></section>`,
    studentdash: `<section class="learner-board"><article class="today-subjects"><span>TODAY’S SUBJECTS</span>${[
      ["Mathematics", "09:20", "72%"],
      ["English Studies", "10:40", "New"],
      ["Basic Science", "12:30", "Quiz"],
    ]
      .map(
        (x) =>
          `<div><i>${icon("book", 19)}</i><span><b>${x[0]}</b><small>${x[1]}</small></span><em>${x[2]}</em></div>`,
      )
      .join(
        "",
      )}</article><article class="subject-progress"><span>SUBJECT PROGRESS</span>${[
      ["Maths", 82],
      ["English", 74],
      ["Science", 86],
    ]
      .map((x) => progress(x[0], x[1]))
      .join(
        "",
      )}</article><article class="deadline-panel"><span>UPCOMING DEADLINES</span><h3>2 assignments this week</h3><p><b>FRI</b>Fraction journal · Mathematics</p><p><b>MON</b>Reading response · English</p></article><article class="learner-tools"><a href="#/student/achievements">${icon("award", 20)}<span><b>8 achievements</b><small>One new this week</small></span></a><a href="#/student/offline-downloads">${icon("download", 20)}<span><b>26 offline lessons</b><small>Ready on this device</small></span></a><a href="#/student/ai-learning-buddy">${icon("spark", 20)}<span><b>Learning Buddy</b><small>Work through a sample</small></span></a></article></section>`,
    parentdash: `<section class="family-board"><article class="attendance-calendar"><header><span>AMARA · OCTOBER</span><h2>Attendance calendar</h2></header><div>${Array.from({ length: 20 }, (_, i) => `<i class="${[6, 14].includes(i) ? "away" : "present"}">${i + 1}</i>`).join("")}</div><p><b>96% attendance</b><span>18 present · 2 explained absences</span></p></article><article class="recent-results"><span>RECENT ASSESSMENTS</span>${[
      ["Mathematics", "82%", "Strong reasoning"],
      ["Basic Science", "86%", "Excellent inquiry"],
      ["English Studies", "74%", "Reading focus"],
    ]
      .map(
        (x) =>
          `<p><b>${x[0]}</b><strong>${x[1]}</strong><small>${x[2]}</small></p>`,
      )
      .join(
        "",
      )}</article><article class="family-message"><i>${icon("presentation", 20)}</i><span><small>MR. OKEKE · TODAY</small><b>Amara contributed confidently during our fractions activity.</b></span></article><article class="family-notice"><span>SCHOOL ANNOUNCEMENT</span><h3>Parent learning day · 6 November</h3><p>Practical ways to support reading and numeracy at home.</p></article></section>`,
    oversight: `<section class="oversight-board"><article class="viz-panel outcome-matrix"><header><span>LEARNING OUTCOMES</span><h2>School by subject</h2></header><div class="matrix"><b></b>${["Maths", "English", "Science"].map((x) => `<b>${x}</b>`).join("")}${schools.map((s, i) => `<strong>${s.name.split(" ")[0]}</strong>${[s.performance, s.performance + 3, s.performance - 2].map((v) => `<i style="--score:${v}%">${v}</i>`).join("")}`).join("")}</div></article><article class="viz-panel enrolment-donut"><header><span>ENROLMENT DISTRIBUTION</span><h2>1,482 learners</h2></header>${donut(58, "primary")}<p>858 primary · 624 secondary</p></article><article class="viz-panel infrastructure-bars"><header><span>INFRASTRUCTURE READINESS</span><h2>By school</h2></header>${schools.map((s) => progress(s.name, Math.round((s.devices / s.students) * 300), `${s.devices} devices`)).join("")}</article><article class="executive-preview"><span>EXECUTIVE REPORTING</span><h2>Term 1 system briefing</h2><p>Performance, attendance, enrolment and infrastructure signals—prepared as an aggregate preview.</p><button data-preview="true">Open report preview</button></article></section>`,
  };
  return supplements[kind] || "";
}

function studentGuide(kind) {
  const score = 78;
  const messages = {
    studentdash: [
      "Hi Amara! Ready for a bright day?",
      "You have three learning adventures today. Start with the one that feels right.",
      "rocket-launch",
    ],
    subjects: [
      "What would you like to learn, Amara?",
      "Pick a subject to see your lessons, activities and next small goal.",
      "books",
    ],
    lesson: [
      "Let’s learn this together, Amara.",
      "Take your time. You can pause, try an example and come back whenever you need to.",
      "pencil-simple",
    ],
    assignments: [
      "Amara, you have two tasks to finish.",
      "Do one step at a time. Your fraction journal is due first.",
      "notebook",
    ],
    studenttests: [
      "Amara, you have two upcoming tests.",
      "Your next test is Mathematics. A short practice today will help you feel ready.",
      "exam",
    ],
    progress:
      score >= 70
        ? [
            "You’re doing well, Amara!",
            `Your learning score is ${score}%. Keep practising and be proud of every step.`,
            "trophy",
          ]
        : [
            "Keep going, Amara. You can improve.",
            "Try one short lesson today and ask your teacher when you need help.",
            "plant",
          ],
    library: [
      "What will you discover today, Amara?",
      "Choose a story, a science idea or a fun number activity.",
      "book-open",
    ],
    studentai: [
      "Need a little help, Amara?",
      "Your Learning Buddy can explain one step at a time using easy words.",
      "robot",
    ],
    achievements: [
      "Look how far you’ve come, Amara!",
      "You earned eight badges. Every badge shows something new you can do.",
      "medal",
    ],
    studenttime: [
      "Here is your school day, Amara.",
      "Your next lesson is Mathematics at 9:20. You have time to get ready.",
      "clock-countdown",
    ],
    offline: [
      "Your lessons can travel with you, Amara.",
      "Twenty-six lessons are ready on this device, even when there is no internet.",
      "laptop",
    ],
  };
  const message = messages[kind];
  if (!message) return "";
  const motifs = [
    "pencil-simple",
    "pen-nib",
    "books",
    "laptop",
    "flask",
    "rocket-launch",
    "medal",
    "trophy",
  ];
  return `<section class="student-guide"><div class="student-guide-copy"><span>YOUR LEARNING SPACE</span><h2>${message[0]}</h2><p>${message[1]}</p></div><i class="student-guide-main">${icon(message[2], 34)}</i><div class="student-motifs" aria-hidden="true">${motifs.map((name) => icon(name, 22)).join("")}</div></section>`;
}

function personalizeStudentCopy(kind) {
  const set = (selector, text, html = false) => {
    const el = $(selector);
    if (!el) return;
    if (html) el.innerHTML = text;
    else el.textContent = text;
  };
  if (kind === "subjects") set(".panel-head h2", "Amara’s subjects");
  if (kind === "assignments") set(".panel-head h2", "Your tasks, Amara");
  if (kind === "studenttests") {
    set(".test-hero h2", "Amara, two tests are coming up.");
    set(
      ".test-hero p",
      "Mathematics is first. Try one short practice today and you will feel more ready.",
    );
    set(".test-hero>div:last-child b", "Your next test");
    document.querySelectorAll(".test-grid article>div i").forEach((el) => {
      el.outerHTML = icon("clock-countdown", 17);
    });
    document
      .querySelectorAll(".test-grid article small")
      .forEach(
        (el) => (el.textContent = "Ask your teacher if anything is unclear."),
      );
    document.querySelectorAll(".test-grid .preview-btn").forEach((el) => {
      el.childNodes[0].textContent = "See what to practise";
    });
  }
  if (kind === "progress") {
    set(".progress-hero h2", "You’re doing well, Amara!");
    set(
      ".progress-hero p",
      "Your score is 78%. Keep practising and be proud of every step you take.",
    );
    set(".progress-hero strong small", "your score");
  }
  if (kind === "library") {
    set(".library-hero h2", "Pick something fun, Amara.");
    set(
      ".library-hero p",
      "Read a story, watch a short science video or try a number activity.",
    );
  }
  if (kind === "studentai") {
    set(".buddy aside h2", "Let’s solve it together, Amara.");
    set(
      ".buddy aside>p",
      "We will use easy words and take one small step at a time.",
    );
  }
  if (kind === "achievements") {
    set(".achievement-hero h2", "Great work,<br>Amara!", true);
    set(".achievement-hero p", "You earned 8 badges this term.");
  }
  if (kind === "studenttime") set(".panel-head h2", "Amara’s Wednesday");
  if (kind === "offline") {
    set(".offline-hero h2", "Your lessons are ready, Amara.");
    set(
      ".offline-hero p",
      "You can open these lessons even when there is no internet.",
    );
  }
}

function renderKind(kind) {
  const s = currentSchool(),
    secondary = state.mode === "secondary",
    teacherWorkspace = location.hash.includes("/teacher/");
  const k = {
    executive: () =>
      `<div class="stats">${stat("Schools in view", "3", "1 planned")}${stat("Learners", fmt(total("students")), "6.8%")}${stat("Average attendance", "91.3%", "1.6%")}${stat("Learning pulse", "74.3", "3.1 pts")}</div><div class="grid two">${panel("Portfolio performance", "TERM-ON-TERM", `<div class="chart-area"><div class="chart-bars">${[54, 62, 58, 71, 68, 78, 74, 84].map((v, i) => `<i style="height:${v}%"><span>${["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"][i]}</span></i>`).join("")}</div></div><div class="legend"><span><i class="blue"></i>Learning engagement</span><span><i class="mint"></i>Attendance</span></div>`)}${panel("Leadership attention", "PRIORITISED", `<div class="alerts"><article class="alert warm"><b>12 devices awaiting checks</b><span>Umuomaikwu · ICT follow-up</span><em>Medium</em></article><article class="alert"><b>Attendance recovery</b><span>Basic 4 improved 4.2 points</span><em>Positive</em></article><article class="alert purple"><b>Curriculum coverage</b><span>3 classes below weekly target</span><em>Review</em></article></div>`)}</div><div class="school-strip">${schools.map((x) => schoolCard(x)).join("")}</div>`,
    schools: () =>
      `${panel("School network", "3 ILLUSTRATIVE PROFILES", `<div class="school-grid">${schools.map((x) => schoolCard(x, true)).join("")}</div>`)}${panel(
        "Portfolio comparison",
        "CONSISTENT DEMO RECORDS",
        table(
          ["School", "Learners", "Teachers", "Attendance", "Readiness"],
          schools.map((x) => [
            x.name,
            fmt(x.students),
            x.teachers,
            x.attendance + "%",
            x.devices > 100 ? "Strong" : "Building",
          ]),
        ),
      )}`,
    profile: () =>
      `<div class="profile-hero"><div><span>SELECTED SCHOOL</span><h2>${s.name}</h2><p>${s.type} · Imo State · Morning session</p><div class="chips"><i>School ID BG-${s.id.slice(0, 3).toUpperCase()}</i><i>Term 1 · 2026/27</i></div></div>${donut(s.attendance, "attendance")}</div><div class="stats">${stat("Learners", fmt(s.students), "4.1%")}${stat("Teachers", s.teachers, "2 added")}${stat("Managed devices", s.devices, "8 ready")}${stat("Performance index", s.performance, "2.4 pts")}</div><div class="grid two">${panel("Class distribution", "ENROLMENT", `<div class="hbars">${["Nursery", "Basic 1–2", "Basic 3–4", "Basic 5–6"].map((n, i) => progress(n, [42, 68, 76, 59][i], [74, 142, 158, 112][i] + " learners")).join("")}</div>`)}${panel("School readiness", "OPERATIONS", `<div class="checklist"><p><i>${icon("check", 17)}</i><span><b>Curriculum loaded</b>Primary national curriculum</span></p><p><i>${icon("check", 17)}</i><span><b>Class teachers confirmed</b>One designated teacher per primary class</span></p><p><i>${icon("alert", 17)}</i><span><b>Device service window</b>12 tablets scheduled</span></p></div>`)}</div>`,
    users: () =>
      `<div class="stats">${stat("Active profiles", "1,589", "4.8%")}${stat("Teachers & staff", "81", "3 added")}${stat("Parent links", "812", "72%")}${stat("Role groups", "9", "Reviewed")}</div><div class="grid two">${panel(
        "Role distribution",
        "PLATFORM ACCESS",
        `<div class="role-list">${[
          ["Learners", 1482, 76],
          ["Parents", 812, 45],
          ["Teachers", 81, 24],
          ["School leadership", 12, 10],
          ["BGDL support", 6, 6],
        ]
          .map((x) => progress(x[0], x[2], fmt(x[1])))
          .join("")}</div>`,
      )}${panel(
        "Access review",
        "ILLUSTRATIVE STATUS",
        table(
          ["Group", "Scope", "Review"],
          [
            ["School leaders", "Own school", "Current"],
            ["Teachers", "Assigned classes", "Current"],
            ["Parents", "Linked children", "Current"],
            ["Stakeholders", "Aggregate only", "Due 28 Oct"],
          ],
        ),
      )}</div>`,
    analytics: () =>
      `<div class="stats">${stat("Portfolio learners", "1,482", "6.8%")}${stat("Attendance", "91.3%", "1.6%")}${stat("Pass benchmark", "74.3%", "3.1 pts")}${stat("Device ratio", "1 : 4.8", "Improving")}</div>${panel("Schools compared", "TERM 1 · 2026/27", `<div class="comparison">${schools.map((x) => `<article><div><b>${x.name}</b><span>${x.type}</span></div>${donut(x.performance, "outcomes")} ${progress("Attendance", x.attendance)} ${progress("Device readiness", Math.round((x.devices / x.students) * 250))}</article>`).join("")}</div>`)}`,
    attendance: () =>
      `<div class="stats">${stat("Present today", fmt(Math.round(total("students") * 0.913)), "1.6%")}${stat("Portfolio rate", "91.3%", "Target 93%")}${stat("Follow-up signals", "18", "5 resolved")}${stat("Staff attendance", "96.4%", "0.8%")}</div><div class="grid two">${panel("Eight-week pattern", "AGGREGATE ONLY", `<div class="big-spark">${miniChart([87, 90, 89, 92, 91, 93, 92, 94])}</div><div class="axis"><span>Week 1</span><span>Week 8</span></div>`)}${panel("Patterns to review", "ILLUSTRATIVE SIGNALS", `<div class="alerts"><article class="alert warm"><b>Monday arrival pattern</b><span>14 learners across two schools</span><em>Review</em></article><article class="alert"><b>Basic 4 recovery</b><span>Up 4.2 points in three weeks</span><em>Positive</em></article><article class="alert purple"><b>Rainfall-day sensitivity</b><span>Directional pattern only</span><em>Explore</em></article></div>`)}</div>`,
    devices: () =>
      `<div class="stats">${stat("Managed tablets", fmt(total("devices")), "24 added")}${stat("Ready today", "368", "92%")}${stat("Pending sync", "17", "Illustrative")}${stat("Service checks", "12", "3 urgent")}</div><div class="grid device-grid">${panel("Fleet by school", "SHARED CLASSROOM ALLOCATION", schools.map((x) => `<div class="device-row"><span class="device-icon">${icon("tablet", 22)}</span><div><b>${x.name}</b><small>${x.devices} tablets · ${Math.round(x.devices * 0.92)} ready</small>${progress("Readiness", Math.round(((x.devices * 0.92) / x.devices) * 100))}</div></div>`).join(""))}${panel("Connectivity window", "LAST SAMPLE STATE", `<div class="network-orb"><span></span><b>2 / 3</b><small>schools connected</small></div><div class="sync-list"><p><i class="ok"></i>Ubakala <b>Synced 08:42</b></p><p><i class="warn"></i>Umuomaikwu <b>17 items queued</b></p><p><i class="ok"></i>Secondary Demo <b>Synced 08:39</b></p></div>`)}</div>`,
    insights: () =>
      `<div class="ai-banner"><span>${icon("spark", 30)}</span><div><small>ILLUSTRATIVE AI INSIGHT</small><h2>Three signals worth discussing this week</h2><p>Prewritten examples show how leadership support could be presented. No live AI analysis is running.</p></div></div><div class="insight-grid">${[
        [
          "Attendance momentum",
          "Basic 4 attendance at Ubakala has improved for three consecutive weeks.",
          "Positive signal",
          "mint",
        ],
        [
          "Curriculum pacing",
          "Three Mathematics classes are 8–12% behind the term plan.",
          "Review this week",
          "purple",
        ],
        [
          "Device readiness",
          "A service check before Thursday could protect the next shared-tablet session.",
          "Operational",
          "orange",
        ],
      ]
        .map(
          (x, i) =>
            `<article><span class="insight-no">0${i + 1}</span><i class="${x[3]}">${x[2]}</i><h3>${x[0]}</h3><p>${x[1]}</p>${button("View supporting pattern")}</article>`,
        )
        .join("")}</div>`,
    content: () =>
      `<div class="stats">${stat("Approved resources", "284", "18 new")}${stat("Assigned this term", "176", "62%")}${stat("Offline-ready", "239", "84%")}${stat("Awaiting review", "11", "Curriculum")}</div>${panel(
        "Curriculum collections",
        "APPROVED DEMO CATALOGUE",
        `<div class="resource-grid">${[
          ["Numeracy foundations", "Mathematics", "42 items", "blue"],
          ["Our living world", "Basic Science", "36 items", "green"],
          ["Reading for meaning", "English Studies", "58 items", "coral"],
          ["Nigerian people & places", "Social Studies", "31 items", "gold"],
        ]
          .map(
            (x) =>
              `<article class="resource ${x[3]}"><div>${icon("book", 22)}</div><small>${x[1]}</small><h3>${x[0]}</h3><span>${x[2]} · Offline-ready samples</span></article>`,
          )
          .join("")}</div>`,
      )}`,
    support: () =>
      `<div class="stats">${stat("Open requests", "14", "4 today")}${stat("Within target", "92%", "2.1%")}${stat("Planned connections", "6", "Preview")}${stat("Knowledge articles", "48", "5 new")}</div><div class="grid two">${panel(
        "Support queue",
        "FICTIONAL REQUESTS",
        table(
          ["Request", "School", "Priority", "Status"],
          [
            ["Tablet group not visible", "Ubakala", "Medium", "In review"],
            [
              "Timetable import question",
              "Secondary Demo",
              "Low",
              "Guidance sent",
            ],
            ["Two devices need checks", "Umuomaikwu", "High", "Assigned"],
            ["Parent link clarification", "Ubakala", "Low", "Open"],
          ],
        ),
      )}${panel(
        "Integration landscape",
        "CONCEPT STATUS",
        `<div class="integrations">${[
          ["SMS gateway", "Planned"],
          ["Learning records exchange", "Discovery"],
          ["National curriculum", "Mapped"],
          ["Identity provider", "Future"],
        ]
          .map(
            (x) =>
              `<p><i>${icon("link", 18)}</i><span><b>${x[0]}</b><small>No live connection in demo</small></span><em>${x[1]}</em></p>`,
          )
          .join("")}</div>`,
      )}</div>`,
    settings: () =>
      `<div class="settings-layout"><nav class="settings-nav"><b>Platform configuration</b>${["Tenant profile", "Academic structure", "Roles & permissions", "Security overview", "Audit trail", "Licensing preview"].map((x, i) => `<span class="${i === 0 ? "active" : ""}">${x}</span>`).join("")}</nav>${panel("Tenant profile", "DISPLAY-ONLY CONFIGURATION", `<div class="form-preview"><label>Platform name<input value="BlueLMS NextGen" disabled></label><label>Operating region<input value="Nigeria · West Africa/Lagos" disabled></label><label>School term<input value="Term 1 · 2026/27" disabled></label><label>Data classification<input value="Demonstration records only" disabled></label></div><div class="notice">Settings are shown to communicate intended control. Nothing is saved in this static demonstration.</div>${button("Save changes", true)}`)}</div>`,
    schooldash: () =>
      `<div class="school-welcome illustrated-hero"><div><span>WEDNESDAY · 21 OCTOBER</span><h2>Good morning, Mrs. Nwafor.</h2><p>${s.name} is ready for the school day.</p><div class="weather"><b>28°</b><span>Partly cloudy · Morning session</span></div></div>${illustration("school", "A connected BlueLMS school building ready for the day", "hero-art")}</div><div class="stats">${stat("Learners present", fmt(Math.round((s.students * s.attendance) / 100)), s.attendance + "%")}${stat("Staff on site", s.teachers - 1, `of ${s.teachers}`)}${stat("Classes today", "18", "2 practicals")}${stat("Open actions", "7", "3 priority")}</div><div class="grid two">${panel(
        "Today at school",
        "LIVE-DAY PREVIEW",
        `<div class="timeline">${[
          ["07:45", "Morning assembly", "Whole school"],
          ["09:20", "Basic 5 Mathematics", "Room B5"],
          ["11:00", "Device learning session", "ICT Lab"],
          ["13:30", "Staff curriculum review", "Meeting room"],
        ]
          .map(
            (x) =>
              `<p><b>${x[0]}</b><span><strong>${x[1]}</strong>${x[2]}</span></p>`,
          )
          .join("")}</div>`,
      )}${panel("Operational pulse", "DAILY READINESS", `<div class="pulse-grid">${donut(s.attendance, "attendance")} ${donut(92, "devices", "#16b6a3")}</div><div class="notice compact">12 tablets have a scheduled service check after classes.</div>`)}</div>`,
    pipeline: () =>
      `<div class="stats">${stat("Applications", "146", "18 new")}${stat("In review", "38", "This week")}${stat("Offers issued", "72", "49%")}${stat("Projected intake", "118", "81%")}</div>${panel(
        "2027 intake pipeline",
        "FICTIONAL APPLICATIONS",
        `<div class="kanban">${[
          ["Enquiry", 32, ["Ifeoma Obi", "Tunde Bello"]],
          ["Applied", 38, ["Chiamaka Eze", "Abdul Musa"]],
          ["Review", 24, ["Favour John", "Mariam Garba"]],
          ["Offered", 72, ["Emeka Okoro", "Aisha Lawal"]],
        ]
          .map(
            (x) =>
              `<div><header><b>${x[0]}</b><span>${x[1]}</span></header>${x[2].map((n) => `<article><strong>${n}</strong><small>${secondary ? "JSS 1" : "Basic 1"} · Demo record</small></article>`).join("")}</div>`,
          )
          .join("")}</div>`,
      )}`,
    students: () =>
      `<div class="stats">${stat("Enrolled learners", fmt(s.students), "4.1%")}${stat("Girls", fmt(Math.round(s.students * 0.51)), "51%")}${stat("Boys", fmt(Math.round(s.students * 0.49)), "49%")}${stat("Support plans", "18", "Reviewed")}</div>${panel("Student directory", "ROLE-APPROPRIATE PREVIEW", table(["Learner", "Class", "Linked guardian", "Status"], peopleRows))}`,
    staff: () =>
      `<div class="stats">${stat("Teaching staff", s.teachers, "2 added")}${stat("In school today", s.teachers - 1, "96%")}${stat("Class teachers", "12", "All assigned")}${stat("Development hours", "64", "This term")}</div>${panel(
        "Teaching team",
        "SAMPLE STAFF",
        `<div class="staff-grid">${[
          ["Ngozi Nwafor", "Headteacher", "NN"],
          ["Chinedu Okeke", "Class teacher · Basic 5A", "CO"],
          ["Fatima Bello", "Class teacher · Basic 4A", "FB"],
          ["Ikenna Eze", "Class teacher · Basic 6A", "IE"],
          ["Blessing Udo", "Class teacher · Nursery 2", "BU"],
          ["Musa Ibrahim", "ICT specialist · Shared classes", "MI"],
        ]
          .map(
            (x) =>
              `<article><div>${x[2]}</div><b>${x[0]}</b><span>${x[1]}</span><small>Available today</small></article>`,
          )
          .join("")}</div>`,
      )}`,
    classes: () =>
      teacherWorkspace
        ? `${panel(
            secondary ? "My class and subject groups" : "My class",
            "DESIGNATED CLASS TEACHER",
            `<div class="teacher-class-focus"><article><div class="class-ring">31</div><div><span>${secondary ? "DESIGNATED CLASS" : "PRIMARY CLASS OWNERSHIP"}</span><h3>${secondary ? "JSS 2A" : "Basic 5A"}</h3><p>${secondary ? "Chinedu Okeke is the designated class teacher and also teaches Mathematics to JSS 2A, JSS 3A and SSS 1A." : "Chinedu Okeke is the single class teacher responsible for daily attendance, classroom activities and core learning for these 31 pupils."}</p></div></article>${
              secondary
                ? table(
                    ["Subject group", "Role", "Learners", "Progress"],
                    [
                      ["JSS 2A Mathematics", "Subject teacher", "31", "72%"],
                      ["JSS 3A Mathematics", "Subject teacher", "27", "68%"],
                      ["SSS 1A Mathematics", "Subject teacher", "34", "74%"],
                    ],
                  )
                : table(
                    ["Responsibility", "Today", "Status"],
                    [
                      ["Daily attendance", "30 of 31 present", "Reviewed"],
                      ["Classroom activities", "3 planned", "Ready"],
                      ["Family follow-ups", "2 notes", "Review"],
                    ],
                  )
            }</div>`,
          )}`
        : `${panel(
            secondary ? "Secondary classes" : "Primary classes",
            "STRUCTURE & CLASS OWNERSHIP",
            `<div class="class-grid">${(secondary
              ? ["JSS 1A", "JSS 2A", "JSS 3A", "SSS 1A", "SSS 2A", "SSS 3A"]
              : [
                  "Nursery 2",
                  "Basic 1A",
                  "Basic 2A",
                  "Basic 3A",
                  "Basic 4A",
                  "Basic 5A",
                ]
            )
              .map((x, i) => {
                const teachers = secondary
                  ? [
                      "Fatima Bello",
                      "Chinedu Okeke",
                      "Ikenna Eze",
                      "Musa Ibrahim",
                      "Ngozi Umeh",
                      "Ada Nwosu",
                    ]
                  : [
                      "Blessing Udo",
                      "Ada Nwosu",
                      "Grace Eze",
                      "Tunde Bello",
                      "Fatima Bello",
                      "Chinedu Okeke",
                    ];
                return `<article><div class="class-ring">${[28, 31, 27, 34, 29, 32][i]}</div><h3>${x}</h3><span>${secondary ? "Class teacher" : "Sole class teacher"} · ${teachers[i]}</span>${progress("Term coverage", [62, 71, 68, 74, 66, 79][i])}</article>`;
              })
              .join("")}</div>`,
          )}`,
    calendar: () =>
      `<div class="calendar-layout">${panel("October 2026", "TERM 1", `<div class="calendar"><header>${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((x) => `<b>${x}</b>`).join("")}</header>${Array.from({ length: 35 }, (_, i) => `<span class="${i + 1 === 23 ? "today" : ""} ${[9, 17, 29].includes(i + 1) ? "event" : ""}">${i < 3 ? "" : i - 2}</span>`).join("")}</div>`)}${panel(
        "Upcoming milestones",
        "NEXT 30 DAYS",
        `<div class="events">${[
          ["23 OCT", "Inter-house quiz", "Academic"],
          ["29 OCT", "Mid-term review", "Leadership"],
          ["06 NOV", "Parent learning day", "Community"],
          ["13 NOV", "Continuous assessment", "Assessment"],
          ["27 NOV", "Cultural showcase", "Whole school"],
        ]
          .map(
            (x) =>
              `<article><b>${x[0]}</b><span><strong>${x[1]}</strong>${x[2]}</span></article>`,
          )
          .join("")}</div>`,
      )}</div>`,
    timetable: () =>
      `${panel("Weekly teaching timetable", "${secondary?JSS 2A:BASIC 5A} · DEMO PREVIEW", `<div class="timetable"><div></div>${["Mon", "Tue", "Wed", "Thu", "Fri"].map((x) => `<b>${x}</b>`).join("")}${["08:00", "09:00", "10:20", "11:40", "13:00"].map((t, r) => `<strong>${t}</strong>${["Mathematics", "English", "Basic Science", "Social Studies", "Creative Arts"].map((x, c) => `<span class="c${(r + c) % 4}">${x}<small>${r % 2 ? "Room " + (c + 1) : "Mr. Okeke"}</small></span>`).join("")}`).join("")}</div>`)}`,
    exams: () =>
      `<div class="stats">${stat("Assessments planned", "24", "Term 1")}${stat("Marking complete", "68%", "12.4%")}${stat("Results ready", "7 classes", "3 pending")}${stat("Average score", "74.3%", "3.1 pts")}</div><div class="grid two">${panel(
        "Assessment calendar",
        "NEXT WINDOWS",
        `<div class="exam-list">${[
          ["26 OCT", "Mathematics CA", "Basic 4–6", "Ready"],
          ["28 OCT", "English Studies CA", "Basic 4–6", "Ready"],
          ["03 NOV", "Basic Science project", "Basic 5", "Materials"],
          ["16 NOV", "End-of-term exams", "All classes", "Planning"],
        ]
          .map(
            (x) =>
              `<article><b>${x[0]}</b><span><strong>${x[1]}</strong>${x[2]}</span><em>${x[3]}</em></article>`,
          )
          .join("")}</div>`,
      )}${panel(
        "Performance spread",
        "ILLUSTRATIVE RESULTS",
        `<div class="score-bars">${[
          ["80–100", 28],
          ["70–79", 34],
          ["60–69", 22],
          ["50–59", 11],
          ["Below 50", 5],
        ]
          .map((x) => progress(x[0], x[1], x[1] + "%"))
          .join("")}</div>`,
      )}</div>`,
    assets: () =>
      `<div class="stats">${stat("Tracked assets", "624", "18 added")}${stat("Serviceable", "94%", "1.2%")}${stat("Open requests", "9", "3 priority")}${stat("Classrooms", "24", "22 ready")}</div>${panel(
        "Facilities & equipment",
        "SAMPLE REGISTER",
        table(
          ["Asset group", "Location", "Quantity", "Condition", "Next action"],
          [
            [
              "Shared tablets",
              "ICT / class sets",
              "128",
              "92% ready",
              "12 checks",
            ],
            [
              "Classroom displays",
              "Teaching rooms",
              "18",
              "Good",
              "2 calibration",
            ],
            [
              "Solar backup",
              "Admin block",
              "1 system",
              "Operational",
              "Review 04 Nov",
            ],
            [
              "Library furniture",
              "Learning centre",
              "64 items",
              "Good",
              "Routine check",
            ],
          ],
        ),
      )}`,
    messages: () =>
      `<div class="messages-layout"><div class="threads"><header><b>Conversations</b><span>Preview only</span></header>${[
        [
          "Headteacher’s Office",
          "Staff briefing moved to 2:30pm",
          "9:14",
          "HO",
        ],
        ["Mrs. Bello", "Amara showed strong progress…", "Yesterday", "FB"],
        ["ICT Support", "Device checks are scheduled…", "Mon", "IT"],
        ["Basic 5 Families", "Reminder: Mathematics materials…", "Fri", "B5"],
      ]
        .map(
          (x, i) =>
            `<article class="${i === 1 ? "active" : ""}"><div>${x[3]}</div><span><b>${x[0]}</b><small>${x[1]}</small></span><em>${x[2]}</em></article>`,
        )
        .join(
          "",
        )}</div><div class="conversation"><header><div>FB</div><span><b>Mrs. Fatima Bello</b><small>Basic 5 teacher · Demo conversation</small></span></header><div class="chat"><p class="them">Good afternoon. Amara showed strong progress in today’s reading exercise.<small>Yesterday · 15:42</small></p><p class="me">Thank you for the update. We’ll continue the reading practice at home.<small>Yesterday · 16:05</small></p><p class="them">Wonderful. The new library activity on Friday will also help reinforce it.<small>09:02</small></p></div><div class="message-disabled"><span>Messaging is not active in this demonstration.</span>${button("Send message", true)}</div></div></div>`,
    reports: () =>
      `<div class="report-hero"><div><span>REPORTING CATALOGUE</span><h2>From daily operations to board-ready insight.</h2><p>Every preview uses fictional, internally consistent demonstration data.</p></div><div class="report-stack"><i></i><i></i><b>Q1</b></div></div><div class="report-grid">${[
        ["Executive school summary", "Portfolio", "Updated 20 Oct"],
        ["Attendance & participation", "Operations", "Updated 21 Oct"],
        ["Learning outcomes", "Academic", "Updated 18 Oct"],
        ["Infrastructure brief", "Operations", "Updated 20 Oct"],
        ["Device readiness", "ICT", "Updated 21 Oct"],
        ["Term performance review", "Leadership", "Updated 17 Oct"],
      ]
        .map(
          (x) =>
            `<article><div>${icon("file", 24)}</div><small>${x[1]}</small><h3>${x[0]}</h3><span>${x[2]}</span>${button("Preview report")}</article>`,
        )
        .join("")}</div>`,
    teacherdash: () =>
      `<div class="teacher-hero"><div><span>WEDNESDAY · WEEK 7</span><h2>Your classroom, organised.</h2><p>Three classes today. One clear view of what matters next.</p></div><div class="next-class"><small>NEXT CLASS · 09:20</small><b>${secondary ? "JSS 2 Mathematics" : "Basic 5 Mathematics"}</b><span>Fractions in everyday life · Room B5</span>${button("Open lesson", true)}</div></div><div class="stats">${stat("Classes today", "3", "18 this week")}${stat("Learners", "94", "Across 3 classes")}${stat("Pending marking", "18", "6 due Fri")}${stat("Term coverage", "72%", "4.2%")}</div><div class="grid two">${panel(
        "Today’s rhythm",
        "MY TIMETABLE",
        `<div class="timeline">${[
          ["09:20", "Basic 5 Mathematics", "Fractions"],
          ["10:40", "Basic 6 Mathematics", "Measurement"],
          ["12:30", "Basic 4 Mathematics", "Number patterns"],
        ]
          .map(
            (x) =>
              `<p><b>${x[0]}</b><span><strong>${x[1]}</strong>${x[2]}</span></p>`,
          )
          .join("")}</div>`,
      )}${panel(
        "Marking queue",
        "PRIORITISED",
        `<div class="marking">${[
          ["Basic 5", "Fractions worksheet", "8 / 31"],
          ["Basic 6", "Measurement quiz", "21 / 29"],
          ["Basic 4", "Pattern journal", "28 / 34"],
        ]
          .map(
            (x) => `<p><span><b>${x[0]}</b>${x[1]}</span><em>${x[2]}</em></p>`,
          )
          .join("")}</div>`,
      )}</div>`,
    lessonplan: () =>
      `<div class="planner"><aside><span>LESSON PLAN</span><h2>Fractions in everyday life</h2><p>Basic 5 · Mathematics · 40 minutes</p>${illustration("planning", "A structured digital lesson plan with completed learning steps", "planner-art")}<div class="planner-meta"><b>Learning objective</b><span>Learners identify and compare common fractions using familiar objects.</span><b>Materials</b><span>Fraction cards, paper circles, board markers.</span></div></aside><main><div class="lesson-step"><i>01</i><div><b>Connect · 5 min</b><p>Invite learners to describe how a family might share two oranges equally.</p></div></div><div class="lesson-step"><i>02</i><div><b>Explore · 15 min</b><p>Pairs fold paper circles into halves, quarters and eighths, then compare the pieces.</p></div></div><div class="lesson-step"><i>03</i><div><b>Practise · 15 min</b><p>Learners match fraction cards to visual models and explain their reasoning.</p></div></div><div class="lesson-step"><i>04</i><div><b>Check · 5 min</b><p>Exit question: Which is greater, one half or two quarters? Explain.</p></div></div><div class="notice">Editable-looking lesson plans are display-only in this product-vision demo.</div></main></div>`,
    scheme: () =>
      `${panel(
        "Mathematics · Basic 5",
        "TERM 1 SCHEME OF WORK",
        `<div class="scheme">${[
          ["1–2", "Whole numbers", "Completed", 100],
          ["3–4", "Factors & multiples", "Completed", 100],
          ["5–7", "Fractions", "In progress", 68],
          ["8", "Decimals", "Next", 0],
          ["9–10", "Measurement", "Planned", 0],
          ["11", "Revision & assessment", "Planned", 0],
        ]
          .map(
            (x) =>
              `<article><span>${x[0]}</span><div><b>${x[1]}</b><small>${x[2]}</small>${progress("", x[3])}</div><em>${x[2]}</em></article>`,
          )
          .join("")}</div>`,
      )}`,
    assignments: () =>
      `<div class="stats">${stat("Active assignments", "8", "3 due")}${stat("Submitted", "82%", "5.4%")}${stat("Awaiting marking", "18", "6 priority")}${stat("Average score", "76%", "2.8 pts")}</div>${panel(
        "Assignment flow",
        "MY CLASSES",
        `<div class="assignment-list">${[
          [
            "Fractions at home",
            "Basic 5 · Mathematics",
            "Due 23 Oct",
            "23 / 31",
            "Marking",
          ],
          [
            "Measure your room",
            "Basic 6 · Mathematics",
            "Due 26 Oct",
            "18 / 29",
            "Collecting",
          ],
          [
            "Number pattern journal",
            "Basic 4 · Mathematics",
            "Due 28 Oct",
            "28 / 34",
            "Draft",
          ],
          [
            "Market-day word problems",
            "Basic 5 · Mathematics",
            "Completed",
            "31 / 31",
            "Graded",
          ],
        ]
          .map(
            (x) =>
              `<article><div class="subject-dot"></div><span><b>${x[0]}</b><small>${x[1]}</small></span><em>${x[2]}</em><strong>${x[3]}</strong><i>${x[4]}</i></article>`,
          )
          .join("")}</div>`,
      )}`,
    questions: () =>
      `<div class="stats">${stat("Question bank", "428", "32 new")}${stat("Ready tests", "12", "4 this term")}${stat("Objective items", "316", "74%")}${stat("Theory items", "112", "26%")}</div><div class="grid two">${panel(
        "Question collections",
        "CURRICULUM-ALIGNED PREVIEW",
        `<div class="question-sets">${[
          ["Fractions", "64 questions", "Basic 5"],
          ["Measurement", "52 questions", "Basic 6"],
          ["Number patterns", "38 questions", "Basic 4"],
          ["Geometry", "47 questions", "Basic 5–6"],
        ]
          .map(
            (x) =>
              `<article><div>${icon("book", 17)}</div><span><b>${x[0]}</b><small>${x[1]} · ${x[2]}</small></span><em>${icon("arrow", 16)}</em></article>`,
          )
          .join("")}</div>`,
      )}${panel("Assessment blueprint", "SAMPLE CONFIGURATION", `${progress("Recall", 30)}${progress("Understanding", 40)}${progress("Application", 25)}${progress("Reasoning", 5)}<div class="notice compact">CBT configuration is illustrative; no assessment engine is active.</div>`)}</div>`,
    register: () =>
      `${panel(
        "Basic 5A attendance",
        "WED 21 OCT · 31 LEARNERS",
        `<div class="register"><header><span>Learner</span><b>Present</b><b>Late</b><b>Absent</b></header>${peopleRows
          .concat([["Kamsi Uche"], ["Amina Yusuf"], ["Daniel Obi"]])
          .map(
            (x, i) =>
              `<p><span><i>${x[0]
                .split(" ")
                .map((n) => n[0])
                .join(
                  "",
                )}</i>${x[0]}</span><b class="${i === 4 ? "" : "selected"}">${icon("check", 14)}</b><b class="${i === 4 ? "selected late" : ""}">${icon("alert", 14)}</b><b>${icon("close", 14)}</b></p>`,
          )
          .join(
            "",
          )}</div><div class="notice">Attendance controls are visual examples and do not record data.</div>`,
      )}`,
    gradebook: () =>
      `${panel(
        "Basic 5A gradebook",
        "MATHEMATICS · TERM 1",
        `<div class="gradebook">${table(
          [
            "Learner",
            "CA 1 / 10",
            "Assignment / 10",
            "CA 2 / 20",
            "Exam / 60",
            "Total",
          ],
          [
            ["Amara Okafor", "8", "9", "17", "48", "82"],
            ["Somto Nwosu", "7", "8", "15", "44", "74"],
            ["Timi Balogun", "9", "8", "18", "51", "86"],
            ["Zainab Musa", "6", "7", "13", "41", "67"],
            ["David Eze", "8", "9", "16", "46", "79"],
          ],
        )}<div class="grade-summary"><span>Class average <b>77.6%</b></span><span>Highest <b>86%</b></span><span>Support signal <b>1 learner</b></span></div></div>`,
      )}`,
    ai: () =>
      `<div class="ai-workspace"><aside><small>ILLUSTRATIVE AI TEACHING ASSISTANT</small><h2>Plan with support.<br>Teach with judgement.</h2><p>This scripted example demonstrates a possible future workflow. No prompt is sent and no AI service is connected.</p>${illustration("ai", "A friendly geometric teaching assistant interface", "ai-art")}<div class="prompt-card"><b>Sample teacher prompt</b><p>“Create a 40-minute Basic 5 lesson on comparing fractions using locally familiar objects.”</p></div></aside><main><header><span>SAMPLE AI RESPONSE</span><i>Teacher review required</i></header><h3>Comparing fractions with market baskets</h3><p class="lead">A collaborative lesson using paper fruit cards and familiar sharing scenarios.</p><ol><li><b>Warm-up · 5 minutes</b><span>Ask: If two baskets hold the same number of oranges, what does half of each basket mean?</span></li><li><b>Model · 10 minutes</b><span>Show ½, ¼ and ¾ with illustrated basket cards.</span></li><li><b>Pair activity · 15 minutes</b><span>Learners arrange cards from smallest to largest and explain why.</span></li><li><b>Check · 10 minutes</b><span>Use three exit questions to surface misconceptions.</span></li></ol>${button("Use in lesson planner", true)}</main></div>`,
    studentdash: () =>
      `<div class="student-hero ${secondary ? "mature" : ""}"><div><span>${secondary ? "JSS 2A · TERM 1" : "BASIC 5A · TERM 1"}</span><h2>${secondary ? "Build momentum, Amara." : "Ready for a bright day, Amara?"}</h2><p>${secondary ? "Your next lesson starts at 09:20. Two assignments are due this week." : "You have three learning adventures today. Let’s begin!"}</p>${button("Continue learning", true)}</div><div class="hero-lesson"><small>UP NEXT</small><b>${secondary ? "Algebraic expressions" : "Fractions in everyday life"}</b><span>Mathematics · 18 minutes</span><div class="play">${icon("play", 38)}</div></div></div><div class="stats student-stats">${stat("Weekly goal", secondary ? "4 / 6" : "4 lessons", "On track")}${stat("Learning streak", "8 days", "Personal best")}${stat("Tasks due", "2", "This week")}${stat("Attendance", "96%", "Excellent")}</div><div class="grid two">${panel(
        "Today’s path",
        "PERSONALISED DEMO",
        `<div class="path-list">${[
          ["09:20", "Mathematics", "Continue", "72%"],
          ["10:40", "English Studies", "New lesson", "0%"],
          ["12:30", "Basic Science", "Quick quiz", "Ready"],
        ]
          .map(
            (x) =>
              `<article><b>${x[0]}</b><span><strong>${x[1]}</strong>${x[2]}</span><em>${x[3]}</em></article>`,
          )
          .join("")}</div>`,
      )}${panel("Growing this week", "YOUR PROGRESS", `${donut(78, "weekly goal")}<p class="encourage">${secondary ? "Strong consistency in Mathematics." : "You earned a Curious Thinker badge."}</p>`)}</div>`,
    subjects: () =>
      `${panel("My subjects", secondary ? "JSS 2A · 12 SUBJECTS" : "BASIC 5A · 9 SUBJECTS", `<div class="subject-grid">${(secondary ? ["Mathematics", "English Language", "Basic Science", "Social Studies", "Computer Studies", "Business Studies"] : ["Mathematics", "English Studies", "Basic Science", "Social Studies", "Creative Arts", "Computer Studies"]).map((x, i) => `<article class="sub${i}"><div>${icon(["calculator", "book", "flask", "school", "palette", "monitor"][i], 22)}</div><span><small>${[72, 68, 81, 64, 76, 88][i]}% complete</small><h3>${x}</h3><p>${["Mr. Okeke", "Mrs. Bello", "Mr. Eze", "Mrs. Musa", "Miss Udo", "Mr. Ibrahim"][i]}</p>${progress("", [72, 68, 81, 64, 76, 88][i])}</span></article>`).join("")}</div>`)}`,
    lesson: () =>
      `<div class="lesson-view"><aside><span>MATHEMATICS · LESSON 08</span><h2>${secondary ? "Understanding algebraic expressions" : "Fractions in everyday life"}</h2><p>${secondary ? "JSS 2 · 24 minutes" : "Basic 5 · 18 minutes"}</p><nav><b>In this lesson</b><a class="active">1. Let’s begin</a><a>2. See it clearly</a><a>3. Try together</a><a>4. Quick check</a></nav><div class="offline-badge">${icon("download", 17)} Available offline <small>Illustrative state</small></div></aside><main><span class="lesson-kicker">01 · LET’S BEGIN</span><h3>${secondary ? "Letters can stand for numbers." : "Sharing can help us understand fractions."}</h3><p class="lesson-lead">${secondary ? "An expression combines numbers, letters and operations. You already use this idea whenever you describe an unknown amount." : "Imagine sharing two oranges equally with a friend. Each person receives one of two equal parts—a half."}</p><div class="lesson-visual"><div class="fruit">${secondary ? "3x + 4" : "½"}</div><div><small>KEY IDEA</small><b>${secondary ? "A variable represents a value that can change." : "Equal parts make fair fractions."}</b><p>${secondary ? "In 3x + 4, x is the variable and 3 is its coefficient." : "Two halves make one whole. Four quarters also make one whole."}</p></div></div><div class="lesson-question"><small>THINK ABOUT IT</small><p>${secondary ? "If x = 2, what is the value of 3x + 4?" : "Which is larger: one half or one quarter?"}</p>${["A", "B", "C"].map((x, i) => `<button data-preview="true"><i>${x}</i>${secondary ? [6, 10, 12][i] : ["One half", "One quarter", "They are equal"][i]}</button>`).join("")}</div></main></div>`,
    studenttests: () =>
      `<div class="test-hero"><div><span>ASSESSMENT CENTRE</span><h2>Know what’s ahead.</h2><p>Sample schedules and readiness states. No test can be started or submitted in this demo.</p></div><div><b>Next assessment</b><strong>Mathematics CA</strong><span>26 October · 30 minutes</span></div></div><div class="test-grid">${[
        [
          "Mathematics CA",
          "26 Oct · 09:00",
          "20 questions",
          "Ready",
          "#5b73ea",
        ],
        [
          "English Language CA",
          "28 Oct · 10:20",
          "Reading + 15 questions",
          "Scheduled",
          "#ff8168",
        ],
        [
          "Basic Science project",
          "03 Nov",
          "Group submission",
          "In progress",
          "#17b59d",
        ],
      ]
        .map(
          (x) =>
            `<article style="--test:${x[4]}"><span>${x[3]}</span><h3>${x[0]}</h3><p>${x[1]}</p><div><i>◷</i>${x[2]}</div><small>Offline eligibility: illustrative only</small>${button("View instructions")}</article>`,
        )
        .join("")}</div>`,
    progress: () =>
      `<div class="progress-hero"><div><span>${secondary ? "JSS 2A" : "BASIC 5A"} · TERM 1</span><h2>Progress that tells a story.</h2><p>Keep building on steady effort in Mathematics and Basic Science.</p></div><strong>78<small>average</small></strong></div><div class="stats">${stat("Term average", "78%", "4 pts")}${stat("Best subject", "Computer Studies", "88%")}${stat("Attendance", "96%", "Excellent")}${stat("Teacher feedback", "6 notes", "2 new")}</div><div class="grid two">${panel(
        "Subject performance",
        "CURRENT TERM",
        `<div class="score-bars">${[
          ["Mathematics", 82],
          ["English Studies", 74],
          ["Basic Science", 86],
          ["Social Studies", 71],
          ["Computer Studies", 88],
        ]
          .map((x) => progress(x[0], x[1]))
          .join("")}</div>`,
      )}${panel("Teacher note", "MRS. BELLO · 19 OCT", `<blockquote>“Amara explains her reasoning clearly and works well with others. More independent reading will help strengthen her written answers.”</blockquote><div class="next-step"><b>Next focus</b><span>Read for 15 minutes on four days this week.</span></div>`)}</div>`,
    library: () =>
      `<div class="library-hero"><span>LEARNING LIBRARY</span><h2>Learn wherever you are.</h2><p>Curriculum resources designed to be clear, relevant and available offline.</p><div class="library-search">${icon("search", 18)} <span>Search resources</span><small>Visual only</small></div></div><div class="resource-grid">${[
        ["Fraction picture book", "Mathematics", "12 pages", "blue"],
        ["The River Niger", "Social Studies", "8 min read", "green"],
        ["Plants around us", "Basic Science", "Video · 6 min", "coral"],
        ["Reading practice pack", "English Studies", "18 pages", "gold"],
        ["Keyboard skills", "Computer Studies", "Interactive preview", "blue"],
        ["Our cultural patterns", "Creative Arts", "Gallery", "coral"],
      ]
        .map(
          (x) =>
            `<article class="resource ${x[3]}"><div>${icon("book", 22)}</div><small>${x[1]}</small><h3>${x[0]}</h3><span>${x[2]} · Offline sample</span></article>`,
        )
        .join("")}</div>`,
    studentai: () =>
      `<div class="buddy"><aside><div class="buddy-face">${icon("spark", 28)}</div><span>ILLUSTRATIVE LEARNING BUDDY</span><h2>Let’s work it out together.</h2><p>This is a scripted, age-appropriate example. It cannot receive messages or generate live answers.</p><div class="safety-note">Learning support should guide thinking—not simply give answers.</div></aside><main><p class="learner">I have 12 mangoes and give one quarter to my friend. How many do I give away?</p><p class="buddy-msg"><i>${icon("spark", 18)}</i><span><b>Let’s take it one step at a time.</b>One quarter means dividing the whole into four equal groups. What is 12 ÷ 4?</span></p><p class="learner small">It is 3.</p><p class="buddy-msg"><i>${icon("spark", 18)}</i><span><b>Exactly.</b>So one quarter of 12 mangoes is 3 mangoes. You can check: four groups of 3 make 12.</span></p><div class="worked"><span>12 ÷ 4 = 3</span><small>One quarter of 12 is 3</small></div><div class="fake-input">Ask about your lesson… <small>Scripted demo only</small></div></main></div>`,
    achievements: () =>
      `<div class="achievement-hero illustrated-hero"><div><span>YOUR LEARNING JOURNEY</span><h2>Small steps.<br>Bright progress.</h2><p>8 milestones earned this term.</p></div>${illustration("achievement", "A BlueLMS achievement medallion celebrating learning progress", "achievement-art")}</div><div class="badge-grid">${[
        ["Curious Thinker", "Asked thoughtful questions", "spark", "earned"],
        [
          "Number Navigator",
          "Completed 10 maths lessons",
          "calculator",
          "earned",
        ],
        ["Reading Streak", "Read on 7 consecutive days", "book", "earned"],
        ["Team Player", "Completed a group project", "users", "earned"],
        [
          "Science Explorer",
          "Complete two more experiments",
          "flask",
          "locked",
        ],
        ["Perfect Week", "Attend every day this week", "check", "locked"],
      ]
        .map(
          (x) =>
            `<article class="${x[3]}"><div>${icon(x[2], 25)}</div><h3>${x[0]}</h3><p>${x[1]}</p><span>${x[3] === "earned" ? "Earned" : "In progress"}</span></article>`,
        )
        .join("")}</div>`,
    studenttime: () =>
      `<div class="day-tabs">${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((x, i) => `<button class="${i === 2 ? "active" : ""}" data-preview="true">${x}<small>${19 + i} Oct</small></button>`).join("")}</div>${panel(
        "Wednesday’s learning",
        "21 OCTOBER",
        `<div class="student-schedule">${[
          ["08:00", "Assembly", "Whole school", "#7c68ee"],
          ["09:20", "Mathematics", "Fractions in everyday life", "#4c75e8"],
          ["10:20", "Break", "Courtyard", "#16b49f"],
          ["10:40", "English Studies", "Reading for meaning", "#ff7b63"],
          ["11:40", "Basic Science", "How plants grow", "#f4b944"],
          ["12:30", "Lunch", "Dining hall", "#16b49f"],
          ["13:00", "Creative Arts", "Patterns around us", "#e45ea5"],
        ]
          .map(
            (x) =>
              `<article style="--event:${x[3]}"><b>${x[0]}</b><span><strong>${x[1]}</strong>${x[2]}</span></article>`,
          )
          .join("")}</div>`,
      )}`,
    offline: () =>
      `<div class="offline-hero illustrated-hero">${illustration("offline", "A tablet receiving offline lessons and synchronising safely", "offline-art")}<div><span>OFFLINE LEARNING PREVIEW</span><h2>Learning that travels with you.</h2><p>These static states illustrate intended future downloads and syncing. No offline engine is active.</p></div><div class="storage"><small>DEVICE STORAGE</small><b>1.8 GB <span>of 16 GB used</span></b>${progress("", 11)}</div></div><div class="grid two">${panel(
        "Available offline",
        "ON THIS DEMO DEVICE",
        `<div class="download-list">${[
          ["Mathematics · Term 1", "12 lessons", "124 MB", "Ready"],
          ["English Studies · Term 1", "10 lessons", "98 MB", "Ready"],
          ["Basic Science · Plants", "4 lessons", "62 MB", "Ready"],
        ]
          .map(
            (x) =>
              `<article><div>${icon("check", 17)}</div><span><b>${x[0]}</b><small>${x[1]} · ${x[2]}</small></span><em>${x[3]}</em></article>`,
          )
          .join("")}</div>`,
      )}${panel(
        "Sync queue",
        "ILLUSTRATIVE STATE",
        `<div class="sync-visual"><i>${icon("refresh", 27)}</i><b>3 items waiting</b><span>Last sample sync · Today 08:42</span></div>${[
          ["Lesson progress", "2 updates"],
          ["Assignment draft", "1 item"],
          ["Reading activity", "Ready to sync"],
        ]
          .map(
            (x) =>
              `<div class="sync-item"><span>${x[0]}</span><b>${x[1]}</b></div>`,
          )
          .join("")}`,
      )}</div>`,
    parentdash: () =>
      `<div class="parent-hero illustrated-hero"><div><span>FAMILY OVERVIEW</span><h2>Good afternoon, Chidi.</h2><p>A simple view of how Amara and Kene are doing at school.</p></div>${illustration("family", "A family connected to their school through BlueLMS", "family-art")}</div><div class="children-grid">${[
        ["Amara Okafor", "Basic 5A", "96% attendance", "78% average", "AO"],
        ["Kene Okafor", "Basic 2A", "94% attendance", "Steady progress", "KO"],
      ]
        .map(
          (x, i) =>
            `<article><div class="child-top"><i>${x[4]}</i><span><b>${x[0]}</b><small>${x[1]} · ${s.name}</small></span><em>${i ? "1 update" : "2 updates"}</em></div><div class="child-metrics"><span><small>Attendance</small><b>${x[2]}</b></span><span><small>Learning</small><b>${x[3]}</b></span></div><p>${i ? "Kene completed all reading activities this week." : "New Mathematics feedback from Mr. Okeke."}</p></article>`,
        )
        .join("")}</div><div class="grid two">${panel(
        "Family calendar",
        "NEXT 14 DAYS",
        `<div class="events compact">${[
          ["23 OCT", "Inter-house quiz", "Amara"],
          ["29 OCT", "Mid-term review", "Both children"],
          ["06 NOV", "Parent learning day", "Family"],
        ]
          .map(
            (x) =>
              `<article><b>${x[0]}</b><span><strong>${x[1]}</strong>${x[2]}</span></article>`,
          )
          .join("")}</div>`,
      )}${panel("Latest school notice", "TODAY · 08:10", `<blockquote>“Friday’s closing time will remain 2:00pm. Please ensure children bring their reading folders.”</blockquote><small class="signed">Headteacher’s Office · Demo announcement</small>`)}</div>`,
    children: () =>
      `<div class="profile-switch"><button class="active" data-preview="true"><i>AO</i><span><b>Amara Okafor</b><small>Basic 5A</small></span></button><button data-preview="true"><i>KO</i><span><b>Kene Okafor</b><small>Basic 2A</small></span></button></div><div class="child-profile"><aside><div class="avatar-xl">AO</div><h2>Amara Okafor</h2><p>Basic 5A · ${s.name}</p><span>Linked to Chidi Okafor</span></aside><main><div class="stats">${stat("Attendance", "96%", "Excellent")}${stat("Term average", "78%", "4 pts")}${stat("Assignments", "14 / 16", "This term")}</div>${panel("Learning snapshot", "TEACHER-VERIFIED DEMO", `${progress("Mathematics", 82)}${progress("English Studies", 74)}${progress("Basic Science", 86)}<blockquote>“Amara explains her thinking clearly and contributes positively in class.”</blockquote>`)}</main></div>`,
    announcements: () =>
      `<div class="announcement-grid">${[
        [
          "Priority",
          "Friday closing time",
          "School closes at the usual 2:00pm. Please send reading folders with all learners.",
          "Today · Headteacher’s Office",
          "priority",
        ],
        [
          "Academic",
          "Inter-house quiz",
          "The term quiz takes place on Friday morning. Families are welcome from 10:00am.",
          "Yesterday · Academic Office",
          "",
        ],
        [
          "Community",
          "Parent learning day",
          "Join teachers on 6 November for practical ways to support reading and numeracy at home.",
          "19 Oct · School Office",
          "",
        ],
        [
          "Health",
          "Water bottle reminder",
          "Please ensure every child comes with a labelled reusable water bottle.",
          "16 Oct · School Nurse",
          "",
        ],
      ]
        .map(
          (x) =>
            `<article class="${x[4]}"><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><small>${x[3]}</small></article>`,
        )
        .join("")}</div>`,
    oversight: () =>
      `<div class="oversight-hero"><div><span>AUTHORISED AGGREGATE VIEW</span><h2>Three schools.<br>One clear picture.</h2><p>No private learner records are shown in this workspace.</p></div><div class="map-dots"><i></i><i></i><i></i><span>Imo State<br>illustrative footprint</span></div></div><div class="stats">${stat("Schools", "3", "2 primary · 1 secondary")}${stat("Learners", "1,482", "6.8%")}${stat("Attendance", "91.3%", "1.6%")}${stat("Learning benchmark", "74.3%", "3.1 pts")}</div><div class="grid two">${panel("System momentum", "TERM-ON-TERM", `<div class="big-spark">${miniChart([61, 64, 67, 66, 71, 73, 74, 78])}</div><div class="axis"><span>Term 1 2025</span><span>Term 1 2026</span></div>`)}${panel("Briefing notes", "ILLUSTRATIVE HIGHLIGHTS", `<div class="checklist"><p><i>${icon("trend", 17)}</i><span><b>Enrolment growth</b>6.8% across the portfolio</span></p><p><i>${icon("trend", 17)}</i><span><b>Attendance recovery</b>1.6 points term-on-term</span></p><p><i>${icon("alert", 17)}</i><span><b>Infrastructure</b>12 devices due for checks</span></p></div>`)}</div>`,
    enrolment: () =>
      `<div class="stats">${stat("Total enrolment", "1,482", "6.8%")}${stat("Primary", "858", "58%")}${stat("Secondary", "624", "42%")}${stat("Girls", "756", "51%")}</div><div class="grid two">${panel("Five-term enrolment", "AGGREGATE TREND", `<div class="big-spark">${miniChart([1180, 1244, 1308, 1387, 1482], "#12aa98")}</div><div class="axis"><span>2025 T1</span><span>2026 T1</span></div>`)}${panel(
        "Current level mix",
        "2026/27",
        `<div class="hbars">${[
          ["Nursery", 12],
          ["Basic 1–3", 28],
          ["Basic 4–6", 18],
          ["JSS 1–3", 24],
          ["SSS 1–3", 18],
        ]
          .map((x) => progress(x[0], x[1], x[1] + "%"))
          .join("")}</div>`,
      )}</div>${panel(
        "School contribution",
        "AGGREGATE ONLY",
        table(
          ["School", "Type", "Enrolment", "Share", "Trend"],
          schools.map((x) => [
            x.name,
            x.type,
            fmt(x.students),
            Math.round((x.students / total("students")) * 100) + "%",
            "Growing",
          ]),
        ),
      )}`,
    outcomes: () =>
      `<div class="stats">${stat("Learning benchmark", "74.3%", "3.1 pts")}${stat("Literacy", "76.8%", "2.7 pts")}${stat("Numeracy", "72.4%", "3.8 pts")}${stat("Learners improving", "68%", "5 pts")}</div>${panel("Outcome comparison", "AGGREGATE SCHOOL DATA", `<div class="outcome-chart">${schools.map((x, i) => `<article><span>${x.name}</span><div><i style="width:${x.performance}%"></i><b>${x.performance}%</b></div><small>${["+4.2", "+2.8", "+2.1"][i]} points term-on-term</small></article>`).join("")}</div>`)}<div class="grid two">${panel("Subject lens", "PORTFOLIO AVERAGE", `${progress("English / Literacy", 77)}${progress("Mathematics / Numeracy", 72)}${progress("Basic Science", 75)}${progress("Social Studies", 73)}`)}${panel("Interpretation note", "RESPONSIBLE USE", `<p class="body-copy">Aggregate results are one signal among many. Future production reporting should include cohort context, assessment quality and appropriate data-governance review.</p><div class="notice compact">No individual pupil detail is exposed here.</div>`)}</div>`,
  };
  const content = (k[kind] || k.executive)() + dashboardSupplement(kind);
  return route().ws?.id === "student" ? studentGuide(kind) + content : content;
}

function schoolCard(x, large = false) {
  return `<article class="school-card ${large ? "large" : ""}"><div class="school-symbol">${x.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join(
      "",
    )}</div><div><small>${x.type}</small><h3>${x.name}</h3></div><span>${x.attendance}%<small>attendance</small></span>${large ? `<footer><b>${fmt(x.students)} learners</b><b>${x.teachers} teachers</b><b>${x.devices} devices</b></footer>` : ""}</article>`;
}
function presentationArt(kind, label) {
  const art = {
    challenge: `<svg viewBox="0 0 640 460"><rect class="ill-surface" x="54" y="62" width="532" height="336" rx="42"/><path class="ill-line dash" d="M178 160 320 232 462 150M180 302l140-70 142 78"/><g class="ill-node"><rect x="82" y="112" width="192" height="102" rx="24"/><path d="M114 145h58M114 168h92"/><circle cx="231" cy="145" r="14"/></g><g class="ill-node"><rect x="365" y="102" width="192" height="102" rx="24"/><path d="M399 141h121M399 166h78"/><circle cx="512" cy="168" r="13"/></g><g class="ill-node"><rect x="84" y="264" width="192" height="102" rx="24"/><path d="M118 300h56M118 325h119"/><circle cx="232" cy="300" r="13"/></g><g class="ill-node"><rect x="364" y="270" width="192" height="102" rx="24"/><path d="M398 306h118M398 331h75"/><circle cx="512" cy="330" r="13"/></g><circle class="ill-blue" cx="320" cy="232" r="56"/><path class="ill-white-stroke" d="M320 199v45M320 263h.1"/></svg>`,
    solution: `<svg viewBox="0 0 640 460"><circle class="ill-pale" cx="320" cy="230" r="178"/><circle class="ill-white" cx="320" cy="230" r="112"/><path class="ill-blue" d="m320 145 25 22 33-4 7 32 25 22-19 27 7 33-33 10-19 28-26-18-27 18-19-28-32-10 7-33-19-27 25-22 7-32 33 4z"/><circle class="ill-white" cx="320" cy="230" r="48"/><path class="ill-navy-stroke" d="m300 230 14 14 29-31"/><g class="ill-node"><rect x="52" y="95" width="150" height="68" rx="18"/><path d="M78 129h95"/></g><g class="ill-node"><rect x="438" y="95" width="150" height="68" rx="18"/><path d="M464 129h95"/></g><g class="ill-node"><rect x="52" y="300" width="150" height="68" rx="18"/><path d="M78 334h95"/></g><g class="ill-node"><rect x="438" y="300" width="150" height="68" rx="18"/><path d="M464 334h95"/></g><path class="ill-blue-stroke dash" d="M202 129 260 186M438 129l-58 57M202 334l58-57M438 334l-58-57"/></svg>`,
    capabilities: `<svg viewBox="0 0 640 460"><rect class="ill-white" x="94" y="54" width="452" height="348" rx="34"/><rect class="ill-navy" x="126" y="86" width="388" height="70" rx="18"/><rect class="ill-blue" x="151" y="109" width="122" height="22" rx="11"/><circle class="ill-mint" cx="474" cy="121" r="15"/><rect class="ill-pale" x="126" y="182" width="178" height="84" rx="18"/><rect class="ill-pale" x="336" y="182" width="178" height="84" rx="18"/><rect class="ill-pale" x="126" y="292" width="388" height="78" rx="18"/><path class="ill-blue-stroke" d="M157 238l28-28 25 17 34-31 29 25M365 238v-24M401 238v-40M437 238v-18M473 238v-52M158 337h62l32-20 43 23 54-34 46 17 72-41"/></svg>`,
  };
  return `<div class="illustration presentation-art" role="img" aria-label="${label}">${art[kind]}</div>`;
}
const presentationSlides = [
  {
    kicker: "INTRODUCING BLUELMS",
    title: "One learning platform. Every school day.",
    copy: "A connected digital experience for learning, teaching, school operations, families and responsible oversight.",
    layout: "intro",
    body: `<div class="presentation-ecosystem">${illustration("ecosystem", "BlueLMS connecting every school experience")}</div>`,
  },
  {
    kicker: "THE CHALLENGE",
    title: "Schools generate activity everywhere—but insight lives nowhere.",
    copy: "Disconnected records, repeated manual work and delayed visibility make it harder for teams to support learners at the right moment.",
    layout: "challenge",
    body: `${presentationArt("challenge", "Disconnected school tools and records converging on a shared need")}<div class="story-points"><span><b>01</b>Fragmented records</span><span><b>02</b>Manual coordination</span><span><b>03</b>Late insight</span></div>`,
  },
  {
    kicker: "THE BLUELMS SOLUTION",
    title: "Turn every school day into shared momentum.",
    copy: "BlueLMS unifies daily workflows around one trusted operating picture—while giving every role a focused, useful experience.",
    layout: "solution",
    body: `${presentationArt("solution", "A unified BlueLMS platform connecting school experiences")}<div class="solution-proof"><b>ONE PLATFORM</b><span>Shared context</span><i></i><span>Role-specific clarity</span><i></i><span>Better decisions</span></div>`,
  },
  {
    kicker: "ONE PLATFORM, SIX EXPERIENCES",
    title: "Built around people—not software modules.",
    copy: "Six purpose-built workspaces keep each audience focused while the platform keeps the institution connected.",
    layout: "workspaces",
    body: `<div class="workspace-orbit"><div class="orbit-centre"><b>BlueLMS</b><span>59 connected screens</span></div>${workspaces.map((w, i) => `<div class="orbit-workspace ow${i}"><i>${icon(w.icon, 23)}</i><span><b>${w.label}</b><small>${w.audience}</small></span></div>`).join("")}</div>`,
  },
  {
    kicker: "WHAT MAKES BLUELMS POWERFUL",
    title: "Useful at every level. Coherent as a whole.",
    copy: "BlueLMS connects the moments that shape performance—from lesson preparation to portfolio decisions.",
    layout: "capabilities",
    body: `${presentationArt("capabilities", "A BlueLMS dashboard turning school activity into coordinated insight")}<div class="capability-ribbon"><span><i>${icon("book", 20)}</i>Learning</span><span><i>${icon("spark", 20)}</i>Teaching</span><span><i>${icon("school", 20)}</i>Operations</span><span><i>${icon("chart", 20)}</i>Insight</span></div>`,
  },
  {
    kicker: "EXPERIENCE BLUELMS",
    title: "See the connected school experience for yourself.",
    copy: "Scan the code to explore independently on your device, or enter Demo Mode with us now.",
    layout: "invite",
    body: "",
  },
];
function publicDemoUrl() {
  try {
    const u = new URL(window.BLUELMS_CONFIG?.publicUrl || "");
    return ["localhost", "127.0.0.1", "0.0.0.0"].includes(u.hostname)
      ? ""
      : u.href.replace(/\/$/, "");
  } catch {
    return "";
  }
}
function audienceDemoUrl() {
  const base = publicDemoUrl();
  return base ? `${base}/#/demo` : "";
}
function qrInvite() {
  const url = audienceDemoUrl();
  if (!url || typeof qrcode !== "function")
    return `<div class="qr-setup"><i>${icon("link", 32)}</i><b>Public demo link not configured</b><span>Publish the site and set <code>BLUELMS_CONFIG.publicUrl</code> to create the audience QR code.</span></div>`;
  const qr = qrcode(0, "M");
  qr.addData(url);
  qr.make();
  return `<div class="qr-live"><div class="qr-code" role="img" aria-label="QR code for ${url}">${qr.createSvgTag(7, 4)}</div><div><span>SCAN TO EXPLORE</span><a href="${url}">${url}</a><p>Open the same fictional BlueLMS product demo on your phone, tablet or laptop.</p><button id="copyDemoLink">${icon("link", 17)} Copy demo link</button></div></div>`;
}
function presentation(slide) {
  state.presentationSlide = slide;
  const s = presentationSlides[slide];
  const final = slide === 5;
  return `<main class="presentation slide-${s.layout}" data-slide="${slide + 1}"><header><a href="#/presentation/1" class="brand"><div class="brand-mark light"><i></i><i></i><i></i></div><div><b>BlueLMS</b><span>Management presentation</span></div></a><div class="presentation-tools"><span>${String(slide + 1).padStart(2, "0")} / 06</span><button id="fullscreenPresentation" aria-label="Enter full-screen presentation">${icon("monitor", 18)} <em>Full screen</em></button></div></header><section class="presentation-stage"><div class="presentation-copy"><span>${s.kicker}</span><h1>${s.title}</h1><p>${s.copy}</p>${final ? `<a class="enter-demo" href="#/demo">Enter Demo Mode ${icon("arrow", 19)}</a>` : ""}</div><div class="presentation-visual">${final ? qrInvite() : s.body}</div></section><footer><nav aria-label="Presentation sections">${presentationSlides.map((x, i) => `<a href="#/presentation/${i + 1}" class="${i === slide ? "active" : ""}" aria-label="${x.kicker}"><i></i><span>${x.kicker}</span></a>`).join("")}</nav><div><a class="slide-control ${slide === 0 ? "disabled" : ""}" href="#/presentation/${Math.max(1, slide)}" aria-label="Previous section">${icon("left", 18)}</a><a class="slide-control ${final ? "disabled" : ""}" href="#/presentation/${Math.min(6, slide + 2)}" aria-label="Next section">${icon("arrow", 18)}</a></div></footer><div class="toast" id="toast">Link copied.</div></main>`;
}
function welcome() {
  return `<main class="welcome"><nav><div class="brand"><div class="brand-mark"><i></i><i></i><i></i></div><div><b>BlueLMS</b><span>by Blue Giraffe Development</span></div></div>${demoTag("Product vision demo")}</nav><section class="welcome-hero"><div><span class="overline">BUILT FOR THE WAY SCHOOLS REALLY WORK</span><h1>One learning platform.<br><em>Every school day.</em></h1><p>Explore a connected vision for learning, teaching, school operations and responsible oversight—designed for Nigerian schools.</p><div class="welcome-actions"><a href="#/bgdl/executive-overview">Enter the experience <b>${icon("arrow", 18)}</b></a><button id="openIndex">View 59-screen index</button></div><small>All people, records and statistics are fictional demonstration data.</small></div><div class="welcome-illustration">${illustration("ecosystem", "BlueLMS connecting schools, teaching, learning and management")}</div></section><section class="workspace-launch"><header><span>EXPLORE BY WORKSPACE</span><h2>Six perspectives. One connected platform.</h2></header><div>${workspaces.map((w, i) => `<a href="#/${w.id}/${w.pages[0].path}" class="launch-card ${w.tone}"><span>0${i + 1}</span><i>${icon(w.icon, 22)}</i><h3>${w.label}</h3><p>${w.audience}</p><b>Explore workspace ${icon("arrow", 16)}</b></a>`).join("")}</div></section><footer><span>BlueLMS NextGen · Management demonstration · October 2026</span><b>Built by BGDL</b></footer></main>`;
}
function shell(ws, page) {
  const visiblePages = ws.pages.filter((p) =>
    ws.id === "school"
      ? true
      : ws.id === "bgdl"
        ? state.bgdlRole === "super" ||
          [
            "executive",
            "schools",
            "profile",
            "users",
            "attendance",
            "devices",
            "content",
            "support",
          ].includes(p.kind)
        : true,
  );
  return `<div class="app-shell tone-${ws.tone}"><aside class="sidebar ${state.sidebar ? "collapsed" : ""}"><div class="side-brand"><a href="#/" class="brand"><div class="brand-mark light"><i></i><i></i><i></i></div><div><b>BlueLMS</b><span>NextGen</span></div></a><button id="collapse" aria-label="Collapse sidebar">${icon("left", 19)}</button></div><div class="workspace-label"><span>${icon(ws.icon, 19)}</span><div><small>WORKSPACE</small><b>${ws.short}</b></div></div><nav>${visiblePages.map((p) => `<a href="#/${ws.id}/${p.path}" class="${p.path === page.path ? "active" : ""}"><i>${icon(metricIcon(p.title), 18)}</i><span>${p.title}</span></a>`).join("")}</nav><div class="side-bottom"><button id="workspaceSwitcher"><span>${icon("switch", 18)}</span><div><small>SWITCH WORKSPACE</small><b>${ws.label}</b></div></button><a href="#/"><span>${icon("home", 18)}</span><div><small>EXIT WORKSPACE</small><b>Welcome screen</b></div></a></div></aside><main class="app-main"><header class="topbar"><button class="mobile-menu" id="mobileMenu">${icon("menu", 20)}</button><div class="crumb"><span>BlueLMS</span><i>${icon("chevron", 15)}</i><b>${page.title}</b></div><div class="top-actions"><button class="search" data-preview="true">${icon("search", 17)} <span>Search</span><kbd>Ctrl K</kbd></button>${ws.id === "student" ? `<div class="mode-switch"><button data-mode="primary" class="${state.mode === "primary" ? "active" : ""}">Primary</button><button data-mode="secondary" class="${state.mode === "secondary" ? "active" : ""}">Secondary</button></div>` : ""}${ws.id === "school" ? `<select id="roleSelect" aria-label="School management role"><option value="principal" ${state.role === "principal" ? "selected" : ""}>Principal / Headteacher</option><option value="admin" ${state.role === "admin" ? "selected" : ""}>School Administrator</option></select>` : ""}${ws.id === "bgdl" ? `<select id="bgdlRoleSelect" aria-label="BGDL role"><option value="super" ${state.bgdlRole === "super" ? "selected" : ""}>BGDL Super Admin</option><option value="ict" ${state.bgdlRole === "ict" ? "selected" : ""}>ICT / Support</option></select>` : ""}${["bgdl", "school", "parent", "teacher"].includes(ws.id) ? `<select id="schoolSelect" aria-label="Demo school">${schools.map((x) => `<option value="${x.id}" ${x.id === state.school ? "selected" : ""}>${x.name}</option>`).join("")}</select>` : ""}<button class="bell" aria-label="Notifications" data-preview="true">${icon("bell", 19)}<i></i></button><button class="profile" data-preview="true"><i>${ws.id === "student" ? "AO" : ws.id === "parent" ? "CO" : "NN"}</i><span><b>${ws.id === "student" ? "Amara Okafor" : ws.id === "parent" ? "Chidi Okafor" : "Ngozi Nwafor"}</b><small>${ws.audience}</small></span></button></div></header><div class="page"><header class="page-head"><div><div class="eyebrow">${ws.label.toUpperCase()} <i></i> TERM 1 · 2026/27</div><h1>${page.title}</h1><p>${page.desc}</p></div><div>${demoTag()}<button class="screen-count" id="screenIndex">${workspaces.reduce((n, w) => n + w.pages.length, 0)} screens ${icon("arrow", 16)}</button></div></header>${renderKind(page.kind)}</div></main><div class="workspace-drawer" id="workspaceDrawer"><div><header><span>SWITCH PERSPECTIVE</span><button id="closeDrawer" aria-label="Close">${icon("close", 18)}</button></header><h2>Explore BlueLMS</h2><p>Each workspace is tailored to the decisions its people make.</p><nav>${workspaces.map((w) => `<a href="#/${w.id}/${w.pages[0].path}" class="${w.id === ws.id ? "active" : ""}"><i>${icon(w.icon, 20)}</i><span><b>${w.label}</b><small>${w.audience} · ${w.pages.length} screens</small></span><em>${icon("arrow", 18)}</em></a>`).join("")}</nav></div></div><div class="toast" id="toast">This control is a visual preview only.</div></div>`;
}
function screenIndex() {
  const count = workspaces.reduce((n, w) => n + w.pages.length, 0);
  return `<dialog class="index-dialog" id="indexDialog"><header><div><span>DEMONSTRATION MAP</span><h2>${count} first-level screens</h2><p>Every destination below is navigable.</p></div><button id="closeIndex" aria-label="Close">${icon("close", 18)}</button></header><div class="index-columns">${workspaces.map((w) => `<section><h3><i>${icon(w.icon, 18)}</i>${w.label}<span>${w.pages.length}</span></h3>${w.pages.map((p, i) => `<a href="#/${w.id}/${p.path}"><b>${String(i + 1).padStart(2, "0")}</b>${p.title}</a>`).join("")}</section>`).join("")}</div></dialog>`;
}
function render() {
  const r = route();
  document.title = r.presentation
    ? `${presentationSlides[r.slide].kicker} · BlueLMS`
    : r.welcome
      ? "BlueLMS NextGen — Demo Entry"
      : `${r.page.title} · BlueLMS`;
  const returnControl = `<a class="return-presentation" href="#/presentation/${state.presentationSlide + 1}">${icon("left", 15)} Return to presentation</a>`;
  document.getElementById("app").innerHTML =
    (r.presentation
      ? presentation(r.slide)
      : r.welcome
        ? welcome()
        : shell(r.ws, r.page)) +
    (r.presentation ? "" : screenIndex() + returnControl);
  bind();
}
function bind() {
  const activeRoute = route();
  if (activeRoute.page) {
    $(".page")?.classList.add(
      `kind-${activeRoute.page.kind}`,
      `workspace-${activeRoute.ws.id}`,
    );
    $(".app-shell")?.classList.add(`workspace-shell-${activeRoute.ws.id}`);
    if (activeRoute.ws.id === "student")
      personalizeStudentCopy(activeRoute.page.kind);
  }
  const screenTotal = workspaces.reduce((n, w) => n + w.pages.length, 0);
  const openIndex = $("#openIndex");
  if (openIndex) openIndex.textContent = `View ${screenTotal}-screen index`;
  document.querySelectorAll(".sidebar>nav a").forEach((link) => {
    const slot = link.querySelector("i");
    if (slot) slot.outerHTML = icon(navIcon(link.textContent), 18);
  });
  document.querySelectorAll(".brand").forEach((el) => {
    const context = el.closest(".presentation")
      ? "Management presentation"
      : el.closest(".sidebar")
        ? "BlueLMS NextGen"
        : "BlueLMS by BGDL";
    el.innerHTML =
      brandLogo(
        el.closest(".slide-solution,.welcome") ? "on-light" : "on-dark",
      ) + `<span class="brand-context">${context}</span>`;
  });
  const idx = $("#indexDialog");
  ["#screenIndex", "#openIndex"].forEach((s) => {
    const el = $(s);
    if (el) el.onclick = () => idx.showModal();
  });
  const ci = $("#closeIndex");
  if (ci) ci.onclick = () => idx.close();
  const collapse = $("#collapse");
  if (collapse)
    collapse.onclick = () => {
      state.sidebar = !state.sidebar;
      $(".sidebar").classList.toggle("collapsed");
    };
  const menu = $("#mobileMenu");
  if (menu) menu.onclick = () => $(".sidebar").classList.toggle("mobile-open");
  const switcher = $("#workspaceSwitcher"),
    drawer = $("#workspaceDrawer");
  if (switcher) switcher.onclick = () => drawer.classList.add("open");
  const close = $("#closeDrawer");
  if (close) close.onclick = () => drawer.classList.remove("open");
  if (drawer)
    drawer.onclick = (e) => {
      if (e.target === drawer) drawer.classList.remove("open");
    };
  const school = $("#schoolSelect");
  if (school)
    school.onchange = (e) => {
      state.school = e.target.value;
      render();
    };
  const role = $("#roleSelect");
  if (role)
    role.onchange = (e) => {
      state.role = e.target.value;
      render();
    };
  const bgdlRole = $("#bgdlRoleSelect");
  if (bgdlRole)
    bgdlRole.onchange = (e) => {
      state.bgdlRole = e.target.value;
      render();
    };
  document.querySelectorAll("[data-mode]").forEach(
    (b) =>
      (b.onclick = () => {
        state.mode = b.dataset.mode;
        render();
      }),
  );
  document.querySelectorAll("[data-preview]").forEach(
    (b) =>
      (b.onclick = (e) => {
        e.preventDefault();
        const t = $("#toast");
        if (t) {
          t.classList.add("show");
          clearTimeout(t.timer);
          t.timer = setTimeout(() => t.classList.remove("show"), 2200);
        }
      }),
  );
  idx?.addEventListener("click", (e) => {
    if (e.target === idx) idx.close();
  });
  const fs = $("#fullscreenPresentation");
  if (fs)
    fs.onclick = () =>
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen();
  const copy = $("#copyDemoLink");
  if (copy)
    copy.onclick = async () => {
      const url = audienceDemoUrl();
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        const t = document.createElement("textarea");
        t.value = url;
        document.body.appendChild(t);
        t.select();
        document.execCommand("copy");
        t.remove();
      }
      const toast = $("#toast");
      toast?.classList.add("show");
      setTimeout(() => toast?.classList.remove("show"), 1800);
    };
  const deck = $(".presentation");
  if (deck) {
    deck.ontouchstart = (e) =>
      (state.touchStartX = e.changedTouches[0].screenX);
    deck.ontouchend = (e) => {
      const delta = e.changedTouches[0].screenX - state.touchStartX;
      if (Math.abs(delta) < 55) return;
      const r = route();
      if (delta < 0 && r.slide < 5)
        location.hash = `/presentation/${r.slide + 2}`;
      if (delta > 0 && r.slide > 0) location.hash = `/presentation/${r.slide}`;
    };
  }
}
document.onkeydown = (e) => {
  const r = route();
  if (!r.presentation) return;
  const tag = document.activeElement?.tagName;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;
  if (["ArrowRight", "PageDown", " "].includes(e.key) && r.slide < 5) {
    e.preventDefault();
    location.hash = `/presentation/${r.slide + 2}`;
  }
  if (["ArrowLeft", "PageUp"].includes(e.key) && r.slide > 0) {
    e.preventDefault();
    location.hash = `/presentation/${r.slide}`;
  }
  if (e.key === "Home") location.hash = "/presentation/1";
  if (e.key === "End") location.hash = "/presentation/6";
};
window.addEventListener("hashchange", render);
render();
