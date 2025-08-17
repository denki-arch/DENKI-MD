const { cmd, commands } = require('../command');
const axios = require('axios');

// Commande .pair
cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "✅",
    desc: "Get pairing code for MEGALODON-MD bot",
    category: "download",
    use: ".pair +225xxxxx",
    filename: __filename
}, async (conn, mek, m, { q, senderNumber, reply }) => {
    try {
        const phoneNumber = q ? q.trim() : senderNumber;

        if (!phoneNumber || !phoneNumber.match(/^\+?\d{10,15}$/)) {
            return await reply("❌ Please provide a valid phone number with country code\nExample: .pair +225xxxxx");
        }

        // NOUVEAU LIEN UTILISÉ ICI
        const response = await axios.get(`https://denki-md-session-id.onrender.com/?number=${encodeURIComponent(phoneNumber)}`);

        if (!response.data || !response.data.code) {
            return await reply("❌ Failed to retrieve pairing code. Please try again later.");
        }

        const pairingCode = response.data.code;
        const doneMessage = "> *DENKI-MD PAIRING COMPLETED*";

        await reply(`${doneMessage}\n\n*Your pairing code is:* ${pairingCode}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await reply(`${pairingCode}`);
    } catch (error) {
        console.error("Pair command error:", error);
        await reply("❌ An error occurred while getting pairing code. Please try again later.");
    }
});
