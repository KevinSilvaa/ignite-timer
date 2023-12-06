import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme["gray-100"]};
  flex-wrap: wrap;
`;

const baseInput = styled.input`
  background: transparent;
  border: 0;
  height: 2.5rem;
  border-bottom: 2px solid ${({ theme }) => theme["gray-500"]};
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme["green-500"]};
  }

  &::placeholder {
    color: ${({ theme }) => theme["gray-500"]};
  }
`;

export const TaskInput = styled(baseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(baseInput)`
  width: 4rem;
`;


export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme["gray-100"]};

  span {
    background: ${({ theme }) => theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0.75rem 0 0;
  color: ${({ theme }) => theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme["gray-100"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme["red-500"]};
  color: ${({ theme }) => theme["white"]};

  &:hover {
    background: ${({ theme }) => theme["red-700"]};
  }
`;
