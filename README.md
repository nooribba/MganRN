# Mgan

## clone repository
git clone https://github.com/nooribba/MganRN.git

## install
npm install

## run
prepare emulator
npx react-native run-android

## generate keystore
keytool -genkey -v -keystore mgan-release-key.keystore -alias mgan-key-alias -keyalg RSA -keysize 2048 -validity 100000

## build apk
1. react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
2. cd android > gradlew assembleRelease -x bundleReleaseJsAndAssets
