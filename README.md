# XEND Finance App — Weekend Assignment

## Project Structure

```
app/
├── index.tsx                  ← Redirects to (auth)/welcome
├── _layout.tsx                ← Root layout: (auth) stack above (tabs) stack
├── (auth)/
│   ├── _layout.tsx
│   ├── welcome.tsx            ← Welcome screen with 3 sign-in options
│   ├── email.tsx              ← Email input screen
│   └── login.tsx              ← Password + login screen
└── (tabs)/
    ├── _layout.tsx            ← Custom tab bar injected here
    ├── index.tsx              ← Home screen
    ├── wallet.tsx             ← Wallet / Asset portfolio
    ├── referral.tsx           ← Referral screen
    ├── plans.tsx              ← Savings plans
    └── account.tsx            ← More / Account screen

constants/
└── xend-theme.ts              ← Colors, radii, spacing tokens

components/
└── xend/
    ├── LabeledField.tsx       ← Reusable text input with icon
    ├── PrimaryButton.tsx      ← navy / blue / outline button variants
    ├── XendLogo.tsx           ← Brand logo component
    ├── SupportChatButton.tsx  ← Floating chat icon button
    ├── CustomTabBar.tsx       ← Full custom bottom tab bar with FAB
    └── TrustFooter.tsx        ← "Backed by / Insured by" footer
```

## Setup Instructions

1. **Create a new Expo project** (if you don't have one):
   ```bash
   npx create-expo-app myApp --template blank-typescript
   cd myApp
   ```

2. **Copy files** from this zip into your project:
   - Copy `constants/xend-theme.ts` → your `constants/` folder
   - Copy all files in `components/xend/` → your `components/xend/` folder
   - Copy all files in `app/` → your `app/` folder

3. **Install required packages**:
   ```bash
   npx expo install expo-router expo-haptics @expo/vector-icons react-native-safe-area-context
   ```

4. **Run the app**:
   ```bash
   npx expo start
   ```

## Navigation Flow
- App starts → `app/index.tsx` → redirects to `(auth)/welcome`
- welcome → email → login → replaces to `(tabs)` (home)
- Tab bar has 5 tabs: Home, Wallet, Referral (FAB), Plans, More
