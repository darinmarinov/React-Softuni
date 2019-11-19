export const createrProject = (project) =>{
    return(dispatch, getState) =>{
        // TODO: Set types and bindActionCreators
        dispatch({type:'CREATE_PROJECT', project})
      }
}