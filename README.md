# Blue Shield California 


## Environments
- Preview: https://main--blue-shield-ca--lizbross.aem.page/
- Live: https://main--blue-shield-ca--lizbross.aem.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `door-opener-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `blue-shield-ca` directory in your favorite IDE and start coding :)
