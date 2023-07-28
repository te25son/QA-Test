set dotenv-load

export TIMEOUT := env_var_or_default("TIMEOUT", "10000")

_default: test

[private]
alias t := test
[private]
alias c := check
[private]
alias r := report

test:
    npx ts-mocha tests/** --timeout $TIMEOUT --reporter mochawesome

check:
    npx eslint config.ts tests/

report:
    open ./mochawesome-report/mochawesome.html
