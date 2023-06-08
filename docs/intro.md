---
sidebar_position: 1
---

# Intro
Welcome to the official documentation for d1loop - an anonymous social networking app.


## 🚨 Notice
The project is still under heavy development, so it will take some time to publish the first release (or beta release) of **d1loop**. The *planned release date* is 1st July 2023 (which may be delayed due to school projects and Bagruts tests I need to do). You can check out [my Twitter](https://twitter.com/1itsrn) to see previews for the app and updates.


## Overview
d1loop is a mobile app designed to be the normal version of Twitter and it's similarities, without their junk and dumb features, and completely for free without any ads.

## Features
- **Privacy and Security**: d1loop prioritizes user privacy and implements robust security measures to protect user data.
- **Free speech, but censored**: Although d1loop supports free speech, we do have censored posts. For example, a post that contains offensive language or slurs is censored.

## Installation

To install d1loop app on your mobile phone, follow the steps below:

#### Android:
When the app will be released, you can download the `app-release.apk` file from the [Releases tab in the Github repository](https://github.com/d1loop/app/releases). This app won't be released to the Google Play Store (Because of the ID photos I need to send them to verify me as a developer, on top of one time 25$ payment).

#### iOS:
Apple requires me to pay up for a developer account to let iOS users install this app too. In the next few months, iOS 17 is going to be out, and Apple should make it able to install external applications outside of the App Store so it won't require me to pay 99$\year just to release this app for iOS users.

## Installing locally
Once the repository will be updated with the first beta\release of d1loop, you can install the app locally by following the steps below:

1. Cloning the repository:
```bash
git clone https://github.com/d1loop/app.git
```
2. Installing dependencies:
```bash
cd app
npm install
```
3. Running app:
```bash
npm run start
```

4. Run the app on local device:
Now you'll need to open the Expo Go app on your mobile device. You can lookup for the app in both Google Play Store and App Store to find that app. After installing this app you can scan the QR code that is in your terminal through the app. Read more about Expo Go [here](https://docs.expo.dev/get-started/expo-go/).