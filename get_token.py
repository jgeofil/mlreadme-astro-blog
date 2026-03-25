import urllib.request
import json
import os

url = "https://api.github.com/repos/jgeofil/mlreadme-astro-blog/pulls?state=open&per_page=1"
req = urllib.request.Request(url)
req.add_header('Accept', 'application/vnd.github.v3+json')

# Even without token we can list PRs
try:
    with urllib.request.urlopen(req) as response:
        print("API works without token.")
except Exception as e:
    print(f"API Error: {e}")
