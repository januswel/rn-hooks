#!/bin/sh

set -eux

ROOT=$(cd "$(dirname "$0")/.."; pwd)
cd "${ROOT}"
pwd

if [ ! -d ./node_modules ]; then
  echo 'Run "yarn install" before running this script'
  exit 1
fi

TMP=$(mktemp -d)
#trap 'rm -rf ${TMP}' EXIT

ZIP="./bin/react-native.zip"

unzip -d "${TMP}/" ${ZIP}
cp -rf "${TMP}"/react-native/* ./node_modules/react-native/Libraries/Renderer/
