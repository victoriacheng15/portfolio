#!/bin/bash

while true; do
  # Check the status of the PR
  gh pr checks
  sleep 5
done