# TallyGo React Native Reference App

This reference app is provided to demonstrate how to use the [TallyGo SDK](https://tallygo.com) with React Native.

This project is compatible with both iOS and Android and will run on either kind of device.

## Prerequisites

Follow the [React Native getting started guide](https://facebook.github.io/react-native/docs/getting-started.html) (click 'Building Projects with Native Code') to install the needed dependencies:

* Node.js
* NPM
* Watchman (recommended)
* react-native-cli

### iOS

In addition to the above, you will need:

* Xcode
* [Cocoapods](https://cocoapods.org)

### Android

TBD

## Setup

1. In Terminal, `cd` to the reference app, and run `npm install`.

2. Follow the iOS and/or Android instructions below, depending on which platforms you need to support.

### iOS

1. In Terminal, `cd` to the `ios` folder within the reference app folder, and then run `pod install` before you open the project for the first time.

2. In Xcode, open `AppDelegate.m` and paste your TallyGo access token. If you don't have an access token yet, [get one here for free](https://tallygo.com/signup). The app will not run without a valid access token.

3. Compile and run as normal for an iOS app.

### Android

TBD

## Next steps

The TallyGo SDK is provided as a [native Objective-C SDK for iOS](https://github.com/tallygo/TallyGoKit), and a [native Java SDK for Android](https://github.com/tallygo/TallyGoAndroid). You can use either one, or both, depending on which platforms you need to support.

Because the TallyGo SDKs are platform-specific, and React Native is cross-platform, additional 'bridging' code must be written in order to use TallyGo SDK functionality from within React Native. You can see an example in this reference app in the `TallyGoNativeBridge` class, which exists in both the `ios` and the `android` subfolders (where it is written in Objective-C and Java, respectively).

In order to make further use of the SDK, beyond what is shown in the reference app, you will need to write more bridging code. Check out the [React Native docs on this subject](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html) for more information.

## More examples

This reference app has just a few examples to demonstrate how to use our SDK specifically with React Native. In general, you can also use any of the Objective-C or Java examples in your React Native app. So if you're looking for more, be sure to also check out our [iOS Reference App](https://github.com/tallygo/TallyGo-iOS-Reference-App) and our [Android Reference App](https://github.com/tallygo/TallyGo-Android-Reference-App). You can also find explanations for how all of these examples work on our [documentation site](https://tallygo.com/docs/ios).
