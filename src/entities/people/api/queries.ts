export const ALL_PEOPLE_QUERY = `
query AllPeople($first: Int){
    allPeople(first: $first) {
        people {
            id
            name
        }
    }
}
`