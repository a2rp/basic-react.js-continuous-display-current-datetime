# Continuous Current Date Time

A focused Create React App project that continuously displays the visitor's current date, time, and browser time zone.

## Features

- Starts with the current date and time immediately
- Updates once every second
- Uses the browser locale for readable date and time formatting
- Displays the visitor's resolved time zone
- Uses a semantic HTML `time` element
- Cleans up the interval when the component unmounts
- Responsive single-screen clock interface
- Clear comments explaining the timer lifecycle

## Tech stack

- React 18
- Create React App
- Plain CSS

## Install and run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) after the app starts.

## Production build

```bash
npm run build
```

Create React App writes the optimized bundle to the `build` folder.

## How the clock works

The app stores a `Date` object in React state. It creates one interval in `useEffect`, updates the state every 1000 milliseconds, and clears the interval in the cleanup function. The date and time are formatted with `Intl.DateTimeFormat`, so each visitor sees values based on their browser locale and time zone.

## Project structure

```text
public/          HTML template, manifest, and static assets
src/App.js       Live clock component and interval lifecycle
src/index.js     React application entry point
src/index.css    Responsive application styling
```

## Notes

- This project is a frontend-only display app.
- It does not use an API, database, authentication, analytics integration, or form submission.
- No automated test setup is included.

## Author

**Ashish Ranjan**

Full-Stack Web Developer

## Links

- Portfolio: [ashishranjan.net](https://www.ashishranjan.net/)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- CodePen: [codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [facebook.com/theash.ashish](https://www.facebook.com/theash.ashish/)
- YouTube: [Ashish Ranjan](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- [Support page](https://a2rp-donation-page.netlify.app/)
- [Buy Me a Coffee](https://buymeacoffee.com/a2rp)
- [Patreon](https://www.patreon.com/a2rp)

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
