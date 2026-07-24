# Student Course Portal — Angular 20

One cumulative project covering the Digital Nurture Angular hands-ons:
components, binding, lifecycle hooks, communication, directives, pipes,
template/reactive forms, services, DI, routing, HTTP/interceptors, NgRx and tests.

## Run

Install Node.js LTS, open this folder and execute:

```bash
npm install
npm run api
```

In a second terminal:

```bash
npm start
```

Open http://localhost:4200. JSON Server runs at http://localhost:3000.

## Verify

```bash
npm run build
npm run test:ci
```

## GitHub

Upload this project folder, but never upload `node_modules`, `dist`, `.angular`
or `coverage`. These paths are already excluded by `.gitignore`.

## Screenshot checkpoints

1. Home dashboard and header.
2. Search binding and lifecycle console messages.
3. Styled course cards and credit labels.
4. Template-form validation/success.
5. Reactive custom/async validation and FormArray.
6. Enrollment state on Profile.
7. `/courses/2` route.
8. API request and Authorization header in DevTools.
9. Course actions/state in Redux DevTools.
10. Passing test/build terminal.
