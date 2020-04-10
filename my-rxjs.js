let { Observable, Subject, BehaviorSubject, pipe } = rxjs;
console.log(rxjs);
let { map } = rxjs.operators;


// const subject;

// const userSubject = new Subject();
const userSubject = new BehaviorSubject(null);


// const userObservable = new Observable((subject) => {
//     subject.next(1);
// });

// userSubject.subscribe(data => console.log('1', data));
// userSubject.subscribe(data => console.log(data));


userSubject.pipe(
    map((data) => {
        if (data === null) {
            return 0
        }
        return data;
    })
).subscribe(data => console.log(data));


userSubject.next(1);

// userObservable.

// let i = 0;
// const clickFunc = () => {
//     i++;
//     subject.next(i);
// }
