#!/bin/sh
function set_env() { echo ::set-env name=$1::$2; }
set_env name "hahah"
set_env git_url "https://github.com/10bits/github-actions-test"
set_env url $1
if [ $2 = 'google' ]; then
  echo "谷歌 yes"
else
  echo "百度 sb"
fi
