// Styling Imports
import { HomeContainer, FormContainer, TaskInput, MinutesAmountInput, CountdownContainer, Separator, StartCountdownButton } from "./styles";

// Components Imports


// Icons Imports
import { Play } from "phosphor-react";

export function Home() {

  return (
    <HomeContainer>
      <form id="timer-form">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task" 
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Projeto 4"></option>
          </datalist>

          <label htmlFor="minutesAmout">Durante</label>
          <MinutesAmountInput 
            type="number"
            id="minutesAmount" 
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}