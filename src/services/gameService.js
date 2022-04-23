const baseUrl = 'http://localhost:3030/data';

export function getAll() {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`)
        .then(res => res.json());

}

export function getOne(id) {
    return fetch(`${baseUrl}/games/${id}`)
    .then(res => res.json());
}
// export function getOne(id) {
//     const res = fetch(`${baseUrl}/games/${id}`);
//     const result = res.json();
//     console.log(result);
//     return result.results;
    
// }
export const getLatest = () => {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(res => res.json());
}