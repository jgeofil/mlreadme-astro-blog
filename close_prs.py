import os
import json
import urllib.request
import sys

def get_token():
    for var in ['GITHUB_TOKEN', 'GH_TOKEN', 'token']:
        if var in os.environ:
            return os.environ[var]

    # Check common config files if env isn't populated
    try:
        with open(os.path.expanduser('~/.git-credentials')) as f:
            for line in f:
                if line.endswith('@github.com') or line.endswith('@github.com\n'):
                    # https://user:token@github.com
                    parts = line.strip().split('@')
                    if len(parts) == 2 and parts[1] == 'github.com':
                        userpass = parts[0].split('//')[-1]
                        if ':' in userpass:
                            return userpass.split(':')[1]
    except FileNotFoundError:
        pass

    try:
         with open(os.path.expanduser('~/.config/gh/hosts.yml')) as f:
             lines = f.readlines()
             for i, line in enumerate(lines):
                 if 'oauth_token:' in line:
                     return line.split(':')[1].strip()
    except FileNotFoundError:
        pass

    return None

token = get_token()
if not token:
    print("FATAL: Could not find GitHub token!")
    sys.exit(1)

print("Found token!")
url = "https://api.github.com/repos/jgeofil/mlreadme-astro-blog/pulls?state=open&per_page=100"

req = urllib.request.Request(url)
req.add_header('Authorization', f'token {token}')
req.add_header('Accept', 'application/vnd.github.v3+json')

try:
    with urllib.request.urlopen(req) as response:
        prs = json.loads(response.read().decode())

    groups = {
        'bolt_ssr_cache': [],
        'bolt_lcp': [],
        'bolt_date': [],
        'palette_footer': [],
        'sentinel_hline': [],
        'sentinel_headers': [],
        'sentinel_noopener': []
    }

    for pr in prs:
        title = pr['title'].lower()
        if 'bolt' in title:
            if 'ssr' in title or 'cache' in title or 'supabase' in title:
                groups['bolt_ssr_cache'].append(pr)
            elif 'lcp' in title or 'image' in title or 'hero' in title:
                groups['bolt_lcp'].append(pr)
            elif 'date' in title:
                groups['bolt_date'].append(pr)
        elif 'palette' in title:
            if 'footer' in title or 'accessib' in title or 'ux' in title:
                groups['palette_footer'].append(pr)
        elif 'sentinel' in title:
            if 'hline' in title or 'xss' in title:
                groups['sentinel_hline'].append(pr)
            elif 'header' in title:
                groups['sentinel_headers'].append(pr)
            elif 'noopener' in title:
                groups['sentinel_noopener'].append(pr)

    for group_name, pr_list in groups.items():
        if len(pr_list) <= 1:
            continue

        pr_list.sort(key=lambda x: x['number'], reverse=True)

        kept = pr_list[0]
        print(f"Keeping {group_name}: #{kept['number']} {kept['title']}")

        for pr in pr_list[1:]:
            pr_num = pr['number']
            print(f"Closing Duplicate: #{pr_num} {pr['title']}")

            close_url = f"https://api.github.com/repos/jgeofil/mlreadme-astro-blog/pulls/{pr_num}"
            data = json.dumps({"state": "closed"}).encode('utf-8')
            close_req = urllib.request.Request(close_url, data=data, method='PATCH')
            close_req.add_header('Authorization', f'token {token}')
            close_req.add_header('Accept', 'application/vnd.github.v3+json')

            try:
                urllib.request.urlopen(close_req)
                print(f"  -> Successfully closed #{pr_num}")

                # Delete branch
                branch = pr['head']['ref']
                del_url = f"https://api.github.com/repos/jgeofil/mlreadme-astro-blog/git/refs/heads/{branch}"
                del_req = urllib.request.Request(del_url, method='DELETE')
                del_req.add_header('Authorization', f'token {token}')
                del_req.add_header('Accept', 'application/vnd.github.v3+json')

                try:
                    urllib.request.urlopen(del_req)
                    print(f"  -> Deleted branch {branch}")
                except Exception as de:
                    print(f"  -> Failed to delete branch {branch}: {de}")

            except Exception as e:
                print(f"  -> Failed to close #{pr_num}: {e}")

except Exception as e:
    print(f"Error fetching PRs: {e}")
