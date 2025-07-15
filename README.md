# 🌱 Plantly

**Plantly** is a simple yet beautiful **plant care app** built with **React Native** and **Expo**. It helps users:

- 🪴 Add and store plants
- ⏳ Set watering frequency
- ✅ Mark them as watered
- 🖼️ Choose custom plant images
- 📱 Navigate with bottom tabs
- 🎨 Enjoy a clean UI with gradients, custom fonts, and modals

---

## 🚀 Features

- 📆 **Track Watering Frequency**: Set how often each plant needs water
- 🪴 **Add, Store & List Plants**: Manage all your green buddies in one place
- 🖼️ **Image Picker**: Choose a photo from your device for each plant
- 🌈 **Custom UI**: Linear gradients, custom fonts, and polished design
- 💾 **Persisted State**: Store plant and onboarding data with `AsyncStorage`
- ✅ **Watering Tracker**: Mark plants as watered with a tap
- 🧭 **Bottom Tabs & Nested Navigation**: Organized via Expo Router
- 🌐 **Dynamic Routes**: Access detailed screens like `/plants/123`
- 🎯 **Full-Screen Modal**: For adding new plants

---

## 🧱 Tech Stack

| Category        | Library/Tool                     |
|----------------|----------------------------------|
| UI Framework   | [React Native](https://reactnative.dev) |
| Navigation     | [Expo Router](https://expo.github.io/router) |
| State Storage  | `AsyncStorage`                  |
| Image Picker   | `expo-image-picker`              |
| Gradient UI    | `expo-linear-gradient`           |
| State Logic    | Zustand               |
| Linting/Format | ESLint + Prettier (optional)     |

---

## 📂 Folder Structure

Organized by navigation logic and grouping strategy using Expo Router's App Directory:

```bash
/app
│
├── _layout.tsx                # Global stack layout (root navigator)
├── onboarding.tsx             # Onboarding screen (shown once)
├── add-plant.tsx              # Full-screen modal for adding a new plant
│
├── (tabs)/                    # Bottom tab layout group
│   ├── _layout.tsx            # BottomTabs navigator
│   ├── profile.tsx            # Profile tab screen
│   │
│   └── (home)/                # Stack group under the 'Home' tab
│       ├── _layout.tsx        # Stack navigator for Home tab
│       ├── index.tsx          # Home screen - lists all plants
│       └── plants/
│           └── [plantid].tsx  # Dynamic plant detail screen
```

---

## 📦 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/sayyidmarvan/plantly.git
cd plantly
npm install
```

### 2. Run the Project Locally

```bash
npx expo start
```

Then scan the QR code using the **Expo Go** app on your iOS or Android device.

---

### 📥 Download Build (APK)

You can download the latest Android build of **Plantly** directly from Expo:

👉 [Download APK](https://expo.dev/accounts/sayyidmarvan/projects/plantly/builds/1a432503-c30b-4e75-8c43-46b2bef55ab9)

> ⚠️ You may need to allow installs from unknown sources on your device to install the APK.

---

