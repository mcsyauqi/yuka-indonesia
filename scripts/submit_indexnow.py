"""
IndexNow Batch URL Submission for yukaindonesia.com
Reads sitemap.xml and submits all URLs to IndexNow API for instant Bing/Yandex indexing.

Usage:
    python scripts/submit_indexnow.py                     # Submit all URLs from sitemap.xml
    python scripts/submit_indexnow.py https://yukaindonesia.com/artikel/new-post
"""

import sys
import os
import xml.etree.ElementTree as ET
import json
import urllib.request
import urllib.error

INDEXNOW_KEY = "18e6b8d14c264b7533b34b39f60e71db"
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"
HOST = "yukaindonesia.com"
KEY_LOCATION = f"https://{HOST}/{INDEXNOW_KEY}.txt"
SITEMAP_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "sitemap.xml")


def parse_sitemap(sitemap_path: str) -> list[str]:
    """Extract all <loc> URLs from sitemap.xml."""
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for url_elem in root.findall("sm:url", ns):
        loc = url_elem.find("sm:loc", ns)
        if loc is not None and loc.text:
            urls.append(loc.text.strip())
    return urls


def submit_urls(urls: list[str]) -> dict:
    """Submit URLs to IndexNow API via POST."""
    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        INDEXNOW_ENDPOINT,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            body = resp.read().decode("utf-8", errors="replace")
            return {"status": status, "body": body}
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace") if e.fp else ""
        return {"status": e.code, "body": body, "reason": e.reason}


def main():
    # Collect URLs: from CLI args or sitemap
    if len(sys.argv) > 1:
        urls = [arg for arg in sys.argv[1:] if arg.startswith("http")]
        source = "CLI arguments"
    else:
        if not os.path.exists(SITEMAP_PATH):
            print(f"ERROR: sitemap.xml not found at {SITEMAP_PATH}")
            sys.exit(1)
        urls = parse_sitemap(SITEMAP_PATH)
        source = "sitemap.xml"

    if not urls:
        print("No URLs to submit.")
        sys.exit(0)

    print(f"IndexNow Submission for {HOST}")
    print(f"Source: {source}")
    print(f"URLs to submit: {len(urls)}")
    print(f"Key: {INDEXNOW_KEY}")
    print("-" * 60)

    # IndexNow accepts max 10,000 URLs per request; batch if needed
    BATCH_SIZE = 10000
    for i in range(0, len(urls), BATCH_SIZE):
        batch = urls[i : i + BATCH_SIZE]
        batch_num = (i // BATCH_SIZE) + 1
        print(f"\nBatch {batch_num}: Submitting {len(batch)} URLs...")
        result = submit_urls(batch)
        status = result["status"]

        if status in (200, 202):
            print(f"  SUCCESS (HTTP {status})")
        else:
            print(f"  Response: HTTP {status}")
            if result.get("body"):
                print(f"  Body: {result['body'][:500]}")
            if result.get("reason"):
                print(f"  Reason: {result['reason']}")

    print("\n" + "-" * 60)
    print("Submitted URLs:")
    for url in urls:
        print(f"  {url}")
    print(f"\nTotal: {len(urls)} URLs submitted to IndexNow")


if __name__ == "__main__":
    main()
