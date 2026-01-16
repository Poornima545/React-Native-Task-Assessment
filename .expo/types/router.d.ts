/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/PostCard`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/usePosts`; params?: Router.UnknownInputParams; } | { pathname: `/services/api`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/PostCard`; params?: Router.UnknownOutputParams; } | { pathname: `/hooks/usePosts`; params?: Router.UnknownOutputParams; } | { pathname: `/services/api`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/PostCard${`?${string}` | `#${string}` | ''}` | `/hooks/usePosts${`?${string}` | `#${string}` | ''}` | `/services/api${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/PostCard`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/usePosts`; params?: Router.UnknownInputParams; } | { pathname: `/services/api`; params?: Router.UnknownInputParams; };
    }
  }
}
