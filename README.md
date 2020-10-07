Chihau's App clone from 2020-2 IWG-101 Homework. The purpose of this repository is to show students basic concepts of React Native and React Navigation



## Prerequisites

- [Node JS](https://nodejs.org/es/) 12+
  
  - When installing, Node will ask to download "recommended tools". They're not neccesary for this example
  
- [Expo toolkit](https://expo.io/learn)

  - Install using your Command Tool

    ```sh
    npm install expo-cli --global
    ```

    --global allows to use the expo command from any path.

## Start from scratch 

- Create a empty folder
- Open terminal
  - Windows: Shift + Right Click and select *Open PowerShell Here*
  - Mac: Right Click folder and select *New Terminal at Folder*
- Run the following command:

```sh
expo init myNewProject
cd myNewProject
expo start
```

Where *myNewProject*  is the name of the new project. You can change it later

## Running the example 

- Download or clone this repository

- Open terminal in the project root folder following the above instructions

- Run the following command:

  ```sh
  npm start
  ```

- You can open the compiled APP in the following tools:

  - Android Emulator: Press **a** in the Expo terminal (Requires Android Studio and an Virtual device configured)
  - iOS Emulator: Press **i** in the Expo terminal (Requires OSX)
  - Android/iOS physical device:
    - Install expo app from:
      - [PlayStore](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_CL) (Android)
      - [AppStore](https://apps.apple.com/cl/app/expo-client/id982107779) (iOS)
    - Scan QR Code or Access metro Blunder from your phone (exp:// url)
    - Tip: Create an expo account and login in all your devices, it will speed up your developing process

Compile and Publish are out of the scope for this example.

## Recommended resources

- [React Native First Steps (English)](https://reactnative.dev/docs/getting-started)
- [React Navigation (English)](https://reactnavigation.org/docs/getting-started)
  - WARNING: This guide is **heavily** class-component focused, you need to understand Oriented Object Programming.
- [Introducing Hooks(Spanish)](https://es.reactjs.org/docs/hooks-intro.html)
  - Hooks are the perfect alternative to avoid using class-component to render objects
- [Can it be done in React Native? Youtube Series](https://www.youtube.com/c/wcandillon/playlists)
- [Udemy - The Complete React Native + Hooks Course [2020 Edition]](https://www.udemy.com/course/the-complete-react-native-and-redux-course/)
- [Udemy - The Modern Javascript Bootcamp Course (2020)](https://www.udemy.com/course/javascript-beginners-complete-tutorial/)

*TODO: Comment code*

