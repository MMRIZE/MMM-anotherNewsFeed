# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.2.0](https://github.com/MMRIZE/MMM-anotherNewsFeed/compare/v1.1.1...v1.2.0) (2026-05-07)


### Added

* **utils:** support media:thumbnail image extraction ([28b0a8e](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/28b0a8ebaa80427d424b51745a490cfc44b72d4d)), closes [#15](https://github.com/MMRIZE/MMM-anotherNewsFeed/issues/15)


### Fixed

* **utils:** check MIME type for media:content images ([297ddc3](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/297ddc331da9fa04ab5a4d8a33e6b03264b4b075))


### Chores

* **demo:** add ABC and BBC in separate module instances ([be67121](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/be6712123940a56229d9f48a452a8e6983625337))
* update dependencies ([24f3fcd](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/24f3fcdfc707bca7d9f9a905f2f56d7198941544))


### Tests

* add unit tests and CI workflow ([d5192fd](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/d5192fd093e0712258f898b9296fa47ea0254d86))
* **utils:** extend coverage for isImage and extractImageFromItem ([935c76a](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/935c76aa86d88eff80cec8173655b93500e74c61))


### Continuous Integration

* add automated testing workflow ([fce1e06](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/fce1e06cf4715818ff136a2141117aa9d5f1ee61))

## [1.1.1](https://github.com/MMRIZE/MMM-anotherNewsFeed/compare/v1.1.0...v1.1.1) (2026-04-03)


### Fixed

* match both single and double quotes in img src regex ([903eeb1](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/903eeb1c9b92bf40029df5e071cddd92dd810b7b))


### Chores

* add demo config and script ([2b92983](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/2b9298322751df975a066603e1b644eed6330915))
* add release script and changelog config ([0e81bb0](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/0e81bb0677e29338b52f504449b20b254bcc4ece))
* update dependencies ([ee3ff9d](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/ee3ff9d3faa3838e00c94d0000beb2ba5cb43381))


### Code Refactoring

* remove dead useCorsProxy code from newsfeedfetcher ([6d7d3b3](https://github.com/MMRIZE/MMM-anotherNewsFeed/commit/6d7d3b3ae223c1817f1a0aa29d1d8d01aa9c1438))

## [1.1.0](https://github.com/MMRIZE/MMM-anotherNewsFeed/compare/v1.0.2...v1.1.0) - 2025-10-19

### Added

- docs: add Changelog
- docs: add Code of Conduct
- feat: extract images from `content:encoded` field for WordPress feeds

### Changed

- chore: add missing `html-to-text` dependency to `package.json`
- chore: update devDependencies

## [1.0.1](https://github.com/MMRIZE/MMM-anotherNewsFeed/compare/v1.0.0...v1.0.1) - 2025-07-23

- see commit message history for details

## [1.0.0](https://github.com/MMRIZE/MMM-anotherNewsFeed/releases/tag/v1.0.0) - 2022-06-22

- Initial release
