<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=80&pause=1000&color=FFD700&center=true&vCenter=true&width=1000&height=200&lines=DENKI+MD;VERSION+1.0.0" alt="Typing SVG" />
  </a>
</p>

<p align="center"> 
  <img src="https://files.catbox.moe/b9qaum.jpg" width="800"/>
</p>


## 💫 FORK THE REPO 💫

[![FORK REPO](https://img.shields.io/badge/FORK%20REPO-007ACC?style=for-the-badge&logo=github)](https://github.com/denki-arch/DENKI-MD/fork)


---
## ✅ GET YOUR SESSION ID

[![PAIR CODE](https://img.shields.io/badge/DENKI-MD%20SESSION_ID%20-4CAF50?style=for-the-badge&logo=whatsapp)](https://)

---

[![DENKI TECH HUB](https://img.shields.io/badge/JOIN%20MY-WHATSAPP%20CHANNEL-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com/channel/0029VbB06qE9sBIFlu00Dq0R)

---


## 📡 DÉPLOYMENT OPTION

------------

 <img src="https://img.shields.io/badge/DEPLOY IN Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white&labelColor=000000&color=00ffff"/>

------------
<a href='https://host.talkdrove.com/dashboard/select-bot/prepare-deployment?botId=51' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/DEPLOY IN TALKDROVE-h?color=navy&style=for-the-badge&logo=visualstudiocode'/></a></p>

-------------

<p align="left"><a href="https://repl.it/github/denki-arch/DENKI-MD"> <img src='https://img.shields.io/badge/-DEPLOY IN REPLIT-orange?style=for-the-badge&logo=replit&logoColor=white'/></a>

--------------

<a href='https://app.koyeb.com/auth/signin' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY IN KOYEB-blue?style=for-the-badge&logo=koyeb&logoColor=white'/></a>

------------


<a href='https://railway.app/new' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/DEPLOY IN RAILWAY-h?color=black&style=for-the-badge&logo=railway'/></a></p>

---------------

<a href='https://dashboard.render.com' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/DEPLOY IN RENDER-h?color=maroon&style=for-the-badge&logo=render'/></a></p>

----------------


```

name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```

##  
![MADE BY ⚡𝑫𝑬𝑵𝑲𝑰⚡](https://img.shields.io/badge/CREATOR%20-⚡𝑫𝑬𝑵𝑲𝑰⚡%20-yellow?style=for-the-badge&logo=markdown)
 

