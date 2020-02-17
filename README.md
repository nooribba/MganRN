# [MganRN - LKR Fam](https://github.com/nooribba/MganRN)

![version](https://img.shields.io/badge/version-0.8.0-blue.svg)  

Lee Kim Ryu Family App (React Native)

## Clone repository
git clone https://github.com/nooribba/MganRN.git

## Install
npm install

## Run
prepare emulator
npx react-native run-android

## Generate keystore
keytool -genkey -v -keystore mgan-release-key.keystore -alias mgan-key-alias -keyalg RSA -keysize 2048 -validity 100000

## Build apk
1. npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
2. cd android > gradlew assembleRelease -x bundleReleaseJsAndAssets
