export const getstoredBook = () =>{
    const getFromdb = localStorage.getItem('readList')

    if (getFromdb) {
        const getinParseInt = JSON.parse(getFromdb);    
        return getinParseInt;
    }
    else{
        return [];
    }
}
export const addToStoredDb = (id)=>{

    const AddtoStore = getstoredBook();

    if (AddtoStore.includes(id)) {
        alert('sorry this id already exist')
    }
    else{
        AddtoStore.push(id);
        const AddInstringyfy  = JSON.stringify(AddtoStore)
        localStorage.setItem('readList', AddInstringyfy)
    }

}
