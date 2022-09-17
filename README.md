# Telescope Dashboard React App

[![Build Status](https://github.com/RH-Telescope/dashboard-react-app/workflows/CI/badge.svg?branch=main)](https://github.com/RH-Telescope/dashboard-react-app/actions?workflow=CI)
 [![Docker Repository on Quay](https://quay.io/repository/telescope/dashboard-react-app/status "Image Repository on Quay")](https://quay.io/repository/telescope/dashboard-react-app)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Installation on OpenShift

This will deploy the latest version of the app that has been published to quay.io, to namespaces called `dashboard-react-app-dev` and `dashboard-react-app-prod`. See below on how to deploy using a different version or namespace.

1. Clone this repository
2. `cd dashboard-react-app`
3. Install the OpenShift GitOps operator using the OperatorHub and default settings.
4. Grant serviceaccount appropriate permissions `oc adm policy add-role-to-user admin system:serviceaccount:openshift-gitops:openshift-gitops-argocd-application-controller -n openshift-gitops`
5. `oc create -f argocd-apps/ -n openshift-gitops`

## Deploying to Production

You will need credentials with permission to push to the production Telescope quay repo.

1. `buildah bud -t quay.io/telescope/dashboard-app-react:latest .`
2. `podman push quay.io/telescope/dashboard-app-react:latest`
3. `oc delete po -l app=dashboard-react-app-deploy` -n dashboard-app-react-prod # Force OpenShift to pull a new version of the app

### Deploying to Development

You will need an image repository to push to, and credentials for it. You can create your own in quay.io, or use the internal OpenShift registry.

1. `buildah bud -t quay.io/<your user>/dashboard-app-react:<your tag> .`
2. `podman push quay.io/<your user>/dashboard-app-react:<your tag>`
3. Push a change to the [the GitOps repo](https://github.com/RH-Telescope/dashboard-react-app-ops/blob/main/charts/values-DEV.yaml#L3`), setting the `image.tag` field to match the tag you used in the podman push command.
4. `oc delete po -l app=dashboard-react-app-deploy` -n dashboard-app-react-dev # Force OpenShift to pull a new version of the app
