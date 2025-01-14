cd /d %~dp0
REM ************************************************************
REM IMPORTANT!
REM Memba.Blog and Kidoju.WebApp are the original projects where any modifications
REM of locked read-only files should be completed.
REM ************************************************************

REM ------------------------------------------------------------
REM Graphics
REM ------------------------------------------------------------

ATTRIB -R .\graphics\*
REM COPY ..\..\Kidoju\Kidoju.Webapp\graphics\*.ai .\graphics /Y
REM ATTRIB +R .\graphics\*.ai
COPY ..\..\Kidoju\Kidoju.Webapp\graphics\*.ico .\graphics /Y
ATTRIB +R .\graphics\*.ico
COPY ..\..\Kidoju\Kidoju.Webapp\graphics\*.png .\graphics /Y
ATTRIB +R .\graphics\*.png
REM COPY ..\..\Kidoju\Kidoju.Webapp\graphics\*.psd .\graphics /Y
REM ATTRIB +R .\graphics\*.psd
COPY ..\..\Kidoju\Kidoju.Webapp\graphics\*.svg .\graphics /Y
ATTRIB +R .\graphics\*.svg
REM COPY ..\..\Kidoju\Kidoju.Webapp\graphics\*.ttf .\graphics /Y
REM ATTRIB +R .\graphics\*.ttf

REM ATTRIB -R .\webapp\public\apple*.png
REM COPY .\graphics\apple*.png .\webapp\public /Y
REM ATTRIB +R .\webapp\public\apple*.png

REM ATTRIB -R .\webapp\public\favicon.ico
REM COPY .\graphics\favicon.ico .\webapp\public /Y
REM ATTRIB +R .\webapp\public\favicon.ico

REM ------------------------------------------------------------
REM Javascript files
REM ------------------------------------------------------------

REM Copy Javascript files
XCOPY ..\..\Memba\Memba.Blog\js .\js /C /E /I /R /Y
ATTRIB +R .\js\*.* /S

REM ------------------------------------------------------------
REM Styles
REM ------------------------------------------------------------

REM Copy styles
XCOPY ..\..\Memba\Memba.Blog\styles .\styles /C /E /I /R /Y
COPY .\graphics\kidoju.home.jpg .\styles\images\jumbotron.jpg
ATTRIB +R .\styles\*.* /S

REM ------------------------------------------------------------
REM Tests
REM ------------------------------------------------------------

REM Copy tests
XCOPY ..\..\Memba\Memba.Blog\test .\test /C /E /I /R /Y
ATTRIB +R .\test\*.* /S

REM ------------------------------------------------------------
REM Web modules (webpack)
REM ------------------------------------------------------------

REM Copy web modules
XCOPY ..\..\Memba\Memba.Blog\web_modules .\web_modules /C /E /I /R /Y
ATTRIB +R .\web_modules\*.* /S

REM ------------------------------------------------------------
REM Web Application
REM ------------------------------------------------------------

ATTRIB -R .\webapp\*.* /S
XCOPY ..\..\Memba\Memba.Blog\webapp .\webapp /C /E /I /R /Y /EXCLUDE:excludelist.txt
COPY ..\..\Kidoju\Kidoju.Webapp\webapp\views\common.ejs .\webapp\views /Y
COPY ..\..\Kidoju\Kidoju.Webapp\webapp\views\head.ejs .\webapp\views /Y
COPY ..\..\Kidoju\Kidoju.Webapp\webapp\views\logo.ejs .\webapp\views /Y
ATTRIB +R .\webapp\*.* /S
ATTRIB -R .\webapp\cache\*.*
ATTRIB -R .\webapp\config\*.json
ATTRIB -R .\webapp\public\build\*.*

REM ------------------------------------------------------------
REM Root files
REM ------------------------------------------------------------

REM copy all dot files
ATTRIB -R .\.*
COPY ..\..\Memba\Memba.Blog\.* .\ /Y
ATTRIB +R .\.*

REM build.cmd and BUILD.md
ATTRIB -R .\build.*
COPY ..\..\Memba\Memba.Blog\build.* .\ /Y
ATTRIB +R .\build.*

REM TODO Coverage

REM Dockerfile
ATTRIB -R .\Dockerfile
COPY ..\..\Memba\Memba.Blog\Dockerfile .\ /Y
ATTRIB +R .\Dockerfile

REM gruntfile.js
ATTRIB -R .\gruntfile.js
COPY ..\..\Memba\Memba.Blog\gruntfile.js .\ /Y
ATTRIB +R .\gruntfile.js

REM LICENSE
ATTRIB -R .\LICENSE-GPLv3
COPY ..\..\Memba\Memba.Blog\LICENSE-GPLv3 .\ /Y
ATTRIB +R .\LICENSE-GPLv3

REM postcss.config.js
ATTRIB -R .\postcss.config.js
COPY ..\..\Memba\Memba.Blog\postcss.config.js .\ /Y
ATTRIB +R .\postcss.config.js

REM setup.cmd
ATTRIB -R .\setup.cmd
COPY ..\..\Memba\Memba.Blog\setup.cmd .\ /Y
ATTRIB +R .\setup.cmd

REM UPDATE.md
ATTRIB -R .\UPDATE.md
COPY ..\..\Memba\Memba.Blog\UPDATE.md .\ /Y
ATTRIB +R .\UPDATE.md

REM watch.cmd
ATTRIB -R .\watch.cmd
COPY ..\..\Memba\Memba.Blog\watch.cmd .\ /Y
ATTRIB +R .\watch.cmd

REM webpack
ATTRIB -R .\webpack.config.js
COPY ..\..\Memba\Memba.Blog\webpack.config.js .\ /Y
ATTRIB +R .\webpack.config.js

REM selenium
ATTRIB -R .\wdio.conf.js
COPY ..\..\Memba\Memba.Blog\wdio.conf.js .\ /Y
ATTRIB +R .\wdio.conf.js
