import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: var(--text);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--white);
      color: var(--text);
      border-radius: 0.25rem;
    }

    td:first-child {
      color: var(--title);
    }
    td.deposit {
      color: var(--green);
    }
    td.withdraw {
      color: var(--red);
    }
  }
`;
