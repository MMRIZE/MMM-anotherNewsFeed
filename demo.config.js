const config = {
  address: "0.0.0.0",
  ipWhitelist: [],
  logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"],
  modules: [
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "MMM-anotherNewsFeed",
      header: "CBC World",
      position: "top_bar",
      config: {
        feeds: [{ url: "https://www.cbc.ca/webfeed/rss/rss-world" }],
        showImage: true,
        showDescription: true,
        showPublishDate: true,
        showSourceTitle: false
      }
    },
    {
      module: "MMM-anotherNewsFeed",
      header: "ABC News",
      position: "middle_center",
      config: {
        feeds: [{ url: "https://feeds.abcnews.com/abcnews/topstories" }],
        showImage: true,
        showDescription: true,
        showPublishDate: true,
        showSourceTitle: false
      }
    },
    {
      module: "MMM-anotherNewsFeed",
      header: "BBC World",
      position: "bottom_bar",
      config: {
        feeds: [{ url: "https://feeds.bbci.co.uk/news/world/rss.xml" }],
        showImage: true,
        showDescription: true,
        showPublishDate: true,
        showSourceTitle: false
      }
    }
  ]
};

/** ************* DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
