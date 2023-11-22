const useEnv = ():string =>  {
    const API:string|undefined = process.env.REACT_APP_END_POINT
    if(!API) {
        throw new Error('API must be defined')
    }

    return API
}


export default useEnv