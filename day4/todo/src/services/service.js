class NoteServices {
    data = []

    set setData(array){
        this.data = array
    }

    get getData(){
        return this.data;
    }
}

export default new NoteServices();