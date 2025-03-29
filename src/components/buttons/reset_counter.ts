import { MessageComponentInteraction } from "@dressed/dressed";
import { setCount, showCount } from "../../commands/counter";

export default async function resetCounter(
  interaction: MessageComponentInteraction,
) {
  setCount(0);

  await interaction.update(showCount(0));

  await interaction.followUp({
    content: "Counter has been reset!",
    ephemeral: true,
  });
}
