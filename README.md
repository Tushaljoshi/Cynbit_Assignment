# Cynbit Website Improvement — Technical Report

## 1. Problem statement

Cynbit's existing website already presents its AI automation and software capabilities, provides a mobile navigation experience, and has dedicated pages for services, products, case studies, and contact. The primary opportunity selected for this prototype was the project inquiry path.

The homepage's “Start discovery” call to action leads visitors toward a general contact experience. The live contact form asks for basic contact details and an open-ended message, but does not directly collect a visitor's area of interest or desired business outcome. Visitors may not know how to write an effective first brief, and the resulting inquiry may lack useful context.

The prototype addresses this with a guided project-discovery experience. Visitors select a service area, identify a desired outcome and optional timeline, and provide contact details. Their answers are summarized in a prefilled email draft. The prototype does not transmit or persist data; the visitor must choose to open and send the email.

## 2. Technical stack

| Technology | Use |
|---|---|
| React 18 | Component-based user interface and form state |
| JavaScript (ES modules) | Application and interaction logic |
| Vite 5 | Local development server and production bundling |
| Tailwind CSS 3 | Utility styling and project theme tokens |
| React Router 6 | Client-side `/` and `/discovery` routes |
| Lucide React | Interface icons |
| Framer Motion | Subtle hero and section entrance/orbit animations |
| Radix UI Dialog | Accessible modal semantics, focus management, and keyboard dismissal |

The implementation reuses dependencies already declared in the project manifest. No new package dependency was introduced.

## 3. Solution design

### Landing page

The homepage is composed from focused components rather than one large application component:

- Shared site chrome: `Header`, `Footer`, `MobileBottomNav`, `BrandMark`, and `SectionHeading`.
- Individual homepage sections: `HeroSection`, `ServicesSection`, `ApproachSection`, `WorkSection`, `AboutSection`, and `ClosingSection`.
- `HomePage` composes those components and owns the state for opening the discovery dialog.

### Project-discovery flow

The same reusable discovery flow is rendered in two contexts:

- **Modal:** `DiscoveryWizard` wraps the flow in a Radix dialog and is available from homepage calls to action.
- **Standalone page:** `DiscoveryPage` renders the flow at `/discovery`.

The flow is further divided into:

- `DiscoveryFlow` — step state, validation handoff, and email draft creation.
- `DiscoverySteps` — service selection, outcome/timeline selection, and contact form fields.
- `DiscoverySummary` — confirmation summary and email-draft action.

The flow validates required name/email fields using browser-native form validation. The service and outcome steps must be selected before continuing. Organization, timeline, and additional context remain optional. Service-card entry points preselect the relevant service in the modal.

### Data handoff and privacy

The flow prepares a `mailto:opportunities@cynbit.in` URL containing the visitor's selections and contact information. It does not claim that Cynbit received the inquiry. No API, CRM, database, analytics, or browser persistence was added.

### Accessibility and responsive behavior

- The mobile menu communicates its state using `aria-expanded` and `aria-controls`.
- The dialog uses Radix UI for focus management and Escape-key dismissal.
- Form fields have visible labels, required fields, and native email validation.
- The site includes a skip link and visible keyboard focus styles.
- Motion respects the user's reduced-motion preference.
- The discovery page was checked at a 390px viewport; no horizontal overflow was observed.

## 4. Implementation files

### Application and pages

- `src/App.jsx` — route setup and reduced-motion configuration.
- `src/pages/HomePage.jsx` — landing page composition and discovery modal state.
- `src/pages/DiscoveryPage.jsx` — standalone discovery experience.

### Shared components

- `src/components/BrandMark.jsx`
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/MobileBottomNav.jsx`
- `src/components/SectionHeading.jsx`

### Homepage sections

- `src/components/sections/HeroSection.jsx`
- `src/components/sections/ServicesSection.jsx`
- `src/components/sections/ApproachSection.jsx`
- `src/components/sections/WorkSection.jsx`
- `src/components/sections/AboutSection.jsx`
- `src/components/sections/ClosingSection.jsx`

### Discovery components

- `src/components/DiscoveryWizard.jsx`
- `src/components/discovery/DiscoveryFlow.jsx`
- `src/components/discovery/DiscoverySteps.jsx`
- `src/components/discovery/DiscoverySummary.jsx`

### Styling and project configuration

- `src/index.css` — component styles, responsive breakpoints, and accessibility states.
- `tailwind.config.js` — Cynbit-inspired theme tokens.
- `index.html` — page title and metadata.

## 5. Results

The prototype provides a clearer path from service interest to a structured introduction. It surfaces the service catalog and selected case-study examples on the landing page, supports a short guided inquiry, and offers that inquiry both as a dialog and as a separate route.

Expected value:

- **For visitors:** less effort to begin, clearer choices, an “I'm still exploring” option, and an explicit email handoff.
- **For Cynbit:** a more structured introduction that can communicate service interest, desired outcome, and timing.

Potential production metrics include discovery-flow open rate, step completion rate, selected service area, brief completion rate, email-draft clicks, and qualified inquiry outcomes. This prototype does not collect those metrics.

## 6. Verification performed

- `npm ci` restored the dependency versions from the existing lockfile.
- `npm run build` completed successfully after componentization.
- Browser verification confirmed:
  - The `/discovery` route loads directly.
  - The landing page opens the discovery modal.
  - “Open as a page” navigates from the modal to `/discovery`.
  - The discovery flow reaches its summary and produces the expected `mailto:` handoff.
  - Required inputs are validated by the browser.
  - The standalone discovery page fits a 390px viewport without horizontal overflow.
- `git diff --check` completed without whitespace errors in the checked files.
- The configured Vercel rewrite sends application routes to the SPA entry point.

No test suite was available through the VS Code test runner. The project build and browser interaction checks were used instead.

## 7. Limitations and future work

- A real inquiry integration requires an approved backend or CRM endpoint, server-side validation, spam protection, and clear handling of network errors.
- Privacy, consent, data-retention, and analytics requirements should be defined before collecting inquiry information in production.
- The email-draft handoff depends on the visitor having a configured email application and explicitly sending the draft.
- Case-study cards are teasers based on titles observed on Cynbit's live site; production content and outcome claims should be verified with Cynbit.
- `npm ci` reported 28 vulnerabilities in the existing dependency tree (1 low, 6 moderate, 18 high, 3 critical). Dependency upgrades were not included in this scoped prototype work.
- The workspace contained unrelated pre-existing deletions from the former café application. Those files were not restored or otherwise changed as part of this report.
