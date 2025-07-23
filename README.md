# MMM-anotherNewsFeed

**MMM-anotherNewsFeed** is a MagicMirror module that displays news feeds from various sources. It allows you to customize the feeds, censor specific words, and choose whether to show images.

This module is a modified version of the default [newsfeed](https://github.com/MagicMirrorOrg/MagicMirror/tree/master/modules/default/newsfeed) module. This was inspired by a request in the forum: <https://forum.magicmirror.builders/topic/16933/developer-wanted-to-modify-default-newsfeed-module>.

## Installation

Navigate to your MagicMirror modules directory, clone this repository and install the dependencies:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/MMRIZE/MMM-anotherNewsFeed
cd MMM-anotherNewsFeed
npm ci
```

## Update

To update the module, navigate to the module directory, pull the latest changes and reinstall the dependencies:
```bash
cd ~/MagicMirror/modules/MMM-anotherNewsFeed
git pull
npm ci
```

## Configuration

Add the following configuration example to your `config.js` file:

```js
    {
      module: "MMM-anotherNewsFeed",
      header: "ANOTHER News Feed",
      position: "bottom_bar",
      config: {
        censorWords: ["Some", "improper words", "here"],
        feeds: [
          {
            title: "New York Times",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
          },
          {
            title: "CBC World",
            url: "https://www.cbc.ca/webfeed/rss/rss-world"
          },
          {
            title: "BBC World News",
            url: "https://feeds.bbci.co.uk/news/world/rss.xml"
          }
        ],
        showImage: true
      }
    },
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.