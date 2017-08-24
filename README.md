[DEPRECATED] - Use [conventional-changelog-metahub](https://github.com/vanduynslagerp/conventional-changelog-metahub) instead

# **conventional-commit-types**

List of conventional commit types, extending [conventional-commit-types](https://github.com/commitizen/conventional-commit-types), with emojis and additionnal commit types (aliases).

[![npm](https://img.shields.io/npm/v/@metahub/conventional-commit-types.svg)](https://www.npmjs.com/package/@metahub/conventional-commit-types)
[![npm](https://img.shields.io/npm/dt/@metahub/conventional-commit-types.svg)](https://www.npmjs.com/package/@metahub/conventional-commit-types)
[![Greenkeeper badge](https://badges.greenkeeper.io/vanduynslagerp/conventional-commit-types.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/vanduynslagerp/conventional-commit-types.svg)](https://github.com/vanduynslagerp/conventional-commit-types/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Travis](https://img.shields.io/travis/vanduynslagerp/conventional-commit-types.svg)](https://travis-ci.org/vanduynslagerp/conventional-commit-types)
[![Codecov](https://img.shields.io/codecov/c/github/vanduynslagerp/conventional-commit-types.svg)](https://codecov.io/gh/vanduynslagerp/conventional-commit-types)

Used by [cz-conventional-commit](https://github.com/vanduynslagerp/cz-conventional-commit).

Commit types originally from:
* [Angular Git Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type)
* [commitizen/cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
* [conventional-commit-types](https://github.com/commitizen/conventional-commit-types)

## Commit types

| Commit Type | Title                    | Description                                                                                                 | Emoji  |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |:------:|
| `feat`      | Features                 | A new feature                                                                                               | ✨     |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   | 🐛     |
| `docs`      | Documentation            | Documentation only changes                                                                                  | 📚     |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      | 💎     |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   | 📦     |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     | 🚀     |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           | 🚨     |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         | 🛠     |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) | ⚙️     |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           | ♻️     |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   | 🗑     |

## Commit aliases

Aliases allow to have additionnal commit types (in a tool like [commitizen](https://github.com/commitizen/cz-cli) for example) that can be formatted to follow [AngularJS Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit).

For example the [commitizen](https://github.com/commitizen/cz-cli) CLI can present the choice `initial` and the final commit message will be 'feat: Initial commit 🎉'

| Commit Type        | Maps to | Title             | Description                     | Emoji  |
| ------------------ | ------- | ----------------- | ------------------------------  |:------:|
| `initial`          | `feat`  | Initial           | Initial commit                  | 🎉     |
| `dependencies`     | `fix`   | Dependencies      | Update dependencies             | ⏫     |
| `peerDependencies` | `fix`   | Peer dependencies | Update peer dependencies        | ⬆️     |
| `devDependencies`  | `chore` | Dev dependencies  | Update development dependencies | 🔼     |
| `metadata`         | `fix`   | Metadata          | Update metadata (package.json)  | 📦     |
