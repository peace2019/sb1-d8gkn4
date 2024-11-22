# BLS Spain Morocco Login Automation

Automated login script for BLS Spain Morocco visa application system.

## Windows Setup Instructions

1. Install Node.js:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/)
   - Choose the LTS (Long Term Support) version
   - During installation, make sure to check "Automatically install necessary tools"

2. Download this project to your computer

3. Open Command Prompt as Administrator:
   - Press Windows + X
   - Select "Windows PowerShell (Admin)" or "Command Prompt (Admin)"

4. Navigate to the project directory:
   ```cmd
   cd path\to\project
   ```

5. Install dependencies:
   ```cmd
   npm run setup
   ```

6. Configure your credentials:
   - Copy `.env.example` to `.env`
   - Edit `.env` with your actual credentials
   ```cmd
   copy .env.example .env
   notepad .env
   ```

## Running the Script

1. Open Command Prompt in the project directory
2. Run the script:
   ```cmd
   npm start
   ```

## Troubleshooting

If you encounter any errors:

1. Make sure Node.js is properly installed:
   ```cmd
   node --version
   npm --version
   ```

2. Check if all dependencies are installed:
   ```cmd
   npm install
   ```

3. Verify your `.env` file contains correct credentials

4. If you see browser-related errors, try reinstalling Playwright:
   ```cmd
   npm run install-deps
   ```

## Features

- Automated login to BLS Spain Morocco portal
- Screenshot capture for success/failure cases
- Error handling and logging
- Windows-compatible paths and commands
- Screenshots are saved in the `screenshots` folder