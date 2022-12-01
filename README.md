# Setting up

First, follow https://reactnative.dev/docs/environment-setup

Then,
1. Clone this repo
2. cd reponame
3. npm install
4. npx react-native run-android 

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/build/main/assets/index.android.bundle --assets-dest android/app/src/main/res
