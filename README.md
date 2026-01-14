# random_weapon_bingo_NW

## how to build

<!-- jsのコンパイル -->
npx webpack --config webpack.prod.js
<!-- scssのコンパイル -->
npx sass template/css/style.scss template/css/style.min.css --style=compressed
<!-- まとめる -->
php html_template/make.php


## how to publish

git checkout -b BRANCH-NAME
git add .
git commit -m "MESSAGE"
git push -u origin BRANCH-NAME

github 上で pull request を出して merge