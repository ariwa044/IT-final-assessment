# setup.ps1
if (!(Test-Path -Path "assets")) {
    New-Item -ItemType Directory -Path "assets"
}

# Create placeholder files
"placeholder" | Out-File -FilePath "assets/favicon.png"
"placeholder" | Out-File -FilePath "assets/icon.png"
"placeholder" | Out-File -FilePath "assets/splash.png"
"placeholder" | Out-File -FilePath "assets/adaptive-icon.png"

# Install missing dependencies
npm install expo-constants --legacy-peer-deps
