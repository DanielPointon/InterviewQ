import { FC } from "react";
import { RepoRow } from "./RepoRow";
import { Repo } from "./types";

interface ResultsProps {
  repos: Repo[];
}

export const RepoTable: FC<ResultsProps> = ({ repos }) => {
  const getRepoAsRow = (repo: Repo) => (
    <RepoRow
      name={repo.name}
      stars={repo.stars}
      url={repo.url}
      forks={repo.forks}
      key={repo.url}
    ></RepoRow>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Stars</th>
          <th>Forks</th>
        </tr>
      </thead>
      <tbody>{repos.map(getRepoAsRow)}</tbody>
    </table>
  );
};
