<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=80&pause=1000&color=FFD700&center=true&vCenter=true&width=1000&height=200&lines=DENKI+MD;VERSION+1.0.0" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://files.catbox.moe/b9qaum.jpg" width="800"/>
</p>


## 💫 FORK THE REPO 💫

[![FORK REPO](https://img.shields.io/badge/FORK%20REPO-Click%20Here-007ACC?style=for-the-badge&logo=github)](https://github.com/denki-arch/DENKI-MD/fork)


---
## ✅ GET YOUR SESSION ID

[![PAIR CODE](https://img.shields.io/badge/GET%20SESSION_ID-Generate%20Now-4CAF50?style=for-the-badge&logo=whatsapp)](https://)

---

[![DENKI TECH HUB](https://img.shields.io/badge/JOIN%20MY-WHATSAPP%20CHANNEL-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com/channel/0029VbB06qE9sBIFlu00Dq0R)

---

## ⚡DENKI-MD⚡
 # ⭐ DÉPLOYMENT OPTION ⭐

### <br>   DEPLOY_HEROKU 

------------
 <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white&labelColor=000000&color=00ffff"/>

------------

### <br>   DEPLOY_TALKDROVE 

<a href='https://host.talkdrove.com/dashboard/select-bot/prepare-deployment?botId=51' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/TALKDROVE-h?color=navy&style=for-the-badge&logo=visualstudiocode'/></a></p>

----------

### <br>    DEPLOY_REPLIT 

-------------

<p align="left"><a href="https://repl.it/github/denki-arch/DENKI-MD"> <img src='https://img.shields.io/badge/-REPLIT-orange?style=for-the-badge&logo=replit&logoColor=white'/></a>

--------------

### <br>   DEPLOY_KOYEB 
---------

<a href='https://app.koyeb.com/auth/signin' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-KOYEB-blue?style=for-the-badge&logo=koyeb&logoColor=white'/></a>

------------

### <br>   DEPLOY_RAILWAY 


-------------

<a href='https://railway.app/new' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/RAILWAY-h?color=black&style=for-the-badge&logo=railway'/></a></p>

---------------


### <br>    DEPLOY_RENDER 


----------------

<a href='https://dashboard.render.com' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/RENDER-h?color=maroon&style=for-the-badge&logo=render'/></a></p>

----------------

✨ DEPLOY ON WORKFLOW ✨

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
 

