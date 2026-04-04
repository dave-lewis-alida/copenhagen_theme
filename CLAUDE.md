@AGENTS.md

## Project Context

This is a fork of the Zendesk Copenhagen Theme, modified to replace Zendesk's native Quick Answers (`{{generative_answers}}`) with an AI-powered answer widget. It is Prototype 2 of the Alida Docs AI Assistant project.

### What was added

- `src/modules/search-ai-assistant/` — React module that renders an AI answer above search results
- `templates/search_results.hbs` — `{{generative_answers}}` replaced with the module mount point
- `manifest.json` — new `ai_assistant_backend_url` theme setting (set to `"mock"` for UI testing without a backend)

### Backend

The backend lives in a sibling repo: `../docs-ai-assistant/backend/`. It exposes:
- `POST /api/ask` — multi-turn chat (prototype 1)
- `GET /api/search-answer?query=...` — single-turn quick answer (prototype 2)

See `../docs-ai-assistant/README.md` and `../docs-ai-assistant/PRD.md` for full context.

### Testing

**Mock mode (no backend needed):** Set `ai_assistant_backend_url` to `"mock"` in the Zendesk theme settings, then run `zcli themes preview`. Queries containing "report" trigger the disambiguation state; all other queries show a normal answer.

**Live mode:** Set `ai_assistant_backend_url` to the running backend URL (e.g., `http://localhost:3001`) and add the Zendesk help center domain to `CORS_ORIGINS` in `../docs-ai-assistant/.env`.

### Build

```
npm run build   # compiles all modules including search-ai-assistant
npm start       # watch mode + zcli preview
```
