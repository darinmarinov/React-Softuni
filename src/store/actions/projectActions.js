export const createrProject = (project) =>{
    return(dispatch, getState, { getFirebase, getFirestore }) =>{
        // TODO: Set types and bindActionCreators
        const firestore = getFirestore();
        firestore.collection('projects').add({
          ...project,
          authorFirstName: 'ned',
          authorLastName: 'nikoi',
          authorId: 1213,
          createdAt: new Date()
        }).then(() =>{
          dispatch({type:'CREATE_PROJECT', project})
        }).catch((err)=>{
          dispatch({type:'CREATE_PROJECT_ERROR', err})
        })
      }
}