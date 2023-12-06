// Styling Imports
import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";

// Strategic Imports
import { useContext } from "react";
import { CyclesContext } from "../..";
import { useFormContext } from "react-hook-form";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={activeCycle !== undefined}
        {...register("task")}
      />

      <datalist id="task-suggestions">
          <option value="Teste1"></option>
          <option value="Teste2"></option>
          <option value="Teste3"></option>
          <option value="Teste4"></option>
      </datalist>

      <label htmlFor="minutesAmout">Durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={activeCycle !== undefined}
        step={5}
        min={5}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
