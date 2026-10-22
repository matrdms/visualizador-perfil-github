import { fetchGitHubUser, fetchGitHubUserRepos, GitHubUserNotFoundError } from "./services/github-api.js";
import { clearProfile, renderLoading, renderProfile } from "./ui/profile-view.js";

const NOT_FOUND_MESSAGE = "Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.";
const SEARCH_ERROR_MESSAGE = "Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.";

export function initializeSearch() {
    const inputSearch = document.getElementById("input-search");
    const btnSearch = document.getElementById("btn-search");
    const profileResults = document.querySelector(".profile-results");

    const searchUser = async () => {
        const userName = inputSearch.value;

        if (!userName) {
            alert("Por favor, digite um nome de usuário do GitHub.");
            clearProfile(profileResults);
            return;
        }

        renderLoading(profileResults);

        try {
            const userData = await fetchGitHubUser(userName);
            const userRepos = await fetchGitHubUserRepos(userName);
            renderProfile(profileResults, userData, userRepos);
        } catch (error) {
            if (error instanceof GitHubUserNotFoundError) {
                alert(NOT_FOUND_MESSAGE);
            } else {
                console.error("Erro ao buscar o perfil do usuário:", error);
                alert(SEARCH_ERROR_MESSAGE);
            }

            clearProfile(profileResults);
        }
    };

    btnSearch.addEventListener("click", searchUser);
    inputSearch.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            searchUser();
        }
    });
}
