@echo off
if not exist assets mkdir assets
echo placeholder > assets\favicon.png
echo placeholder > assets\icon.png
echo placeholder > assets\splash.png
echo placeholder > assets\adaptive-icon.png
npm install expo-constants --legacy-peer-deps
