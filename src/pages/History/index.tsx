// Styling Imports
import { HistoryContainer, HistoryList, Status } from "./styles";

// Components Imports
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";


export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {
              cycles.map(cycle => (
                <tr>
                  <td>{cycle.task}</td>
                  <td>20 minutos</td>
                  <td>Há cerca de 2 meses</td>
                  <td>
                    <Status statusColor="green">Concluído</Status>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
