## Table of contents

- About the Project
- Requirements
<!-- - Recommended modules -->
- Installation
<!-- - Configuration -->
- Troubleshooting
- FAQ
- Maintainers

## About the Project

## Requirements

## Installation

    - Install Expo
    ```
    npm i -g expo-cli
    ```

    1. To run the application
        ```
        npx expo start
        ```
    2. If using ios, open ios simulator
        ```
        open -a Simulator
        ```
    3. Install React Navigation
        ```
        npm install @react-navigation/native
        ```
        ```
        npx expo install react-native-screens react-native-safe-area-context
        ```
        ```
        npm install @react-navigation/bottom-tabs
        ```
    4. Install [Swiper Library](https://github.com/leecade/react-native-swiper?tab=readme-ov-file)
        ```
        npm i react-native-swiper --save
        ```

## Troubleshooting

    - When installing Xcode, expo doesn't recognize that installment is complete, use this
    ```
    sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
    ```
