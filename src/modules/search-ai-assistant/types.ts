// Matches the AskResponse shape returned by the backend
export interface AskResponse {
  answer: string;
  sources: { title: string; url: string }[];
  needsDisambiguation: boolean;
  chips?: string[];
}
