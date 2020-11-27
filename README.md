# [MganRN - LKR Fam](https://github.com/nooribba/MganRN)

![version](https://img.shields.io/badge/version-0.8.0-blue.svg)  

Lee Kim Ryu Family App (React Native)

## Clone repository
git clone https://github.com/nooribba/MganRN.git

## Install node module
npm install

## Run
execute emulator
npx react-native run-android

## Generate keystore
keytool -genkey -v -keystore mgan-release-key.keystore -alias mgan-key-alias -keyalg RSA -keysize 2048 -validity 100000

## Build apk
1. npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
2. cd android > gradlew assembleRelease -x bundleReleaseJsAndAssets


![LKR1](https://user-images.githubusercontent.com/40586079/100401686-87b95180-309d-11eb-896c-e0c4cdbd18b1.jpg)
![LKR2](https://user-images.githubusercontent.com/40586079/100401683-8720bb00-309d-11eb-9bf5-a34fbcfe112c.jpg)
![LKR3](https://user-images.githubusercontent.com/40586079/100401679-838d3400-309d-11eb-9014-4aa15deb6e5a.jpg)
