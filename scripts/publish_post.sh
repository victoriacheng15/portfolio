#!/bin/bash

cd "src/content/blog" || exit

today=$(date -u +%Y-%m-%d)

echo $(date -u +"%Y-%m-%d %T %Z")
echo "===================="
echo "Script started"
echo -e "====================\n"

# Find all files with the draft line
draft_files=$(grep -l '^draft:' *.md)

if [[ -z "$draft_files" ]]; then
  echo -e "No draft files found.\n"
  exit 0
else
  echo -e "Found draft files. Processing...\n"

  # Processing each draft file
  for file in $draft_files; do
    file_date=$(grep '^date:' "$file" | awk '{print $2}' | tr -d '"')

    if [[ "$file_date" == "$today" ]]; then
      echo "Processing $file..."
      sed -i '/^draft:/d' "$file"
      echo "Publishing $file..."
    else
      echo -e "\nNot time yet, Skipping $file..."
    fi
  done
fi

echo -e "\n===================="
echo "Script completed."
echo "===================="