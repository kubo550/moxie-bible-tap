# Moxie Bible Tap


## Development

### Development setup

- Clone the repository
- make a copy of `.env.example` and rename it to `.env`
- insert firebase config in `.env`
- Run `yarn` to install dependencies
- Run `yarn run dev` to start the development server
- to add some packages, run `yarn add <package-name>` or `yarn add -D <package-name>` for dev dependencies

### Development workflow

- We work on the `develop` branch.
- Always pull the latest changes from `develop` before starting new work.
- Create a new **feature branch** from `develop` for each new feature or fix.
- Once your work is ready, open a **pull request** from your feature branch to `develop`.
- The `main` branch is connected to Continuous Deployment (CD) – pushing to `main` will automatically deploy the app to Netlify.

[Live preview](https://startling-belekoy-9774b8.netlify.app/)