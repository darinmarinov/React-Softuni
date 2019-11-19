const initState = {
    projects: [
        {id:'1', title:'Help Me 1', content:'some dummy data 1 1'},
        {id:'2', title:'Help Me 2', content:'some dummy data 2 2'},
        {id:'3', title:'Help Me 3', content:'some dummy data 3 3'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer