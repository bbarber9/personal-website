import { WorkHistoryCompany } from "./types";

export function getWorkHistory(): WorkHistoryCompany[] {
  return [
    {
      name: "Nuvolo",
      link: "https://www.nuvolo.com/",
      positions: [
        {
          name: "Software Engineer II",
          start: "12/2018",
          achievements: [
            "Led a team of software engineers to build the Field Service Management product",
            "Built and maintained a single-page customer facing React application",
            "Championed the adoption of a modern development workflow across the entire organization with tools like TypeScript, React, Git/Github, Node.js/NPM, and Webpack",
            "Started and maintained multiple open source projects",
          ],
        },
      ],
    },
    {
      name: "Domo Inc.",
      link: "https://www.domo.com",
      positions: [
        {
          name: "IT Solutions Architect",
          start: "05/2017",
          end: "12/2018",
          achievements: [
            "Automated internal business processes resulting in hundreds of man hours saved per month",
            "Developed integrations with web services via REST API's",
            "Built several internal web applications using AngularJS",
            "Built add-on web services for the ServiceNow platform using Node.js",
          ],
        },
        {
          name: "Cloud Operations Intern",
          start: "12/2015",
          end: "05/2017",
          achievements: [
            "Built out a technical service catalog for the Cloud Operations team resulting in efficiency and tracking gains",
            "Imported data from internal systems into ServiceNow via REST API's",
          ],
        },
      ],
    },
    {
      name: "Brigham Young University",
      link: "https://www.byu.edu",
      positions: [
        {
          name: "Systems Administrator",
          start: "08/2013",
          end: "12/2015",
          achievements: [
            "Assisted students with technical troubleshooting",
            "Maintained physical and virtual servers",
            "Scripted common maintenance tasks",
          ],
        },
      ],
    },
    {
      name: "Church of Jesus Chris of Latter-Day Saints",
      link: "https://www.churchofjesuschrist.org",
      positions: [
        {
          name: "Missionary Volunteer",
          start: "07/2011",
          end: "07/2013",
          achievements: [
            "Became fluent in Spanish",
            "Supervised other missionary volunteers",
          ],
        },
      ],
    },
  ];
}
