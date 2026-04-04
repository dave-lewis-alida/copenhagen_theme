export const STYLES = `
.saia-container {
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 20px 24px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.6;
  color: #2f3941;
}

.saia-loading {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #68737d;
}

.saia-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #d8dcde;
  border-top-color: #1f73b7;
  border-radius: 50%;
  animation: saia-spin 0.7s linear infinite;
  flex-shrink: 0;
}

@keyframes saia-spin {
  to { transform: rotate(360deg); }
}

.saia-error {
  color: #68737d;
  font-style: italic;
}

.saia-heading {
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 10px;
}

.saia-answer {
  margin: 0 0 16px;
  white-space: pre-wrap;
}

.saia-sources {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.saia-source-link {
  display: inline-block;
  font-size: 12px;
  color: #1f73b7;
  text-decoration: none;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  padding: 3px 10px;
}

.saia-source-link:hover {
  background: #eef6ff;
  text-decoration: none;
}

.saia-disambig-prompt {
  margin: 0 0 12px;
  font-weight: 600;
}

.saia-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.saia-chip {
  background: #fff;
  border: 1px solid #1f73b7;
  border-radius: 20px;
  color: #1f73b7;
  cursor: pointer;
  font-size: 13px;
  padding: 5px 16px;
  transition: background 0.15s;
}

.saia-chip:hover {
  background: #eef6ff;
}
`;
