export const INITIAL_LINKS = [
  {
    id: "1",
    description: "Example 1",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
    ],
  },
  {
    id: "2",
    description: "Example 2",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
    ],
  },
  {
    id: "3",
    description: "Example 3",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
    ],
  },
  {
    id: "4",
    description: "Example 4",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
    ],
  },
  {
    id: "5",
    description: "Example 5",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
      { user: { id: "8", name: "Anonymous" } },
    ],
  },
  {
    id: "6",
    description: "Example 6",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 15).toISOString(), // 15 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
      { user: { id: "8", name: "Anonymous" } },
      { user: { id: "9", name: "Anonymous" } },
    ],
  },
  {
    id: "7",
    description: "Example 7",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(), // 18 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
    ],
  },
  {
    id: "8",
    description: "Example 8",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 21).toISOString(), // 21 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
    ],
  },
  {
    id: "9",
    description: "Example 9",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 24 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
    ],
  },
  {
    id: "10",
    description: "Example 10",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 27).toISOString(), // 27 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
    ],
  },
  {
    id: "11",
    description: "Example 11",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(), // 30 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
    ],
  },
  {
    id: "12",
    description: "Example 12",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 33).toISOString(), // 33 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
      { user: { id: "8", name: "Anonymous" } },
      { user: { id: "9", name: "Anonymous" } },
    ],
  },
  {
    id: "13",
    description: "Example 13",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 36 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
    ],
  },
  {
    id: "14",
    description: "Example 14",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 39).toISOString(), // 39 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
    ],
  },
  {
    id: "15",
    description: "Example 15",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 42).toISOString(), // 42 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
    ],
  },
  {
    id: "16",
    description: "Example 16",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 45).toISOString(), // 45 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
      { user: { id: "8", name: "Anonymous" } },
    ],
  },
  {
    id: "17",
    description: "Example 17",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 48 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
    ],
  },
  {
    id: "18",
    description: "Example 18",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 51).toISOString(), // 51 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
      { user: { id: "8", name: "Anonymous" } },
      { user: { id: "9", name: "Anonymous" } },
    ],
  },
  {
    id: "19",
    description: "Example 19",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 54).toISOString(), // 54 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
    ],
  },
  {
    id: "20",
    description: "Example 20",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 57).toISOString(), // 57 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
    ],
  },
  {
    id: "21",
    description: "Example 21",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(), // 60 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
    ],
  },
  {
    id: "22",
    description: "Example 22",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 63).toISOString(), // 63 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
      { user: { id: "8", name: "Anonymous" } },
    ],
  },
  {
    id: "23",
    description: "Example 23",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 66).toISOString(), // 66 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
    ],
  },
  {
    id: "24",
    description: "Example 24",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 69).toISOString(), // 69 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
      { user: { id: "8", name: "Anonymous" } },
      { user: { id: "9", name: "Anonymous" } },
    ],
  },
  {
    id: "25",
    description: "Example 25",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 72 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
    ],
  },
  {
    id: "26",
    description: "Example 26",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 75).toISOString(), // 75 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
    ],
  },
  {
    id: "27",
    description: "Example 27",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 78).toISOString(), // 78 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
    ],
  },
  {
    id: "28",
    description: "Example 28",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 81).toISOString(), // 81 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
      { user: { id: "8", name: "Anonymous" } },
    ],
  },
  {
    id: "29",
    description: "Example 29",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 84).toISOString(), // 84 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
    ],
  },
  {
    id: "30",
    description: "Example 30",
    url: "https://example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 87).toISOString(), // 87 hours ago
    postedBy: { id: "1", name: "Anonymous" },
    votes: [
      { user: { id: "2", name: "Anonymous" } },
      { user: { id: "3", name: "Anonymous" } },
      { user: { id: "4", name: "Anonymous" } },
      { user: { id: "5", name: "Anonymous" } },
      { user: { id: "6", name: "Anonymous" } },
      { user: { id: "7", name: "Anonymous" } },
      { user: { id: "8", name: "Anonymous" } },
      { user: { id: "9", name: "Anonymous" } },
    ],
  },
];
