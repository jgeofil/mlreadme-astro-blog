import os

print("All Environment Variables:")
for key, value in os.environ.items():
    print(f"  {key}: {value[:20] if len(value) > 20 else value}...")
