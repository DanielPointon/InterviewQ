import { FC, useCallback, useEffect, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { RepoTable } from "./RepoTable";

/**
 * Fetches and displays the repos, or shows an error.
 */

interface ResultsProps {
  orgName: string;
  clearResults: () => void;
}

export const ResultsDisplay: FC<ResultsProps> = ({ orgName, clearResults }) => {
  const [repos, setRepos] = useState([]);
  const [errored, setErrored] = useState(false);

  const storeRepos = (repositories: any) => {
    const newRepos = repositories.map((repo: any) => {
      return {
        name: repo.name,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
      };
    });
    setRepos(newRepos);
  };

  /**
   * Function to fetch the repos from Github API
   */
  const fetchRepos = useCallback(async () => {
    const response = await fetch(
      `https://api.github.com/orgs/${orgName}/repos`
    );
    const json = await response.json();

    console.log(json);
    setErrored(response.status !== 200);
    storeRepos(json);
  }, [orgName]);

  /**
   * Fetch repos asap
   */
  useEffect(() => {
    fetchRepos();
  }, [fetchRepos, orgName]);

  return (
    <div>
      <button onClick={clearResults} className={"BackButton"}>
        Go Back
      </button>
      {errored ? ( // if we errored, display error message, else continue
        <ErrorMessage></ErrorMessage>
      ) : (
        <RepoTable repos={repos}></RepoTable>
      )}
    </div>
  );
};
