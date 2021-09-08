class ListeProjetApi {
  async fetchListeProjet() {
    const url = "http://localhost:8080/projet/liste";
    const response = await fetch(url);
    return await response.json();
  }

  async ajouterProjet(projet) {
    // Projet:
    // nom: string
    // description: string
    // image: string
    // article: string

    const url = "http://localhost:8080/projet/ajout";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projet),
    });
  }
}

export default new ListeProjetApi();
