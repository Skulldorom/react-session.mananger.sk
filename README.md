# react-session.mananger.sk

This is used in conjunction with a custom flask app in order to manage user sessions.

## Installation

```
npm install react-session-manager-sk
```

## Usage

```
<SessionManagerProvider
    userLoader={who} // function to get user data
    refreshToken={refresh} // function to refresh token
    AuthenticatedAxiosObject={axiosAuth} // axios object with token
    refreshTimer={config.server.tokenRefreshTimer} // time to refresh token
    dataRefresh={config.server.dataRefreshTimer} // time to refresh data
    appVersion={config.appVersion} // app version
    toastOptions={{
    icon: true,
    toastClassName: config.theme.Notification.ThemeNotifications
        ? config.theme.Notification.MaterialNotifications
        ? "custToast materialToast"
        : "custToast"
        : "",
    }}
    >
        <App />
</SessionManagerProvider>
```

## Testing using another project

### Linking react and react-dom

Link react and react-dom to the project you want to test with.

```
cd node_modules/react
npm link
```

```
cd node_modules/react-dom
npm link
```

Run the following in package root directory

```
npm link react react-dom
```
