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
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "CBC World",
            url: "https://www.cbc.ca/webfeed/rss/rss-world"
          },
        ],
        showImage: true,
        showDescription: true,
        showPublishDate: true,
        showSourceTitle: true
      }
    }
  ]
};

/** ************* DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
