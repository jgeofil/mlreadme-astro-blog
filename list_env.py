import os

print("All Environment Variables:")
for key, value in os.environ.items():
    if 'token' in key.lower() or 'pass' in key.lower() or 'key' in key.lower() or 'auth' in key.lower() or 'git' in key.lower() or len(value) > 20:
        # Print first few chars of value if it looks like a token
        if 'token' in key.lower():
            print(f"  {key}: {value[:4]}***")
        else:
            print(f"  {key}: present")
