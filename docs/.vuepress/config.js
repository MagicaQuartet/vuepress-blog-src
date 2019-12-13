module.exports = {
  title: "까막's TIL",
  description: "Dev Note by MagicaQuartet",
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-154197854-1"
      }
    ]
  ],
  themeConfig: {
    nav: [{ text: "About", link: "/about/" }],
    sidebar: {
      "/javascript/": [
        {
          title: "Basic",
          collapsible: true,
          children: [
            "/javascript/basic/intro.md",
            "/javascript/basic/variable-data-type.md"
          ]
        }
      ],
      "/": [
        {
          title: "Javascript",
          path: "/javascript/"
        }
      ]
    }
  }
};
