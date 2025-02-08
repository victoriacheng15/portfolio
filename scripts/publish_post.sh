#!/bin/bash

cd "src/content/blog" || exit

tomorrow=$(date -u -d "tomorrow" +%Y-%m-%d)

for file in *.md; do

  file_date=$(grep '^date:' "$file" | awk '{print $2}' | tr -d '"')

  if [[ "$file_date" == "$tomorrow" ]]; then
    echo "Processing $file..."

    sed -i '/^draft:/d' "$file"
  fi

done