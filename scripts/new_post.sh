#!/bin/bash

echo "Enter the name of the post branch: "
read -r post_branch

if [[ -n "$post_branch" ]]; then
  git switch -c post/"$post_branch"
else
  echo "no input provided, skipping the git branch command."
fi

cd src/content/blog || exit

echo "Enter the title of the post: "
read -r title
echo "Enter the description of the post: "
read -r description
echo "Enter tags: "
read -r tags
echo "Enter month: "
read -r mm
echo "Enter day: "
read -r dd

slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr -d '-' | sed 's/ \{1,\}/ /g' | tr -d ':' | sed 's/ \+/-/g')

year=$(date +%Y)
month=${mm:-$(date +%m)}
day=${dd:-$(date +%d)}

date=$year-$month-$day

touch $slug.md
echo "https://victoriacheng15.vercel.app/blog/$slug"


cat <<EOF > $slug.md
---
title: "$title"
description: "$description"
date: $date
tags: [$tags]
draft: true
---
EOF
