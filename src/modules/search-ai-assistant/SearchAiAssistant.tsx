import { useState, useEffect } from "react";
import type { AskResponse } from "./types";
import { getMockResponse } from "./mockData";

interface Props {
  query: string;
  backendUrl: string;
}

type State =
  | { status: "loading" }
  | { status: "done"; data: AskResponse }
  | { status: "error" };

async function fetchAnswer(
  backendUrl: string,
  query: string
): Promise<AskResponse> {
  const url = `${backendUrl}/api/search-answer?query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Backend returned ${res.status}`);
  return res.json() as Promise<AskResponse>;
}

export function SearchAiAssistant({ query, backendUrl }: Props) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    setState({ status: "loading" });

    if (backendUrl === "mock") {
      // Simulate a short network delay so the loading state is visible
      const timer = setTimeout(() => {
        setState({ status: "done", data: getMockResponse(query) });
      }, 600);
      return () => clearTimeout(timer);
    }

    let cancelled = false;
    fetchAnswer(backendUrl, query)
      .then((data) => {
        if (!cancelled) setState({ status: "done", data });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, [query, backendUrl]);

  function handleChipClick(chip: string) {
    const refinedQuery = `${query} ${chip}`;
    setState({ status: "loading" });

    if (backendUrl === "mock") {
      setTimeout(() => {
        setState({ status: "done", data: getMockResponse(refinedQuery) });
      }, 600);
      return;
    }

    fetchAnswer(backendUrl, refinedQuery)
      .then((data) => setState({ status: "done", data }))
      .catch(() => setState({ status: "error" }));
  }

  if (state.status === "loading") {
    return (
      <div className="saia-container saia-loading" aria-live="polite">
        <span className="saia-spinner" aria-hidden="true" />
        <span>Finding an answer…</span>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="saia-container saia-error" aria-live="polite">
        Couldn't load an AI answer. See the search results below.
      </div>
    );
  }

  const { data } = state;

  if (data.needsDisambiguation && data.chips && data.chips.length > 0) {
    return (
      <div className="saia-container" aria-live="polite">
        <p className="saia-disambig-prompt">
          Which version are you asking about?
        </p>
        <div className="saia-chips">
          {data.chips.map((chip) => (
            <button
              key={chip}
              className="saia-chip"
              onClick={() => handleChipClick(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="saia-container" aria-live="polite">
      <h2 className="saia-heading">AI Answer</h2>
      <p className="saia-answer">{data.answer}</p>
      {data.sources.length > 0 && (
        <ul className="saia-sources">
          {data.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} className="saia-source-link">
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
