{
    // Object destructuring 
    const user ={
        id : 2222,
        name : {
            firstName: 'manik',
            middleName : "hos",
            lastName : 'hossain'
        },
        address:'thakurgoan',
    }
    const {
        id,
        name : {firstName, lastName, middleName},
        address,
    } = user;

    // array destructuring 
    const Friendslist: string[] = ['manik','han','hak','taka','kew'];
    const [,,hakim,...rest] = Friendslist;
}