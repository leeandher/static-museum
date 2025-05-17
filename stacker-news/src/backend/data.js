export const INITIAL_LINKS = [
  {
    id: "1",
    description: "Example 1",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v1", user: { id: "2", name: "Anonymous" } },
      { id: "v2", user: { id: "3", name: "Anonymous" } },
      { id: "v3", user: { id: "4", name: "Anonymous" } },
    ],
  },
  {
    id: "2",
    description: "Example 2",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v4", user: { id: "2", name: "Anonymous" } },
      { id: "v5", user: { id: "3", name: "Anonymous" } },
    ],
  },
  {
    id: "3",
    description: "Example 3",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v6", user: { id: "2", name: "Anonymous" } },
      { id: "v7", user: { id: "3", name: "Anonymous" } },
      { id: "v8", user: { id: "4", name: "Anonymous" } },
      { id: "v9", user: { id: "5", name: "Anonymous" } },
    ],
  },
  {
    id: "4",
    description: "Example 4",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v10", user: { id: "2", name: "Anonymous" } },
      { id: "v11", user: { id: "3", name: "Anonymous" } },
    ],
  },
  {
    id: "5",
    description: "Example 5",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v12", user: { id: "2", name: "Anonymous" } },
      { id: "v13", user: { id: "3", name: "Anonymous" } },
      { id: "v14", user: { id: "4", name: "Anonymous" } },
    ],
  },
  {
    id: "6",
    description: "Example 6",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 15).toISOString(), // 15 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v15", user: { id: "2", name: "Anonymous" } },
      { id: "v16", user: { id: "3", name: "Anonymous" } },
      { id: "v17", user: { id: "4", name: "Anonymous" } },
      { id: "v18", user: { id: "5", name: "Anonymous" } },
      { id: "v19", user: { id: "6", name: "Anonymous" } },
    ],
  },
  {
    id: "7",
    description: "Example 7",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(), // 20 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v20", user: { id: "2", name: "Anonymous" } },
      { id: "v21", user: { id: "3", name: "Anonymous" } },
    ],
  },
  {
    id: "8",
    description: "Example 8",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 24 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v22", user: { id: "2", name: "Anonymous" } },
      { id: "v23", user: { id: "3", name: "Anonymous" } },
      { id: "v24", user: { id: "4", name: "Anonymous" } },
    ],
  },
  {
    id: "9",
    description: "Example 9",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString(), // 28 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v25", user: { id: "2", name: "Anonymous" } },
      { id: "v26", user: { id: "3", name: "Anonymous" } },
      { id: "v27", user: { id: "4", name: "Anonymous" } },
    ],
  },
  {
    id: "10",
    description: "Example 10",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 32).toISOString(), // 32 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { id: "v28", user: { id: "2", name: "Anonymous" } },
      { id: "v29", user: { id: "3", name: "Anonymous" } },
      { id: "v30", user: { id: "4", name: "Anonymous" } },
      { id: "v31", user: { id: "5", name: "Anonymous" } },
    ],
  },
];
