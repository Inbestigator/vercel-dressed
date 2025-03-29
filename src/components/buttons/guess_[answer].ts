import {
  ActionRow,
  Button,
  MessageComponentInteraction,
} from "@dressed/dressed";
import { triviaData } from "../../commands/trivia";

export default async function guess(
  interaction: MessageComponentInteraction,
  { answer }: { answer: string },
) {
  const question = triviaData[interaction.user.id];

  const updatedButtons = interaction.message.components![0].components.map(
    (button) => ({
      ...button,
      style: (button as { label: string }).label ===
          (question as { correctAnswer: string }).correctAnswer
        ? 3
        : 4,
      disabled: true,
    }),
  ) as ReturnType<typeof Button>[];

  if (
    (question as { correctAnswer: string }).correctAnswer
      .toLowerCase()
      .replace(/[^a-z]/g, "_") !== answer
  ) {
    await interaction.update({
      content: `## Nice try!\n${interaction.message.content.split("\n")[1]}`,
      components: [ActionRow(...updatedButtons)],
    });
    return;
  }

  await interaction.update({
    content: `## Correct!\n${interaction.message.content.split("\n")[1]}`,
    components: [ActionRow(...updatedButtons)],
  });
}
