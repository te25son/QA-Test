set dotenv-load

_default: test

[private]
alias t := test
[private]
alias c := check

test:
    npx ts-mocha tests/**

check:
    npx eslint .
