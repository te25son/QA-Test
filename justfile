set dotenv-load

_default: test

[private]
alias t := test
[private]
alias c := check

test:
    npx ts-mocha tests/** --timeout 10000 --reporter mochawesome

check:
    npx eslint .

report:
    open ./mochawesome-report/mochawesome.html
