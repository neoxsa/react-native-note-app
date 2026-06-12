#!/bin/bash

echo "Setting up ADB reverse proxy..."
/usr/bin/adb reverse tcp:8081 tcp:8081
/usr/bin/adb reverse tcp:8097 tcp:8097

echo "Starting Expo..."
npx expo start
