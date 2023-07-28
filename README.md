# QA Test

### Setup

This is a simple test for a position as QA Automation Engineer.

To the run the tests you must first create a `.env` file with a single secret `BASE_URL`. You can do this simply by running `echo "BASE_URL=< URL FOR THIS TEST>" >> .env`.

Then you can install the necessary dependencies with `npm ci`.

This project makes use of [justfile](https://github.com/casey/just), an alternative to makefile. You can install it to run the tests with the simple command `just test`. You can also lint the files by running `just check`.

:warning: If you do not run the tests using justfile, you must manually export the secret in the `.env` file. Do this by running `export BASE_URL=<URL FOR THIS TEST>`.
