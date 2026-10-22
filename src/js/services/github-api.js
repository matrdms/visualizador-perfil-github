const BASE_URL = "https://api.github.com";

export class GitHubUserNotFoundError extends Error {
    constructor() {
        super("Usuário do GitHub não encontrado.");
        this.name = "GitHubUserNotFoundError";
    }
}

export async function fetchGitHubUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}`);

    if (!response.ok) {
        throw new GitHubUserNotFoundError();
    }

    return response.json();
}
