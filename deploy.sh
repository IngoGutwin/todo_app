# build
yarn build

# navigate into the build output directory
cd dist

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ingogutwin/todo_app.git main:gh-pages

cd -