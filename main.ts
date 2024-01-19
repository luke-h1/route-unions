const routes = {
  posts: ["{id}", "all"],
  user: ["{id}", "all"],
} as const;

type Routes = typeof routes;

type PossibleUrls = {
  [K in keyof Routes]: `/${K}/${Routes[K][number]}`;
}[keyof Routes];

type Example = Record<PossibleUrls, {}>;
