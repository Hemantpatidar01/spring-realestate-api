@echo off
echo ============================================
echo  Deploy Hemant Patidar Portfolio to Vercel
echo ============================================
echo.
echo Step 1: Login (opens browser)
call npx vercel login
echo.
echo Step 2: Deploy to production
call npx vercel --prod
echo.
echo Done! Copy the URL shown above for your resume.
pause
