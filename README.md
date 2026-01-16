# React Native Task Assessment

# Objective
A small React Native application that:
- Fetches and displays posts from JSONPlaceholder - "https://jsonplaceholder.typicode.com/posts"
- Provides search functionality with instant filtering
- Saves search history using AsyncStorage
- Handles errors gracefully

# Features
- Fetch & display posts with FlatList
- Search posts by title 
- Persist search text using AsyncStorage
- Auto-fill saved search on app restart
- Error handling for:
  - No internet / API failure
  - Empty search results
- Bonus features:
  - Loading indicator
  - Pull-to-refresh
  - Reusable `<PostCard />` component
  - Clean folder structure

# Tech Stack
- **React Native**: 0.73.x
- **AsyncStorage**: `@react-native-async-storage/async-storage`