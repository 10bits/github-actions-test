#!/bin/sh
function set_env() { echo ::set-env name=$1::$2; }
set_env name hahah
echo "env name:$name"
