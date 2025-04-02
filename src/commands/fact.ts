import { type CommandConfig, type CommandInteraction } from "@dressed/dressed";

export const config: CommandConfig = {
  description: "Gives a random useless fact",
};

export default async function fact(interaction: CommandInteraction) {
  await interaction.deferReply({
    ephemeral: true,
  });
  const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
  const factData = (await res.json()) as { text: string; source_url: string };

  await interaction.editReply(
    `## Did you know?\n${factData.text}\n-# [Source](${factData.source_url})`,
  );
}
