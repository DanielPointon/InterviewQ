import { FC } from "react";

export interface RepoProps {
  name: string;
  url: string;
  stars: number;
  forks: number;
}

export const RepoRow: FC<RepoProps> = ({ name, url, stars, forks }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{url}</td>
      <td>{stars}</td>
      <td>{forks}</td>
    </tr>
  );
};
