import type { CommandConfig, CommandInteraction } from "@dressed/dressed";

export const config: CommandConfig = {
  description: "Says hello!",
};

export default async function greet(interaction: CommandInteraction) {
  await interaction.reply({
    content: `Hey there, ${interaction.user.global_name}!`,
    ephemeral: true,
  });
}
