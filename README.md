# OpenUp Demos and Examples

### Examples:
- [eslint-react](./eslint-react) - default eslint & prettier config with husky pre-commit hooks (typescript and testing library support require additional plugins - found in `eslint-config-react-app` `peerDependencies`)
- [sls-webpack-eslint](./sls-webpack-eslint) - simple webpack and eslint config for use with serverless framework (git hooks can be set up in a similar way to react example, in monorepos they need to be configured at the root of the project)
- [cra-tailwind](./cra-tailwind) - default `create-react-app` example with styles redone using tailwind (may be slightly different on some browsers as tailwind normalizes default browser styles and cra example does not)
- [vite-react-tailwind](./vite-react-tailwind) - same as the example above except [`vite`](https://github.com/vitejs/vite) is used instead of `create-react-app`. Vite provides faster HMR and builds but since it is less mature may cause some unexpected bugs down the line.
