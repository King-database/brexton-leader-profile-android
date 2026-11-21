# BREXTON Leaders Android branding/build patch

This patch adds an icon-only BREXTON Leaders launcher icon, a branded splash screen, and the Android asset-generation steps to the GitHub Actions build.

## Apply to the existing repository
1. Upload the contents of this patch folder to the root of `King-database/brexton-leader-profile-android` and choose **Replace** for the existing `package.json`, `capacitor.config.json`, and `.github/workflows/android-apk.yml`.
2. Add the new `assets/brand-icon.svg`, `assets/brand-splash.svg`, and `scripts/prepare-assets.cjs` files.
3. Keep the existing `www` folder and other project files.
4. Commit the changes to `main`.
5. Open **Actions** and run **Build BREXTON Leaders Android APK**.

The workflow converts the SVG artwork into the source PNGs, generates Android launcher icon densities and splash resources using Capacitor Assets, syncs the Splash Screen plugin, and builds the APK.

The app still loads the hosted Leaders Digital Profile website and requires internet access. This is a debug APK workflow; push notifications still need their own Firebase setup and device testing.
