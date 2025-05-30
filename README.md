# RN Meals App

A React Native application for browsing and favoriting meals, built with Expo, React Navigation, and Redux.

## Tech Stack

- **React Native**: Cross-platform mobile app development.
- **Expo**: Simplifies React Native development and deployment.
- **Redux**: State management for favorites.
- **React Navigation**: Stack and Drawer navigation.
- **TypeScript**: Type safety and improved developer experience.
- **React Native Paper & Vector Icons**: UI components and icons.

## Features

- Browse meal categories and meals.
- View detailed information about each meal.
- Mark/unmark meals as favorites.
- Drawer navigation for easy access to categories and favorites.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/fabriciohsilva/rn-meals-app.git
   cd rn-meals-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn
   ```

3. **Start the Expo development server:**

   ```sh
   npx expo start
   ```

4. **Run on your device:**
   - Use the Expo Go app on your iOS/Android device to scan the QR code.
   - Or run on an emulator/simulator from the Expo CLI.

## Configuration

No special configuration is required for development.  
If you wish to use custom icons or fonts, follow the [Expo documentation](https://docs.expo.dev/) for additional setup.

## Folder Structure

- `/screen` - App screens (Categories, Meals Overview, Meal Detail, Favorites)
- `/components` - Reusable UI components
- `/store` - Redux store and slices
- `/data` - Static meal data

## License

MIT

---

**Happy coding!**
