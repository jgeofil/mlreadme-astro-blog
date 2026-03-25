#!/usr/bin/env python3

import os

token = os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN')
if token:
    print(f"Token found in environment! Length: {len(token)}")
else:
    print("No token found.")
