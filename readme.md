![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# MyUW App Bar

This is a material top app bar built using the Stencil standalone Web Component starter project.


## Getting Started

Include the script in your project:

```html
<script src="https://unpkg.com/@myuw-web-components/myuw-app-bar@0.1.1/dist/myuw-app-bar.js">
```

Use the component's HTML tag wherever you want:

```HTML
<myuw-app-bar
    themeName="MyUW"
    themeUrl=""
    appName=""
    appUrl=""
    background=""
    color=""
>
</myuw-app-bar>
```

### Configurable properties

- **themeName (theme-name):** Sets the theme/portal name (defaults to "MyUW")
- **themeUrl (theme-url):** Sets then URL to go to when user clicks the theme name
- **appName (app-name):** Sets the app name (e.g. "Bucky Backup"), empty by default
- **appUrl (app-url):** Sets then URL to go to when user clicks the app name
- **background:** Sets the top bar's background color (defaults to UW-Madison branding -- #c5050c)
- **color:** Sets the top bar's text color (defaults to white)

### Configuration / child components

Use the named `<slot>` tags to include child components of the top-app-bar:

```html
<myuw-app-bar>
    <your-navigation-drawer-component slot="myuw-navigation"></your-navigation-drawer-component>
    <your-notifications-component slot="myuw-notifications"></your-notifications-component>
</myuw-app-bar>
```

**Available slots:**
- **myuw-navigation**: Insert the `<myuw-navigation-drawer>` component
- **myuw-help**: Insert the `<myuw-help-and-feedback>` component
- **myuw-notifications**:  Insert the `<myuw-notifications>` component
- **myuw-profile**: Insert the `<myuw-profile>` component

*Note: Child components are a WIP*