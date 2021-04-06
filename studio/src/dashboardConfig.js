export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606bac1fd5122e45be77bbb5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-kzwj3q1b",
                  apiId: "1c01df1a-db1e-42d8-8807-fb64d345373f",
                },
                {
                  buildHookId: "606bac1fc1f54e4c09dc064f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-1iruc4h9",
                  apiId: "22040a01-6c77-4bc1-a0b9-55f0f63cadd4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ericganderson/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-1iruc4h9.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
