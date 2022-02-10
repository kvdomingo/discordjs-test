import { config } from "dotenv";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

config();

const { DISCORD_TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const commands = [
  {
    name: "ping",
    description: "Pong!",
  },
];

const rest = new REST({ version: "9" }).setToken(<string>DISCORD_TOKEN);

(async () => {
  try {
    rest
      .put(Routes.applicationGuildCommands(<string>CLIENT_ID, <string>GUILD_ID), { body: commands })
      .then(() => console.log("Registered commands"))
      .catch(console.error);
  } catch (e) {
    console.error(e);
  }
})();
