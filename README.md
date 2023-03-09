# React Native and Expo Local Setup

## Prerequisites

- Install Node/NPM
- Install git 
- Install IDE (Visual Studio Code)
- Installation Instructions: https://docs.expo.dev/get-started/installation/

## Creating a boiler plate Expo App (Skip this if you already have an App)

- `npx create-expo-app -t expo-template-blank-typescript` (Typescript) or `npx create-expo-app my-app` (Javascript)
- `cd my-app`
- New App Instructions: https://docs.expo.dev/get-started/create-a-new-app/
- Typescript Instructions: https://docs.expo.dev/guides/typescript/

## Running the Expo App

- `cd {to/your/project/directory}`
- `npx expo start`
- Take note of the terminal output. You should see a QR code as well as some commands
- Theres multiple ways with Expo to see the App running locally with live refresh: 
    - On your mobile device (iPhone/Android) via the Expo Go App (Scan QR Code with device)
    - In the browser on `http://localhost:19006/` (press `w` key)
    - On an iOS Simulator (Mac only) (press `i` key)
    - On an Android Studio Emulator (press `a` key)
- Configuration for each of these methods is below
- Expo CLI Docs: https://docs.expo.dev/workflow/expo-cli/

### Expo Go Setup

- Install Expo Go App on your mobile device
- When running the above `npx expo start` it will create a QR code in the terminal that you can scan with your iPhone/Android to run the App on your device via the Expo Go App (make sure your mobile device is on the same network as your development laptop)
- Any saved changes to your App code will auto reload the Expo Go App so you can see the changes in real time on your device
- Expo Go Docs: https://docs.expo.dev/workflow/expo-go/

### Browser Setup

- Ensure the `package.json` contains `react-dom`, `react-native-web`, `@expo/webpack-config` packages. If not run `npx expo install react-dom react-native-web @expo/webpack-config`
- `npx expo start` will serve the App on `http://localhost:19006/`
- Navigate to `http://localhost:19006/` by opening a browser to that address or by simply pressing the `w` key in your terminal session
- Any saved changes to your App code will auto reload the App so you can see the changes in real time in your browser
- Browser Setup Docs: https://docs.expo.dev/workflow/web/

### iOS Simulator Setup (Mac only)

- Install Xcode
- Install Xcode Command Line Tools
- **Note**: If you are on an M1 or M2 Mac (Apple Chip) then you need to run the following command `softwareupdate --install-rosetta` in order for the Expo Go App to work in the iOS Simulator. This is because the Expo Go App was built for older versions of Mac that use Intel based chips. If you dont do this step then the Expo Go App will just crash on the iOS Simulator
- `npx expo start`
- Navigate to the iOS Simulator by pressing the `i` key in your terminal session
- iOS Simulator Setup Docs: https://docs.expo.dev/workflow/ios-simulator/

### Android Studio Emulator

- Install Android Studio
- Install Android SDK Build-Tools
- If you are on macOS or Linux, add an environment variable pointing to the Android SDK location in ~/.bash_profile (or ~/.zshenv if you use Zsh):
```
[ -d "$HOME/Library/Android/sdk" ] && ANDROID_HOME=$HOME/Library/Android/sdk || ANDROID_HOME=$HOME/Android/Sdk
echo "export ANDROID_HOME=$ANDROID_HOME" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
```
- On macOS, you will also need to add platform-tools to your ~/.bash_profile (or ~/.zshenv if you use Zsh): 
```
[ -d "$HOME/Library/Android/sdk" ] && ANDROID_HOME=$HOME/Library/Android/sdk || ANDROID_HOME=$HOME/Android/Sdk
echo "export ANDROID_HOME=$ANDROID_HOME" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
```
- Reload the path environment variables by running:
```
source ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
```
- Setup a Virtual Device in Android Studio
    - On the Android Studio main screen, click "More Actions", then "Virtual Device Manager" 
    - Follow steps for creating a device
- `npx expo start`
- Navigate to the Android Studio Emulator by pressing the `a` key in your terminal session
- Android Emulator Setup Docs: https://docs.expo.dev/workflow/android-studio-emulator/

## Conclusion

- At this point you should have the app spun up and the ability to see live code changes with your mobile device (via Expo Go), the browser, iOS Simulator, and/or Android Studio Emulator

# Testing with Jest/Jest Expo

- Run all tests: `npm run test`
- Run all tests in watch mode: `npm run testWatch`
- Run tests for changed files (tracked by git): `npm run testChanged`
- Run tests for changed files (tracked by git) in watch mode: `npm run testWatchChanged`
- Code coverage will be output in the terminal as well as in `coverage/lcov-report/index.html` which can be opened up in any browser
- Expo Jest Docs: https://docs.expo.dev/guides/testing-with-jest/
- Jest CLI Docs: https://jestjs.io/docs/cli

# Linting

- Run the linter: `npm run lint`
- Run the linter and fix any issues: `npm run lintFix`