# Continuous Current Date Time Documentation

## Overview

This frontend-only Create React App project displays the visitor's current local date and time. The browser provides all date, locale, and time-zone information.

## Timer lifecycle

`App.js` uses three React hooks:

1. `useState` stores the current `Date` object.
2. `useEffect` creates one interval that replaces the state every second.
3. The effect cleanup calls `clearInterval` when React removes the component, preventing an orphaned timer.

The state initializer receives `getCurrentDateTime`, so the first render already has a date value. There is no blank one-second state.

## Formatting

The app uses `Intl.DateTimeFormat` rather than a raw `Date.toString()` value.

- The date includes weekday, day, month, and year.
- The time includes hours, minutes, and seconds.
- The browser time zone is displayed below the date.

Because formatting uses `undefined` as the locale, the browser chooses the visitor's preferred locale automatically.

## Accessibility

- The clock output uses a semantic `time` element with a machine-readable `dateTime` value.
- The update status uses `aria-live="polite"`.
- Text contrast and responsive font sizes are built into the CSS.

## Commands

```bash
npm install
npm start
npm run build
```

`npm start` runs the Create React App development server. `npm run build` creates an optimized static bundle in `build`.

## Project boundaries

This application does not include routes, backend services, persistent storage, user accounts, external API calls, or form submissions. Its only dynamic data is the current time supplied by the browser.

## Author and support

**Ashish Ranjan**

Full-Stack Web Developer

- Portfolio: [ashishranjan.net](https://www.ashishranjan.net/)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)
- Support: [a2rp-donation-page.netlify.app](https://a2rp-donation-page.netlify.app/)
- Buy Me a Coffee: [buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [patreon.com/a2rp](https://www.patreon.com/a2rp)
