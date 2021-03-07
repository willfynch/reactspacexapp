const APIFetcher = {
    apiBaseURL: 'https://api.spacexdata.com/v3',
    get(uri, filters) {
        const filter = (filters) ? `?filter=${filters}` : '';
        return fetch(`${this.apiBaseURL}${uri}${filter}`).then(res => res.json())
    }
}

export default APIFetcher;