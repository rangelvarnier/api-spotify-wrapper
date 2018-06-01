# Contributing

1. Clone it!

Cinfig JavaScript style guide, linter, and formatter

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/)

## Formatting Code Automatically

### Vscode

Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

`ext install chenxsan.vscode-standardjs`

2. Add configurations

* Add file `.vscode/settings.json`

```
{
  "editor.formatOnSave": false,
  "javascript.validate.enable": false,
  "standard.autoFixOnSave": true
}
```
3.  Create your feature branch: `git checkout -b my-new-feature`
4.  Commit your changes: `git commit -m 'refs #task_code Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`

_Remember that we have a pre-push hook with steps that analyzes and prevents mistakes._


## When you need debug application

* Add file `.vscode/launch.json`

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Jest All",
      "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Current File",
      "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      "args": ["${file}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/demo/index.js"
    }
  ]
}

```

### [<-- Back]()
