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
export const MOCK_DISAMBIGUATION: AskResponse = {
  answer: "",
  sources: [],
  needsDisambiguation: true,
  chips: ["Modern Reports", "Standard Reports"],
};

export function getMockResponse(query: string): AskResponse {
  if (/report/i.test(query)) {
    return MOCK_DISAMBIGUATION;
  }
  return MOCK_ANSWER;
}
