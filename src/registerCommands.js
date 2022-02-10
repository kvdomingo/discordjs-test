var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        rest
            .put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
            .then(() => console.log("Registered commands"))
            .catch(console.error);
    }
    catch (e) {
        console.error(e);
    }
}))();
