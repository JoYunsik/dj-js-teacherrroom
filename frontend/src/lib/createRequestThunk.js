const createRequestThunk = (type, request) =>{
    return (params)=> async dispatch =>{
        try {
            const response = await request(params);
            dispatch({
                type: type,
                payload: response.data? response.data : params
            })
        } catch(error){
            console.log(error)
            throw error;
        }
    }
}

export default createRequestThunk