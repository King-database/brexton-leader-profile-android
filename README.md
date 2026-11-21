# BREXTON Leaders Digital Profile — Android source

This is a separate Capacitor Android wrapper for the existing Leaders Digital Profile web service.

## App identity
- Display name: BREXTON Leaders
- Android application ID: `ke.co.brexton.leadersprofile`
- Start URL: `https://public-figure.hatchable.site/products/leaders-profile/`
- Requires an internet connection.

## Build the APK with GitHub Actions
1. Create a **new, separate** GitHub repository named `brexton-leaders-profile-android`.
2. Upload the contents of this ZIP to the repository root (not the ZIP file itself).
3. Commit the files to the `main` branch.
4. Open the repository's **Actions** tab.
5. Select **Build BREXTON Leaders Android APK** and choose **Run workflow** (or wait for the push build).
6. Open the completed workflow run, scroll to **Artifacts**, and download `brexton-leaders-profile-debug-apk`.
7. Extract the artifact ZIP; it contains `app-debug.apk`. Transfer it to the Android phone and install it.

## Important limitations
- This package is source plus an automated build workflow; it is **not itself an APK**.
- It creates a debug APK for testing. A signed release APK/AAB needs a signing key and protected GitHub secrets.
- Firebase Cloud Messaging is not configured here. Android notification permission is declared, but push delivery and the in-app permission prompt still need a Leaders Profile-specific Firebase setup and testing.
- Login, registration and platform data remain online and use the existing hosted service.
- The existing eRealty Android project and its `google-services.json` are intentionally not reused.
- The remote hosted website is loaded in the app WebView; external authentication flows and file/photo handling must be tested on a physical Android device before production release.
