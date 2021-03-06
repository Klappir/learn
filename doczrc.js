export default {
  dest: "/docs",
  ignore: ["README.md"],
  description: "Documentation for Klappir platforms",
  menu: [{ name: "Klappir Learn" },
         {name: "Klappir Methodology"},
         {name: "Klappir Platform", menu: ["Platform Menu", "Assets", "Users", "Data", "Systems", "Files"]},
         {name: "EnviroMaster", menu: ["Insights", "Documents"]}],
  themeConfig: {
    fonts: {
      body: 'Inter, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
      heading: 'Inter, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
    },
  }
};
