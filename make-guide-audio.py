#!/usr/bin/env python3
# make-guide-audio.py
# Version 1.8 — 2026-09-30 13:05 EDT — Claude
# Builds videos/audio/TimeTravelSky-Guide-<language>.m4a with the macOS voice `say`.
# Texts and timings are read from videos/time-travel-guide.js; each part starts
# at its set time and is sped up if it would run past the next part.
# Usage: python3 make-guide-audio.py ru Milena

import json, re, subprocess, sys, tempfile, wave
from pathlib import Path

SITE = Path.home() / "Desktop" / "micro-creatif-main"
GUIDE = SITE / "videos" / "time-travel-guide.js"
AUDIO = SITE / "videos" / "audio"
MARGIN = 0.3        # seconds of silence left at the end of each part
SAMPLE_RATE = 44100
URL = "microcreatif.ca/time-travel.html"
SPOKEN_SITE = {   # what the voice says instead of the URL
    "ru": "сайте Микро Креатиф",
    "es": "el sitio de Micro Créatif",
    "de": "der Website von Micro Créatif",
    "it": "il sito di Micro Créatif",
    "ar": "موقع ميكرو كرياتيف",
    "zh-Hans": "我们的网站",
    "zh-Hant": "我們的網站",
    "ko": "마이크로 크레아티프 웹사이트",
}
SPOKEN_NAME = {   # how the voice says "Time Travel Sky" where the default fails
    "zh-Hans": "Time Travel Sky，",
    "zh-Hant": "Time Travel Sky，",
    "ko": "타임 트래블 스카이[[slnc 300]]",
}
RATE = {}   # words per minute for voices that speak too fast by default

language, voice = sys.argv[1], sys.argv[2]
js = GUIDE.read_text(encoding="utf-8")
timings = [(float(a), float(b)) for a, b in re.findall(r"start:\s*([\d.]+),\s*end:\s*([\d.]+)", js)]
texts = json.loads(re.search(r"const guideText = (\{.*?\n  \});", js, re.S).group(1))[language]
tmp = Path(tempfile.mkdtemp())

def render(text, path, rate=None):
    command = ["say", "-v", voice, "--file-format=WAVE", f"--data-format=LEI16@{SAMPLE_RATE}", "-o", str(path)]
    if rate:
        command += ["-r", str(rate)]
    subprocess.run(command + [text], check=True)
    with wave.open(str(path)) as clip:
        if clip.getnchannels() != 1 or clip.getframerate() != SAMPLE_RATE:
            sys.exit("Unexpected audio format from say.")
        return clip.getnframes() / SAMPLE_RATE, clip.readframes(clip.getnframes())

track = bytearray(int(timings[-1][1] * SAMPLE_RATE) * 2)
for number, ((start, end), text) in enumerate(zip(timings, texts), 1):
    text = text.replace(URL, SPOKEN_SITE.get(language, "Micro Créatif"))
    text = text.replace("Time Travel Sky", SPOKEN_NAME.get(language, "Time Travel Sky"))
    target = end - start - MARGIN
    clip = tmp / f"part{number}.wav"
    rate = RATE.get(language)
    duration, frames = render(text, clip, rate)
    while duration > target:
        rate = int((rate or 175) * duration / target) + 5
        duration, frames = render(text, clip, rate)
    position = int(start * SAMPLE_RATE) * 2
    track[position:position + len(frames)] = frames
    print(f"Part {number}: {duration:.1f} s in a {end - start:.1f} s slot" + (f", rate {rate}" if rate else ""))

full = tmp / "guide.wav"
with wave.open(str(full), "wb") as output:
    output.setnchannels(1)
    output.setsampwidth(2)
    output.setframerate(SAMPLE_RATE)
    output.writeframes(bytes(track))

destination = AUDIO / f"TimeTravelSky-Guide-{language}.m4a"
subprocess.run(["afconvert", "-f", "m4af", "-d", "aac", "-b", "64000", str(full), str(destination)], check=True)
print("Saved", destination)
