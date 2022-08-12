// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

// Listen for Commands
client.on("interactionCreate",
  async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === "intro") {
      await interaction.reply("WHATS GOIN ON GUYS?!?! MY NAMES DJ");
    }
  });

// Login to Discord with your client's token
client.login(token);
