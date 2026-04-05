import type { AskResponse } from "./types";

// Normal answer — used when backendUrl is "mock" and query doesn't trigger disambiguation
export const MOCK_ANSWER: AskResponse = {
  answer:
    "To create a survey, navigate to Surveys in the left navigation, then click Create Survey. " +
    "Choose a template or start from scratch, add your questions, configure distribution settings, " +
    "and publish when ready. You can preview the survey before publishing to check the respondent experience.",
  sources: [
    {
      title: "Creating a survey",
      url: "https://alidasupport.zendesk.com/hc/en-us/articles/creating-a-survey",
    },
    {
      title: "Survey distribution options",
      url: "https://alidasupport.zendesk.com/hc/en-us/articles/survey-distribution",
    },
  ],
  needsDisambiguation: false,
};

// Disambiguation — triggered in mock mode when query contains "report"
// but hasn't yet been refined by a chip selection
export const MOCK_DISAMBIGUATION: AskResponse = {
  answer: "",
  sources: [],
  needsDisambiguation: true,
  chips: ["Modern Reports", "Standard Reports"],
};

const MOCK_MODERN_REPORTS_ANSWER: AskResponse = {
  answer:
    "Modern Reports lets you build interactive dashboards using drag-and-drop widgets. " +
    "To create a report, go to Reports in the left navigation, click New Report, and select Modern Reports. " +
    "Choose your data source, add widgets, and use filters to refine the results. Save and share with your team when ready.",
  sources: [
    {
      title: "Getting started with Modern Reports",
      url: "https://alidasupport.zendesk.com/hc/en-us/articles/modern-reports-overview",
    },
    {
      title: "Adding widgets to a Modern Report",
      url: "https://alidasupport.zendesk.com/hc/en-us/articles/modern-reports-widgets",
    },
  ],
  needsDisambiguation: false,
};

const MOCK_STANDARD_REPORTS_ANSWER: AskResponse = {
  answer:
    "Standard Reports are the legacy reporting tool in Alida. " +
    "You can access them under Reports > Standard Reports. " +
    "Note: Alida recommends migrating to Modern Reports for new report creation, as Standard Reports will not receive new features.",
  sources: [
    {
      title: "Standard Reports overview",
      url: "https://alidasupport.zendesk.com/hc/en-us/articles/standard-reports-overview",
    },
  ],
  needsDisambiguation: false,
};

export function getMockResponse(query: string): AskResponse {
  if (/Modern Reports/i.test(query)) return MOCK_MODERN_REPORTS_ANSWER;
  if (/Standard Reports/i.test(query)) return MOCK_STANDARD_REPORTS_ANSWER;
  if (/report/i.test(query)) return MOCK_DISAMBIGUATION;
  return MOCK_ANSWER;
}
