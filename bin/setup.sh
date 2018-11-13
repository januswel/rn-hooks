#!/bin/sh

set -eux

ROOT=$(cd "$(dirname "$0")/.."; pwd)
cd "${ROOT}"
pwd

if [ ! -d ./node_modules ]; then
  echo 'Run "yarn install" before running this script'
  exit 1
fi

cp -rf ./bin/Renderer/* ./node_modules/react-native/Libraries/Renderer/
