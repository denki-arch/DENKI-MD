const axios = require('axios');
const fetch = require('node-fetch');
const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Obtenir les infos du dépôt GitHub",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/denki-arch/DENKI-MD';

    try {
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);

        if (!response.ok) throw new Error(`Erreur API GitHub : ${response.status}`);
        const repoData = await response.json();

        const author = repoData.owner.login;
        const repoInfo = {
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            url: repoData.html_url
        };
        const createdDate = new Date(repoData.created_at).toLocaleDateString();
        const lastUpdateDate = new Date(repoData.updated_at).toLocaleDateString();
        const botname = "DENKI-MD";

        const styleCustom = `𝗛𝗲𝗹𝗹𝗼 👋 𝗜'𝗺 𝗗𝗘𝗡𝗞𝗜-𝗠𝗗 ,
𝗗𝗘𝗡𝗞𝗜-𝗠𝗗 𝗶𝘀 𝗮 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁 𝗰𝗿𝗲𝗮𝘁𝗲𝗯 𝗯𝘆⚡𝑫𝑬𝑵𝑲𝑰⚡.
𝗽𝗹𝗲𝗮𝘀𝗲 𝗳𝗼𝗿𝗸 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝗺𝗲 𝗮 𝘀𝘁𝗮𝗿 ⭐ 𝘁𝗼 𝗺𝘆 𝗿𝗲𝗽𝗼 
╔════════════════════❒
║☆ 𝔹𝕆𝕋 ℕ𝔸𝕄𝔼:DENKI-MD
║☆ ℂℝ𝔼𝔸𝕋𝕆ℝ:⚡𝑫𝑬𝑵𝑲𝑰⚡ 
║☆ 𝔽𝕆ℝ𝕂𝕊:${repoInfo.forks}
║☆ 𝕊𝕋𝔸ℝ𝕊:${repoInfo.stars}
║☆ ℝ𝔼ℙ𝕆:https://github.com/denki-arch/DENKI-MD
║☆ 𝕊𝔼𝕊𝕊𝕀𝕆ℕ : denki-md-session-id.onrender.com
╚════════════════════❒

        // Télécharger l'image
        const thumbnailBuffer = await axios.get('https://files.catbox.moe/b9qaum.jpg', { responseType: 'arraybuffer' }).then(res => res.data);

        // Envoyer le message avec image
        await conn.sendMessage(from, {
            image: thumbnailBuffer,
            caption: styleCustom,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401051937059@newsletter',
                    newsletterName: '𝐃𝐄𝐍𝐊𝐈-𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Erreur commande repo:", error);
        reply(`❌ Erreur : ${error.message}`);
    }
});
