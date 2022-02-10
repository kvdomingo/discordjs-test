import dotenv from "dotenv";
import { Client, Intents } from "discord.js";

dotenv.config();

const { DISCORD_TOKEN } = process.env;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", async () => {
  if (client.user) console.log(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply(`Pong! (${client.ws.ping} ms)`);
  }
});

client.login(DISCORD_TOKEN);
