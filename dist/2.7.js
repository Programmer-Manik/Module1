"use strict";
{
    // spread operator 
    // array spread operator 
    const bros1 = ['mani', 'saki', 'ham'];
    const bros2 = ['saki', 'babu', 'mam'];
    bros1.push(...bros2);
    // Object spread operator 
    const mentors1 = {
        typescript: "mezba",
        redux: 'mir',
        dbms: "mizan"
    };
    const mentors2 = {
        prisma: 'riroz',
        next: 'tanmoy',
        cloud: 'nahid'
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    // rest operator 
    //  const greetFriends = (…friends : string) ⇒ {
    //     friends.forEach((friends:string) => console.log(`hi `))
    //  }
    //  greetFriends('manik','islam','hose')
}
