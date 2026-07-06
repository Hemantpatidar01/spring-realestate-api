@echo off
title Deploy Portfolio to Vercel
color 0A
echo.
echo  ================================================
echo   DEPLOY YOUR PORTFOLIO TO VERCEL (2 minutes)
echo  ================================================
echo.
echo  Step 1: Login to Vercel (browser will open)
echo  ------------------------------------------------
call npx vercel login
echo.
echo  Step 2: Deploy to production
echo  ------------------------------------------------
call npx vercel --prod --yes
echo.
echo  ================================================
echo   COPY THE URL SHOWN ABOVE FOR YOUR RESUME!
echo   Example: https://portfolio-xxxxx.vercel.app
echo  ================================================
echo.
pause
