## F URL

[Unsplash Images](https://www.figma.com/file/O2MaAAlr4nznh7m53azatL/Unsplash-images?node-id=0%3A1&t=cYDOCgqOs9IX2If0-1)

## Steps

#### Setup

- npm install
- npm run dev

#### Initial Structure and Global Context

Create three components - ThemeToggle, SearchForm and Gallery. Render all of them in App.jsx, and setup global context.


#### Dark Theme Class

In the toggleDarkTheme add logic to add and remove .dark-theme class to body element based on isDarkTheme value.

#### Dark Theme - CSS

Create CSS variables for the background color and text color for both dark mode and normal mode, as well as a CSS variable for the dark mode transition.

```css
:root {
  /* dark mode setup */
  --dark-mode-bg-color: #333;
  --dark-mode-text-color: #f0f0f0;
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);

  --darkModeTransition: color 0.3s ease-in-out, background-color 0.3s
      ease-in-out;
}

.dark-theme {
  --textColor: var(--dark-mode-text-color);
  --backgroundColor: var(--dark-mode-bg-color);
}

body {
  transition: var(--darkModeTransition);
  background: var(--backgroundColor);
  color: var(--textColor);
}
```

#### User Prefers Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --textColor: var(--dark-mode-text-color);
    --backgroundColor: var(--dark-mode-bg-color);
  }
}
```

#### SearchForm Structure

Create a form with an input and a submit button. The input should have the following attributes: type='text', name='search', placeholder='car', and className='form-input search-input'. When the user submits the form, access (for now log)the input value.



[Unsplash Website](https://unsplash.com/)

#### Sign Up for an Unsplash Account

[Unsplash API](https://unsplash.com/developers)




#### Install and Setup React Query in Gallery Component

React Query is a library that can be used to handle API requests in React applications. To fetch images from the Unsplash API, you will need to install and set up React Query in your Gallery component.

#### Install and Setup React Query Dev Tools

React Query dev tools provide a way to inspect and debug React Query data and caching behavior. To use this tool, you will need to install and set up the React Query dev tools in your application.

#### Create a searchValue State Value in Context.jsx

In order to implement search functionality in your application, you will need to create a state value to store the user's search input. This can be done in a context file, such as context.jsx.

&&

After setting up React Query and creating the searchValue state value, you will need to modify the useQuery function to fetch images based on the user's search input.



#### Setup Local Storage to Store isDarkTheme State Value

To persist the user's preferred theme across sessions, you can store the isDarkTheme state value in local storage. This will allow the theme to be preserved even if the user closes and reopens the application.

#### Setup ENV Variables in VITE


### React Query Info

By default, useQuery caches the results of the API request for a certain amount of time. This can improve the performance of your application by reducing the number of requests made to the API.


The queryKey array is used by useQuery to identify which data the query is fetching. When the queryKey array changes, useQuery assumes that the data being fetched has changed, and it re-runs the queryFn to fetch the updated data.

In this case, searchTerm is the user's search input, and it is used to modify the API request URL. By including searchTerm in the queryKey array, you are telling useQuery to re-run the queryFn whenever the user's search input changes, in order to fetch updated data based on the new search term.



#### Vite ENV Vars

- .env : must be included in .gitignore
