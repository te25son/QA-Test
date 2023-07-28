# QA Test

### Setup

This is a simple test for a position as QA Automation Engineer.

To the run the tests you will have to create a `.env` file with a single secret `BASE_URL`. To do this run: `echo "BASE_URL=< URL FOR THIS TEST>" >> .env`.

You may also choose to set the optional `TIMEOUT` environment variable. It defaults to 10000ms if not set.

Install the necessary dependencies with `npm ci`.

This project makes use of [justfile](https://github.com/casey/just), an alternative to makefile. You can install it to run the tests with the simple command `just test`. You can also lint the files by running `just check`. After the tests have run, you can open the report files by running `just report` (this may only work on MacOS).

:warning: If you do not run the tests using justfile, you must manually export the secret in the `.env` file. Do this by running `export BASE_URL=<URL FOR THIS TEST>`.
