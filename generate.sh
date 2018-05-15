rm -rf ./dist
npm run build
cd ./dist
yarn install
yarn ios --reset-cache